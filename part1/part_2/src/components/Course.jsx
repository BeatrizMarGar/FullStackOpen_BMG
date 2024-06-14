
const Course = (props) => {
  const courses = props.courses
  return (
    <div>
      {courses.map (course =>  
      <Header info={course} key={course.id}/>
    )}
    </div>
  )
}

const Header = (props) =>{
  const name= props.info.name
  const parts = props.info.parts
return (
  <div>
    <h1>{name}</h1>
    {parts.map(part => 
      <Content key={part.id} part={part}/>
    )}
     <p>Total exercises: 
          {
            parts.reduce((sum, part) => sum + part.exercises, 0)
          }
      </p> 
  </div>
)
}

const Content = (props) =>{
  const part = props.part
  /*
        <p>Total exercises: 
          {
            parts.reduce((sum, part) => sum + part.exercises, 0)
          }
        </p> */
  return (
    <div>
      <Part name={part.name} exercises={part.exercises}/>
    </div>
  )
}

const Part = (props) => {
  const name = props.name
  const exercises = props.exercises
  return (
    <div>
      <p>{name} : {exercises}</p>
    </div>
  )
}


export default Course