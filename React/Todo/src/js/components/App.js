import {useState} from 'react';
import H1 from './headers/H1';

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  function addNewTask(event) {
    event.preventDefault();

    // {id: 123, text: "task 1", status: 1}

    const newTasks = [
      ...tasks,
      {
        id: uid(),
        text: text,
        status: 0,
      }
    ];

    setTasks(newTasks);
    console.log(tasks);
  }

  return (
    <>
    <H1 headerText="ToDo List" />
    <form action="" onSubmit={addNewTask}>
      <input type="text" onChange={e => setText(e.target.value)} />
      <button type="submit" className="button">Add</button>
    </form>
    <ul id="tasks">
      {
        tasks.map(task => {
          return (
          <li className="task">
            <input type="checkbox" defaultChecked value="1" />
            <span className="lt-text">Task 1</span>
            <button className="button">X</button>
          </li>
          )
        })
      }
    </ul>
    </>
  )
}