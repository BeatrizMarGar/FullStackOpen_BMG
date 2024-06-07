import { useState } from "react";

const App = () => {
  const [Good, setGood] = useState(0)
  const [Neutral, setNeutral] = useState(0)
  const [Bad, setBad] = useState(0)

  const newGood = () => {setGood(Good + 1 )}
  const newNeutral = () => {setNeutral(Neutral + 1 )}
  const newBad = () => {setBad(Bad + 1 )}

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
    </div>
  )


}


export default App