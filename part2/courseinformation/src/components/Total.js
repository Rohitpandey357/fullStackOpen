const Total = (props) => {
    // console.log(props);
    const exercises = props.exercises;

    return (
      <p>Total number of exercises {exercises.reduce((a, b) => a + b, 0)} </p>
    )
}

export default Total;