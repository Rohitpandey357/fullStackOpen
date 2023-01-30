const Person = (props) => {
    return (
      <li>
        {props.name} {props.number}
        <button value={props.name} onClick={props.handleDelete}>Delete</button>
      </li>
    )
  }

  export default Person;