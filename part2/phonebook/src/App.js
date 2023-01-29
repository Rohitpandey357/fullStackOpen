import { useState } from 'react'
import Person from './components/Person'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  const handleAddPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already in the list`)
    } else {
      const person = { name: newName, number: newNumber}
      setPersons([...persons, person])
    }
    setNewName('')
    setNewNumber('')
  }

  const handleChangedNameInput = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  const handleChangedNumberInput = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  }

  const handleChangedSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  return (
    <div>
      <h2>Phonebook</h2>

      filter shown with <input type='text' value={search} onChange={handleChangedSearch} />

      <form>
        <div> name: <input type="text" value={newName} onChange={handleChangedNameInput} />
        <br />
        number: <input type="number" value={newNumber} onChange={handleChangedNumberInput} /></div>
        <div>
          <button type="submit" onClick={handleAddPerson}>add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      
      <ul>
        {persons.filter((a) => a.name.toLowerCase().startsWith(search.toLowerCase())).map(person => (
            <Person key={person.name} name={person.name} number={person.number} />
          )
        )}
      </ul>

    </div>
  )

}

export default App