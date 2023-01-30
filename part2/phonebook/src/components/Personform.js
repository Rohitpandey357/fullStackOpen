const PersonForm = (props) => {

    const newName = props.newName;
    const newNumber = props.newNumber;
    const handleAddPerson = props.handleAddPerson;
    const handleChangedNameInput = props.handleChangedNameInput;
    const handleChangedNumberInput = props.handleChangedNumberInput;

    return (
        <form>
            <div> name: <input type="text" value={newName} onChange={handleChangedNameInput} />
            <br />
            number: <input type="number" value={newNumber} onChange={handleChangedNumberInput} required />
            <br />
            <button type="submit" onClick={handleAddPerson}>add</button>
            </div>
        </form>
    )
}

export default PersonForm