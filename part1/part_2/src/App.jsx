import { useState } from "react"

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

  return <Course courses={courses} />
}

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


export default App