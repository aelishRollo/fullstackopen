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
    <StatisticLine text={'Average'} value={(good - neutral) / (good + bad + neutral)}/>
  )
}


const Button = ({handler, text}) => {
  return(
    <button onClick={handler}>{text}</button>
  )
}

const StatisticLine = ({text, value}) => {
  return(
    <div>{text}: {value}</div>
  )
}


const Statistics = ({good, neutral, bad}) => {
//nice, already done
  return(
    <div>
      <h1>Statistics</h1>
      <StatisticLine text={'Good'} value={good}/>
      <StatisticLine text={'Neutral'} value={neutral}/>
      <StatisticLine text={'Bad'} value={bad}/>
      <StatisticLine text={'All'} value={good + bad + neutral}/>
      {/* <StatisticLine text={'Average'} value={(good - neutral) / (good + bad + neutral)}/> */}
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
        <Button handler={handleGood} text={'Good'}/>
        <Button handler={handleNeutral} text={'Neutral'}/>
        <Button handler={handleBad} text={'Bad'}/>
      </div>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App