export const Task = (props) => {
    return (
        <div className="task-container" key={props.key} id={props.task.id} style={ { backgroundColor: props.task.completed ? "rgba(144, 238, 144, 0.807)" : "#EEEE" } } >
          <div className="task">
            <p> {props.task.taskName} </p>
          </div>

          <div className="task-operations">
            <div className="delete-task">
              <button onClick={ () => props.deleteTask(props.task.id) } > Delete Task </button>
            </div>
            <div className="task-completed">
              <button onClick={ () => props.completingTask(props.task.id)} > { props.task.completed ? "Incomplete" : "Complete" } </button>
            </div>
          </div>
        </div>
      )
}