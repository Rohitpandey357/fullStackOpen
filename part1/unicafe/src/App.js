import { useState } from 'react'

const Button = (props) => {
  const {text, onClick} = props;
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const DisplayFeedback = (props) => <p>{props.text} {props.value}</p>


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  console.log(good, neutral, bad)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <DisplayFeedback text="Good" value={good} />
      <DisplayFeedback text="Neutral" value={neutral} />
      <DisplayFeedback text="Bad" value={bad} />
    </div>
  )
}

export default App