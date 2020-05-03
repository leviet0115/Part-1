import React from 'react';
import ReactDOM from 'react-dom';

const Header = ({course}) => <h1>{course}</h1>;

const Part = ({name,exercise}) => <p>{name} {exercise}</p>;

const Content = ({part}) => 
  <div>
    <Part name={part[0].name} exercise={part[0].exercises}/>
    <Part name={part[1].name} exercise={part[1].exercises}/>
    <Part name={part[2].name} exercise={part[2].exercises}/>
  </div>;

const Total = ({part}) => <p> Number of exercise {part[0].exercises + part[1].exercises+ part[2].exercises} </p>;


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
  };

  return (
    <div>
      <Header course={course.names}/>
      <Content part={course.parts}/>
      <Total part={course.parts}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));