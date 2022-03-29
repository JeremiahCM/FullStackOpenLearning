const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      {props.part.name} {props.part.exercise}
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.part1.exercise + props.part2.exercise + props.part3.exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {name: 'Fundamentals of React', exercise: 10}
  const part2 = {name: 'Using props to pass data', exercise: 7}
  const part3 = {name: 'State of a component', exercise: 14}

  return (
    <>
      <Header course={course}/>
      <Part part={part1}/>
      <Part part={part2}/>
      <Part part={part3}/>
      <Total part1={part1} part2={part2} part3={part3}/>
    </>
  )
}

export default App