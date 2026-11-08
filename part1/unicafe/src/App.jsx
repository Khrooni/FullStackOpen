import { useState } from 'react'

const Statistics = (props) => {
  return (
    <div>
      <h1>statistics</h1>
      <div>good: {props.good}</div>
      <div>neutral: {props.neutral}</div>
      <div>bad: {props.bad}</div>
    </div>
  )
}

const Button = (props) => (
  <button onClick={props.onClick}>
    {props.text}
  </button>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleFeedback = (setFeedback, newValue) => {
    setFeedback(newValue)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => handleFeedback(setGood, good + 1)} text="good" />
      <Button onClick={() => handleFeedback(setNeutral, neutral + 1)} text="neutral" />
      <Button onClick={() => handleFeedback(setBad, bad + 1)} text="bad" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
