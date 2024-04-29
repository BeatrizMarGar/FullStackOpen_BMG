const Header = (props) => {
  return (
    <div>
      <h1>{props.coursename}</h1>
    </div>
  )
}
const Content = (props) => {
  let parts = props.parts
  let myelements = parts.map(element => {
    let name = element.name
    let exercise = element.exercises
    return (
      <Part name={name} ex={exercise}/>
    )
  })
  
  return (
    <div>
      {myelements}
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
  let total = 0;
  let parts = props.totalexercises
  parts.forEach(element => {
    let number = element.exercises;
    total += number;
  });
  return (
    <div>
      <p>This course presents a total of {total} exercises</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
      {
      name: 'Fundaments of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    } 
  
]

  return (
    <div>
      <Header coursename={course}/>
      <Content parts={parts}/>
      <Total totalexercises={parts} />
    </div>
  )
}

export default App