import { type } from '@testing-library/user-event/dist/type';
import { useState } from 'react'

const Button = (props) => {
  const {text, onClick} = props;
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const DisplayFeedback = (props) => <p>{props.text} {props.value}</p>

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const totalFeedback = good + neutral + bad;
  return (
    <div>
      <h1>Statistics</h1>
      <DisplayFeedback text="Good" value={good} />
      <DisplayFeedback text="Neutral" value={neutral} />
      <DisplayFeedback text="Bad" value={bad} />
      <DisplayFeedback text="All" value={totalFeedback} />
      <DisplayFeedback text="Average" value={totalFeedback > 0? (good - bad)/totalFeedback : 0} />
      <DisplayFeedback text="Positive" value={totalFeedback > 0? (good/totalFeedback)*100 + '%' : 0 + '%'} />
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // console.log(good, neutral, bad)
  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="Good" onClick={() => setGood(good + 1)} />
      <Button text="Neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="Bad" onClick={() => setBad(bad + 1)} />
      <Statistics good={good} bad ={bad} neutral={neutral} />
    </div>
  )
}

export default App