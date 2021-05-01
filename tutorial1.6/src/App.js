import React, { useState } from 'react'

const Header = ({name})=> {
  return(
  <h1>
    {name}  
  </h1>
  )
}

const Stat = ({name,num})=>{
  return (
    <p>
    {name} {num}
    </p>
  )
}

const Statistcs = ({data}) => {
  const {good,bad,neutral} = data

  const totalFeedback = good+neutral + bad
  const goodFeedback = 100 * (good/totalFeedback) + '%'
  const averageFeedback = ((good-bad) / totalFeedback)

  if(totalFeedback > 0){
    return (
    <div>
    <Header name ="statistics" />
    <table>
    <tbody>
    <Stat name='good' num={good} />
    <Stat name='neutral' num={neutral} />
    <Stat name='bad' num={bad} />
    <Stat name="all" num={totalFeedback}/>
    <Stat name="average" num= {averageFeedback} />
    <Stat name="postive" num={goodFeedback} />
    </tbody>
    </table>
    </div>
    )
  }
  return(
    <div>
    <p>
      No feedback given
    </p>
    </div>
  )

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () =>{
    setGood(good+1)
  }
  
  const handleNeutralClick = () =>{
    setNeutral(neutral+1)  
  }
  
  const handleBadClick = () =>{
    setBad(bad+1)
  }

  const results = {
    good : good, 
    neutral : neutral, 
    bad : bad
  }

  return (
    <div>
      <Header name="give feedback" />
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>
      <Statistcs data={results} />
    </div>
  )
}

export default App
