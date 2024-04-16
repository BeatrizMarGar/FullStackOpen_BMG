const Header = (props) => {
  return (
    <div>
      <h1>{props.coursename}</h1>
    </div>
  )
}
const Content = (props) => {
  return (
    <div>
      <p>The part {props.name} has a total of {props.exercises} exercises</p></div>
  )
}
const Total = (props) => {
  console.log(props.totalexercises)
  return (
    <div>
      <p>This course presents a total of {props.totalexercises} exercises</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundaments of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header coursename={course}/>
      <Content name={part1} exercises={exercises1}/>
      <Content name={part2} exercises={exercises2}/>
      <Content name={part3} exercises={exercises3}/>
      <Total totalexercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App