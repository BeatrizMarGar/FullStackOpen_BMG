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
      <p>{props.text} : {props.statistic}</p>
    </div>
  )
}

const Statics = (props) => {
  props.result ? console.log("true") : console.log("false")

  if (props.all){
    return (
      <div>
        <StatisticLine text="Good" statistic={props.good} />
        <StatisticLine text="Neutral" statistic={props.neutral} />
        <StatisticLine text="Bad" statistic={props.bad} />
        <br></br>
        <StatisticLine text="All feedback" statistic={props.all} />
        <StatisticLine text="Average" statistic={props.average} />
        <StatisticLine text="Positive" statistic={props.positive} />
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