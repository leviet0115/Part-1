import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = ({header}) => <div><h1>{header}</h1></div>;

const Button = ({event,name}) => <button onClick={event}> {name}</button>;

const Statistics = ({text,number}) => {
  return (
    <tr>
      <td> {text} </td>
      <td> {number} </td> 
    </tr>
  );
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const goodClick = () => setGood(good+1);

  const badClick = () => setBad(bad+1);

  const neutralClick = () => setNeutral(neutral+1);

  const total = good + neutral + bad;

  const average = total/3;

  const positive = good/total + "%";

  if (total == 0){
    return (
      <div>
        <div>
        <Header header="give feedback"/>
        <Button name="good" event={goodClick}/>
        <Button name="neutral" event={neutralClick}/>
        <Button name="bad" event={badClick}/>
        </div>
        
        <div>
          <Header header="statistics"/>
          <p>No feedback given</p>
        </div>
      </div>
    )
  }
  else { 
    return (
      <div>
        <div>
          <Header header="give feedback"/>
          <Button name="good" event={goodClick}/>
          <Button name="neutral" event={neutralClick}/>
          <Button name="bad" event={badClick}/>
        </div>
        <div>
          <Header header="statistics"/>
          <table>
            <tbody>
              <Statistics text="good" number={good}/>
              <Statistics text="bad" number={bad}/>
              <Statistics text="neutral" number={neutral}/>
              <Statistics text="all" number={total}/>
              <Statistics text="average" number={average}/>
              <Statistics text="positive" number={positive}/>
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'))