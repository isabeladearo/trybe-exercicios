import React from "react";

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Acordar', 'Tomar banho', 'Tomar café da manhã', 'Trabalhar'];

class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map(((task) => Task(task))) }</ul>
    )
  }
}

export default App;
