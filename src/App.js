import './App.css';
import { useState } from 'react';
import { Task } from './Task';

function App() {
  const [tasksList, setTasksList] = useState([]);
  const [task, setTask] = useState("");

  const getTaskText = event => {
    setTask(event.target.value);
  }

  const addTask = () => {
    let taskObj = {
      id: tasksList.length === 0 ? 1 : tasksList[tasksList.length - 1].id + 1,
      taskName: task,
      completed: false
    }
    setTasksList([...tasksList, taskObj]);
  }

  const deleteTask = taskId => {
    setTasksList(tasksList.filter(ele => ele.id !== taskId));
  }

  const completingTask = taskId => {
    setTasksList(
      tasksList.map(taskObj => {
        return taskObj.id === taskId ? {...taskObj, completed: !taskObj.completed} : taskObj;
      })
    )
  }

  return (
    <div className="App">
      <div className="tasks-container">
        <div className="task-input">
          <input type="text"  placeholder='Type The Task Name' autoFocus onChange={ getTaskText } />
          <button onClick={ addTask } > Add Task </button>
        </div>
        <div className="tasks-list">
          {
            tasksList.map((task, key) => {
              return ( 
                  <Task
                    task={task}
                    key={key}
                    deleteTask={deleteTask} 
                    completingTask={completingTask}
                  />
                )
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
