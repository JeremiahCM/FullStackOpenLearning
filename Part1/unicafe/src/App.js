import { useState } from 'react'

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad
  const average = good > 0 || bad > 0 ? (good - bad) / total : 0
  const percentage = good > 0 ? good / total * 100 : 0

  return (
    <div>
      <h1>Statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>percentage {percentage}%</p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

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
    <div>
      <Feedback good={handleGoodClick} neutral={handleNeutralClick} bad={handleBadClick}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App