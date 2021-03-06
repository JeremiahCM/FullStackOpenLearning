import { useState } from 'react'

//Button component
const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

//Header component
const Header = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

//Anecdote component
const Anecdote = ({ anecdote, votes }) => {
  return (
    <div>
      {anecdote}
      <p>has {votes} votes</p>
    </div>
  )
}

//App component
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Uint8Array(anecdotes.length))

  const maxIndex = votes.indexOf(Math.max(...votes))

  const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
  }
  
  const randomClick = () => {
    setSelected(getRandomInt(anecdotes.length))
  }

  const voteClick = () => {
    const newVotes = [...votes]
    newVotes[selected] += 1
    setVotes(newVotes)
  }

  return (
    <div>
      <Header title='Anecdote of the day'/>
      <Anecdote anecdote={anecdotes[selected]} votes={votes[selected]}/>
      <div>
        <Button handleClick={voteClick} text='vote'/>
        <Button handleClick={randomClick} text='next anecdote'/>
      </div>
      <Header title='Anecodtes with most votes'/>
      <Anecdote anecdote={anecdotes[maxIndex]} votes={votes[maxIndex]}/>
    </div>
  )
}

export default App