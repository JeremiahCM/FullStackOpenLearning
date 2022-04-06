import { useState } from 'react'

//Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//Feedback component
const Feedback = ({ good, neutral, bad }) => {
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={good} text='good' />
      <Button handleClick={neutral} text='neutral' />
      <Button handleClick={bad} text='bad' />
    </div>
  )
}

//Statistics component
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        <h1>Statistics</h1>
        No feedback given
      </div>
    )
  }

  const average = good > 0 || bad > 0 ? (good - bad) / all : 0
  const percentage = good > 0 ? good / all * 100 + " %" : 0 + " %"

  return (
    <div>
      <h1>Statistics</h1>
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
      <StatisticLine text="all" value={all}/>
      <StatisticLine text="average" value={average}/>
      <StatisticLine text="percentage" value={percentage}/>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
    <div>
      <p>{text} {value}</p>
    </div>
  )
}

//App component
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // event handler functions
  const handleGoodClick = () => {
    setGood(good + 1)
  }
  
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  
  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <>
      <Feedback good={handleGoodClick} neutral={handleNeutralClick} bad={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App