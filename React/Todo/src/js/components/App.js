import {useState, useEffect} from 'react';
import H1 from './headers/H1';

function uid() {
  return `${Date.now}_${Math.random().toString(16).slice(2)}`;
}

export default function App() {
  const savedTasks = window.localStorage.getItem("tasks");
  const [tasks, setTasks] = useState(savedTasks ? JSON.parse(savedTasks) : []);
  const [text, setText] = useState('');

  function addNewTask(event) {
    event.preventDefault();

    // {id: 123, text: "task 1", status: 1}

    const newTasks = [
      ...tasks,
      {
        id: uid(),
        text: text,
        status: false,
      }
    ];

    setTasks(newTasks);
    setText("");
    console.log(tasks);
  }

  function changeStatus(taskId) {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) {
        task.status = !task.status;
      }

      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    if (confirm("delete this task?")) {
      const newTasks = tasks.filter(task => {
        return task.id != taskId;
      });
  
      setTasks(newTasks);
    }
    
  }

  useEffect(() => {
    window.localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  return (
    <>
    <H1 headerText="ToDo List" />
    <form action="" onSubmit={addNewTask}>
      <input type="text" value={text} onChange={e => setText(e.target.value)} />
      <button type="submit" className="button">Add</button>
    </form>
    {
      tasks.length > 0 ? <ul id="tasks">
      {
        tasks.map(task => {
          return (
          <li className="task" key={task.id}>
            <input type="checkbox" checked={task.status} value="1" onChange={() => {changeStatus(task.id)}} />
            <span className={task.status ? "lt-text" : null}>{task.text}</span>
            <button className="button" onClick={() => {deleteTask(task.id)}}>X</button>
          </li>
          )
        })
      }
    </ul> : ("No Tasks")
    }
    </>

  )
}