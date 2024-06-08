import { useState } from "react"

const History = (props) => {
  if (props.allClicks.length === 0){
    return
  }

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
      <button onClick={newGood}>good</button>
      <button onClick={newNeutral}>neutral</button>
      <button onClick={newBad}>bad</button>
      <br></br>
      <h2>Statics</h2>
      <p>Good {Good}</p>
      <p>Neutral {Neutral}</p>
      <p>Bad {Bad}</p>
      <br></br>
      <p>All {All}</p>
      <br></br>
      <p>Average {Average}</p>
      <br></br>
      <p>Positive {Positive}</p>
    </div>
  )


}


export default App