const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

const Course = (props) => {
  const course = props.course
  return (
    <div>
      <Header name={course.name}></Header>
      <Content parts={course.parts}>
      </Content>
    </div>
  )
}

const Header = (props) =>{
return (
  <div>
    <h1>{props.name}</h1>
  </div>
)
}
const Content = (props) =>{
  const parts = props.parts
  return (
    <div>
      {parts.map(part =>
        <Part details={part} key={part.id}></Part>
      )}
    </div>
  )
}

const Part = (props) => {
  const detail = props.details
  console.log(detail)
  return (
    <div>
      <p>{detail.name} {detail.exercises}</p>
    </div>
  )
}


export default App