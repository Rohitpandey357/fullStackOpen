import { useState } from 'react'

const Button = (props) => {
  const {text, onClick} = props;
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const StatisticLine = (props) => <p>{props.text} {props.value}</p>

const Statistics = (props) => {
  const {good, neutral, bad} = props;
  const totalFeedback = good + neutral + bad;

  if(totalFeedback > 0) {
    return (
      <div>
        <h1>Statistics</h1>
        <StatisticLine text="Good" value={good} />
        <StatisticLine text="Neutral" value={neutral} />
        <StatisticLine text="Bad" value={bad} />
        <StatisticLine text="All" value={totalFeedback} />
        <StatisticLine text="Average" value={totalFeedback > 0? (good - bad)/totalFeedback : 0} />
        <StatisticLine text="Positive" value={totalFeedback > 0? (good/totalFeedback)*100 + '%' : 0 + '%'} />
      </div>
    )
  } else {
    return (
    <div>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </div>
    )
  }
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