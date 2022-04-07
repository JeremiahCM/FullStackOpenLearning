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
      <Button handleClick={good} text='good' />
      <Button handleClick={neutral} text='neutral' />
      <Button handleClick={bad} text='bad' />
    </div>
  )
}

//Header component
const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

//Statistics component
const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

  const average = good > 0 || bad > 0 ? (good - bad) / all : 0
  const positive = good > 0 ? good / all * 100 + " %" : 0 + " %"

  return (
    <div>
      <table>
        <tbody>
          <StatisticLine text="good" value={good}/>
          <StatisticLine text="neutral" value={neutral}/>
          <StatisticLine text="bad" value={bad}/>
          <StatisticLine text="all" value={all}/>
          <StatisticLine text="average" value={average}/>
          <StatisticLine text="positive" value={positive}/>
        </tbody>
      </table>
    </div>
  )
}

const StatisticLine = ({ text, value }) => {
  return (
      <tr><td>{text}</td><td>{value}</td></tr>
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
      <Header title="Give Feedback"/>
      <Feedback good={handleGoodClick} neutral={handleNeutralClick} bad={handleBadClick}/>
      <Header title="Statistics"/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App