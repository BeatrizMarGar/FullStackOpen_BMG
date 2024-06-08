import { useState } from "react"

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

const StatisticLine = (props) => {
  return (
    <div>
      <p>{props.statistic}</p>
    </div>
  )
}

const Statics = (props) => {
  props.result ? console.log("true") : console.log("false")

  if (props.all){
    return (
      <div>
        <table>
          <tr>
          </tr>
          <tr>
            <td>Good</td>
            <td>
            <StatisticLine text="Good" statistic={props.good} />
            </td>
          </tr>
          <tr>
            <td>Neutral</td>
            <td>
              <StatisticLine text="Neutral" statistic={props.neutral} /></td>
          </tr>
          <tr>
            <td>Bad</td>
            <td>
              <StatisticLine text="Bad" statistic={props.bad} /></td>
          </tr>
          <tr>
            <td>ALL</td>
            <td>
              <StatisticLine text="All feedback" statistic={props.all} />
            </td>
          </tr>
          <tr>
            <td>Average</td>
            <td>
              <StatisticLine text="Average" statistic={props.average} />
            </td>
          </tr>
          <tr>
            <td>Positive</td>
            <td>
              <StatisticLine text="Positive" statistic={props.positive} />
            </td>
          </tr>
        </table>
        </div>
    )
  }
  return (
    <div> No feedback given</div>
  )
}

const App = () => {
  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)
  const [All, setAll] = useState(0)
  const [Average, setAverage] = useState(0)
  const [Positive, setPositive] = useState(0)

  const newGood = () => {
    const update = Good + 1
    const average = Average + 1 
    const newAll = update + Neutral + Bad

    setGood(update);
    setAll(newAll)
    setAverage(average)
    
    const mult = update * 100
    const result = Math.floor( mult / newAll)
    
    setPositive(newAll ? result : 0)
    
  }
  const newNeutral = () => {
    const update = Neutral + 1
    const newAll = Good + update + Bad
    setNeutral(update)
    setAll (newAll)

    const mult = Good * 100
    const result = Math.floor( mult / newAll)
    
    setPositive(newAll ? result : 0)

  }

  const newBad = () => {
    const update = Bad + 1 
    const average = Average - 1
    const newAll = Good + Neutral + update
    setBad(update)
    setAll( newAll)
    setAverage (average)

    const mult = Good * 100
    const result = Math.floor( mult / newAll)
    
    setPositive(newAll ? result : 0)
    
  }
  return(
    <div>
      <h2>Give Feedback</h2>
      <Button good={Good} onClick={newGood} name={"Good"}/>
      <Button neutral={Neutral} onClick={newNeutral} name={"Neutral"} />
      <Button bad={Bad} onClick={newBad} name={"Bad"}/>
      <br></br>
      <h2>Statics</h2>
      <Statics good={Good} neutral={Neutral}bad={Bad} all={All} average={Average} positive={Positive}/>
    </div>
  )
}


export default App