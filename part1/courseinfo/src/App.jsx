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
      <Part name={props.name1} ex={props.exercises1}/>
      <Part name={props.name2} ex={props.exercises2}/>
      <Part name={props.name3} ex={props.exercises3}/>
    </div>
  )
}
const Part = (props) => {
  return (
    <div>
    <p>The part {props.name} has a total of {props.ex} exercises</p>
    </div>
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
      <Content name1={part1} exercises1={exercises1} name2={part2} exercises2={exercises2} name3={part3} exercises3={exercises3}/>
      <Total totalexercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App