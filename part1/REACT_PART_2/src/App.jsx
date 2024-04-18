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
  const part1 = {
    name: 'Fundaments of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  } 

  return (
    <div>
      <Header coursename={course}/>
      <Content name1={part1.name} exercises1={part1.exercises} name2={part2.name} exercises2={part2.exercises} name3={part3.name} exercises3={part3.exercises}/>
      <Total totalexercises={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

export default App