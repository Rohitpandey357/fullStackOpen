import { useState } from 'react'

const Person = (props) => {
  return (
    <li>
      {props.name}
    </li>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    const person = { name: newName }
    setPersons([...persons, person])
    setNewName('')
  }

  const handleChangeInput = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input onChange={handleChangeInput} />
        </div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(person => (
          <Person key={person.name} name={person.name} />
        )
        )}
      </ul>
    </div>
  )
}

export default App