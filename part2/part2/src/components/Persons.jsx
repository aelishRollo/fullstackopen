import Person from "./Person"

const Persons = ({persons}) => {
  return (
    <ul>
      {persons.map((person) => <Person name={person.name} number={person.number} id={person.id}/>)}
    </ul>
  )
}

export default Persons