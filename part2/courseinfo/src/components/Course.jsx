const Header = (props) => <h2>{props.course}</h2>

const Content = (props) => (
  <div>
    {props.parts.map(part => 
        <Part key={part.id} part={part} />
    )}
  </div>
)

const Part = (props) => (
  <p>
    {props.part.name} {props.part.exercises}
  </p>
)

const Total = (props) => <p><b>Number of exercises: {props.total}</b></p>

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => {
      return sum + part.exercises
    }, 0)

  return (
  <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

export default Course