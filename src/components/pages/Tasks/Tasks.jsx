import Task from "./Task";

const Tasks = (props) => {
  return (
    <ul className="list-group list-group-flush">
      {props.tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onDeleteTask={props.onDeleteTask}
          onCompleteTask={props.onCompleteTask}
          onMarkAsImportant={props.onMarkAsImportant}
          onEditTask={props.onEditTask}
        />
      ))}
    </ul>
  );
};

export default Tasks;
