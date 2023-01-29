import { useState, useEffect } from 'react'
import axios from 'axios'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/Personform'

const App = () => {
  const [persons, setPersons] = useState([])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')

  //handles the case where form is submitted
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

  //handles the case where user is typing a name in input
  const handleChangedNameInput = (event) => {
    setNewName(event.target.value);
    console.log(event.target.value);
  }

  //handles the case where user is typing a number in input
  const handleChangedNumberInput = (event) => {
    setNewNumber(event.target.value);
    console.log(event.target.value);
  }

  //handles the case where user is searching for a person
  const handleChangedSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }
  
  //fetching data from the database 
  useEffect(() => {
    console.log('Inside useEffect');
    axios
    .get('http://localhost:3001/persons')
    .then(res => setPersons(res.data))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      
      <Filter search={search} handleChangedSearch={handleChangedSearch} />

      <PersonForm handleAddPerson={handleAddPerson} newName={newName} newNumber={newNumber} handleChangedNameInput={handleChangedNameInput} handleChangedNumberInput={handleChangedNumberInput} />

      <h2>Numbers</h2>
      
      <ul>
        {persons.filter((a) => 
                a.name.toLowerCase()
                .startsWith(search.toLowerCase()))
                .map(person => (
                  <Person key={person.name} name={person.name} number={person.number} />
                ))
        }
      </ul>

    </div>
  )

}

export default App