import loadable from "@loadable/component";
const Task = loadable(() => import("./Task"));

const Tasks = (props) => {
  return (
    <ul className="list-group">
      {props.tasks.map((task) => (
        <Task key={task.id} task={task} {...props} />
      ))}
    </ul>
  );
};

export default Tasks;
