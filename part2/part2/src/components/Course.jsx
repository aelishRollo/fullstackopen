const Course = ({course}) => {
  const {name, parts} = course

  return (
    <div>
      <h1>{name}</h1>
      <div>
        {parts.map((part) => {
          return (
            <h3 key={part.id}>{part.name} {part.exercises}</h3>
          )
        })
        }
      </div>
      <div>
      Total of{' '}
      {parts.reduce((sum, part) => {
        return sum + part.exercises
      }, 0)}
      {' '} exercises
      </div>
    </div>
  )
}

export default Course
