import { useState } from 'react'



const Average = ({good, neutral, bad}) => {

  const all = good + bad + neutral

  if (all === 0) {
    return (
      <div>
        No feedback given. Click the buttons to get an average
      </div>
    )
  }

  return (
    <div> Average: {(good - neutral) / (good + bad + neutral)}</div>
  )

}

const Statistics = ({good, neutral, bad}) => {
//nice, already done
  return(
    <div>
      <h1>Statistics</h1>
      <div> Good: {good}  </div>
      <div> Neutral: {neutral}   </div>
      <div> Bad: {bad}  </div>
      <div> All: {good + bad + neutral}</div>
      <Average good={good} neutral={neutral} bad={bad}/>
    </div>)
  }


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const handleGood = () => {
    setGood(good + 1)
  }

  
  const handleNeutral = () => {
    setNeutral(neutral + 1)
  }

  
  const handleBad = () => {
    setBad(bad + 1)
  }
  
  

  return (
    <div>
      <div>
        <h1>Give Feedback</h1>
        <button onClick={handleGood}>Good</button>
        <button onClick={handleNeutral}>Neutral</button>
        <button onClick={handleBad}>Bad</button>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App