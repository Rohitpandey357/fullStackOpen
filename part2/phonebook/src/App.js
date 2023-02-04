import { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/Personform'
import Notification from './components/Notification'
import PhoneBookService from './services/PhoneBookService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [message, setMessage] = useState('')
  const [notificationClass, setNotificationClass] = useState('')

  //handles the case when form is submitted
  const handleAddPerson = (event) => {
    event.preventDefault()
    if (persons.find(person => person.name === newName)) {
      if(window.confirm('Are you sure you want to replace this number?')) {
        const id = persons.find(person => person.name === newName).id
        const updatedPerson = { name: newName, number: newNumber, id: id }
        PhoneBookService
        .updatePerson(updatedPerson)
        .then(res => setPersons(
        persons.map(person => 
        person.id === id? updatedPerson : person)))
        .then(() => {
          setNotificationClass('notification')
          return setMessage('Updated the number Successfully')
        })
        .catch(err => {
          setNotificationClass('errorMessage')
          return setMessage("Something went wrong");
        });
      }
      
    } else if (newNumber === '' || newName === '') {
      alert('Enter a name and a number')
    } else {
      const person = { name: newName, number: newNumber}
      PhoneBookService
      .create(person)
      .then(newPerson => setPersons([...persons, newPerson]))
      .then(() => {  
        setNotificationClass('notification')
        return setMessage('Added the number Successfully')
      })
      .catch(err => {
        setNotificationClass('errorMessage')
        return setMessage("Something went wrong");
      });
    }
    setNewName('')
    setNewNumber('')
    setTimeout(() => setMessage(null), 5000);
  }


  //handles the case where user is typing a name in input
  const handleChangedNameInput = (event) => {
    setNewName(event.target.value);
  }


  //handles the case where user is typing a number in input
  const handleChangedNumberInput = (event) => {
    setNewNumber(event.target.value);
  }


  //handles the case where user is searching for a person
  const handleChangedSearch = (event) => {
    setSearch(event.target.value);
    console.log(event.target.value);
  }


  // deletes a record
  const handleDelete = (event) => {
    if(window.confirm("Do you really want to delete this person?")) {
        PhoneBookService
        .deletePerson(persons
          .find(person => person.name === event.target.value).id)
          .then(() => setPersons(
            persons.filter(person => person.name!== event.target.value)
            )).then(() => {
              setNotificationClass('notification')
              return setMessage('Deleted the person Successfully')
            }).catch(err => {
              setNotificationClass('errorMessage')
              return setMessage("Something went wrong");
            })
        setTimeout(() => setMessage(null), 5000);
     }
  }
  

  //fetching data from the database 
  useEffect(() => {
    console.log('Inside useEffect');
    PhoneBookService
    .getAll()
    .then(initialPersons => setPersons(initialPersons))
  }, [])
  

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} className={notificationClass} />
      <Filter search={search} handleChangedSearch={handleChangedSearch} />

      <PersonForm handleAddPerson={handleAddPerson} newName={newName} newNumber={newNumber} handleChangedNameInput={handleChangedNameInput} handleChangedNumberInput={handleChangedNumberInput} />

      <h2>Numbers</h2>
      
      <ul>
        {persons.filter((a) => 
                a.name.toLowerCase()
                .startsWith(search.toLowerCase()))
                .map(person => (
                  <Person key={person.name} name={person.name} number={person.number} handleDelete={handleDelete} />
                ))
        }
      </ul>
      
      <footer>Phonebook App, Created by Rohit Pandey with love ♥</footer>
    </div>
  )

}

export default App