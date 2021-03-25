import useFocus from "../../hooks/useFocus";

const AddTaskForm = (props) => {
  const [inputRef, setInputFocus] = useFocus();

  const handleClick = (event) => {
    props.onAddTask(event);
    setInputFocus();
  };

  return (
    <form onSubmit={props.onAddTask} className="my-3">
      <div className="input-group">
        <input
          className="form-control"
          type="text"
          value={props.setCurrentTask}
          onChange={props.onChange}
          ref={inputRef}
          placeholder="Add new task"
          autoFocus
          aria-describedby="submit-button"
        />
        <button
          onClick={handleClick}
          className="btn btn-primary"
          id="submit-button"
          type="button"
        >
          {props.loading && (
            <span className="spinner-border spinner-border-sm"></span>
          )}
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
};

export default AddTaskForm;
