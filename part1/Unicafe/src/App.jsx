import { useState } from 'react'

const Button = (props) => {
    return (
        <>
            <button onClick={props.onClick}>{props.text}</button>
        </>
    )
}

const StatisticLine = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const texts = ["good", "neutral", "bad", "average", "positive"]
    let avg = (good + (bad * -1)) / (good + neutral + bad)
    let pos = ((good / (good + neutral + bad)) * 100) + " %"
    if (good + neutral + bad == 0) {
        avg = 0
        pos = 0
    }

    return (
        <div>
            <h1>give feedback</h1>
            <Button text="good" onClick={() => setGood(good + 1)} />
            <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
            <Button text="bad" onClick={() => setBad(bad + 1)} />
            <h1>statistics</h1>
            <table>
                <tbody>
                    <StatisticLine text={texts[0]} value={good} />
                    <StatisticLine text={texts[1]} value={neutral} />
                    <StatisticLine text={texts[2]} value={bad} />
                    <StatisticLine text={texts[3]} value={avg} />
                    <StatisticLine text={texts[4]} value={pos} />
                </tbody>
            </table>
        </div>
    )
}

export default App