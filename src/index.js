import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistic = (props) => {
  return (
    <p>{props.text}{props.result}</p>
  )
}

const Button = (props) => {
  return (
    <button onClick={() => props.valueset(props.value + 1)}>{props.text}</button>
  )
}

const Statistics = (props) => {
  if(props.total===0) {
    return(<div><h1>statistics</h1></div>)
  }
  return (
    <div>
      <h1>statistics</h1>
      <Statistic result={props.good} text={"good "}/>
      <Statistic result={props.neutral} text={"neutral "}/>
      <Statistic result={props.bad} text={"bad "}/>
      <Statistic result={props.total} text={"total "}/>
      <Statistic result={(props.good - props.bad) / (props.total)} text={"average "}/>
      <Statistic result={(100 * props.good) / (props.total)} text={"percentage "}/>
    </div>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button value={good} valueset={setGood} text={"good"}/><Button value={neutral} valueset={setNeutral} text={"neutral"}/><Button value={bad} valueset={setBad} text={"bad"}/>
      <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad}/>
    </div>
  )
}

/*


<h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {(props.good - props.bad) / (props.total)}</p>
      <p>percentage {(100 * props.good) / (props.total)}%</p>



import React from 'react'
import ReactDOM from 'react-dom'


const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.parts[0].name} exercises={props.parts[0].exercises}/>
      <Part part={props.parts[1].name} exercises={props.parts[1].exercises}/>
      <Part part={props.parts[2].name} exercises={props.parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}
*/

ReactDOM.render(<App />, document.getElementById('root'))