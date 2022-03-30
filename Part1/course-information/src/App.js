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

const Content = (props) => {
  return (
    <div>
      <Part part={{name: props.parts[0].name, exercise: props.parts[0].exercise}}/>
      <Part part={{name: props.parts[1].name, exercise: props.parts[1].exercise}}/>
      <Part part={{name: props.parts[2].name, exercise: props.parts[2].exercise}}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercise + props.parts[1].exercise + props.parts[2].exercise}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React', 
      exercise: 10
    },
    {
      name: 'Using props to pass data',
      exercise: 7
    },
    {
      name: 'State of a component',
      exercise: 14
    }
  ]

  return (
    <>
      <Header course={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </>
  )
}

export default App