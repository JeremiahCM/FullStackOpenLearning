//Header component
const Header = ({ title }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  )
}

//Part component
const Part = ({ part }) => {
  return (
    <div>
      {part.name} {part.exercise}
    </div>
  )
}

//Content component
const Content = ({ parts }) => {
  const partComponents = parts.map(part => <Part part={{name: part.name, exercise: part.exercises}}/>)

  return (
    <div>
      {partComponents}
    </div>
  )
}

//Total component
const Total = ({ parts }) => {
  var total = parts.reduce((count, part) => count + part.exercises, 0)

  return (
    <div>
      <p><b>Number of exercises {total}</b></p>
    </div>
  )
}

//Course component
const Course = ({ course }) => {
  return (
    <div>
      <Header title={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts}/>
    </div>
  )
}

//Curriculum component
const Curriculum = ({ courses }) => {
  const courseComponents = courses.map(course => <Course course={course}/>)

  return (
    <div>
      {courseComponents}
    </div>
  )
}

//App component
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <>
      <Header title='Web development curriculum' />
      <Curriculum courses={courses} />
    </>
  )
}

export default App