import React from "react";
import "./styles.css";
import TaskService from "../../services/task.service";

import { AddTask, Tasks } from "../../internal";

export default class TasksView extends React.Component {
  state = {
    currentTask: "",
    userId: null,
    tasks: [],
    loading: false,
  };

  componentDidMount() {
    document.title = "Tasks | Task Doer";
    this.fetchAllTasks();
  }

  fetchAllTasks() {
    const { username } = this.props.match.params;
    TaskService.fetchByUsername(username).then((response) => {
      this.setState({
        userId: response.data.id,
        tasks: response.data.todos,
      });
    });
  }

  addTask = (event) => {
    event.preventDefault();

    if (this.state.currentTask === "") return;
    this.setState({ loading: true });

    TaskService.create({
      todo: this.state.currentTask,
      userId: this.state.userId,
    }).then((response) => {
      this.setState({
        currentTask: "",
        loading: false,
      });
      this.fetchAllTasks();
    });
  };

  deleteTask = (id) => {
    TaskService.deleteById(id).then((response) => {
      this.fetchAllTasks();
    });
  };

  completeTask = (task) => {
    TaskService.updateById(task.id, {
      completed: !task.completed,
    }).then((res) => {
      this.fetchAllTasks();
    });
  };

  markAsImportant = (task) => {
    TaskService.updateById(task.id, {
      isImportant: !task.isImportant,
    }).then((res) => {
      this.fetchAllTasks();
    });
  };

  handleInputChange = (event) => {
    this.setState({ currentTask: event.target.value });
  };

  editTask = (id, updatedTask) => {
    TaskService.updateById(id, {
      todo: updatedTask,
    }).then((res) => {
      this.fetchAllTasks();
    });
  };

  render() {
    return (
      <div className="app-container">
        <AddTask
          onAddTask={this.addTask}
          onChange={this.handleInputChange}
          setCurrentTask={this.state.currentTask}
          loading={this.state.loading}
        />

        <hr />

        {this.state.tasks.length > 0 ? (
          <Tasks
            tasks={this.state.tasks}
            onDeleteTask={this.deleteTask}
            onChange={this.handleInputChange}
            onCompleteTask={this.completeTask}
            onMarkAsImportant={this.markAsImportant}
            onEditTask={this.editTask}
          />
        ) : (
          <p className="text-muted text-center">No Tasks</p>
        )}
      </div>
    );
  }
}
