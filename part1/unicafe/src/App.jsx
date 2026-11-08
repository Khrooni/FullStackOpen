import { useState } from 'react'

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}{props.unit}</td>
    </tr>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props

  const all = good + neutral + bad

  if (all === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    ) 
    
  }

  const average = (good - bad) / all
  const positive = (good / all) * 100

  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average} />
          <StatisticLine text="positive" value={positive} unit=" %"/>
        </tbody>
      </table>
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
