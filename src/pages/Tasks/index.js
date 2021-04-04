import React from "react";
import "./styles.css";
import TaskService from "../../services/task.service";

import { AddTask, Tasks } from "../../internal";
import { Card, Spinner } from "react-bootstrap";

export default class TasksView extends React.Component {
  state = {
    currentTask: "",
    userId: null,
    tasks: [],
    loading: false,
    adding: false,
  };

  componentDidMount() {
    document.title = "Tasks | Task Doer";
    this.fetchAllTasks();
  }

  fetchAllTasks() {
    const { username } = this.props.match.params;
    this.setState({ loading: true });

    TaskService.fetchByUsername(username).then((response) => {
      this.setState({
        userId: response.data.id,
        tasks: response.data.todos,
        loading: false,
      });
    });
  }

  addTask = (event) => {
    event.preventDefault();
    const currentTask = this.state.currentTask.trim();

    if (currentTask.length === 0) return;

    this.setState({ adding: true });

    TaskService.create({
      todo: currentTask,
      userId: this.state.userId,
    }).then((response) => {
      this.setState({
        currentTask: "",
        adding: false,
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
    if (updatedTask.trim().length === 0) return;

    TaskService.updateById(id, {
      todo: updatedTask.trim(),
    }).then((res) => {
      this.fetchAllTasks();
    });
  };

  render() {
    return (
      <div className="app-container my-4">
        <Card>
          <Card.Body className="bg-light">
            <AddTask
              onAddTask={this.addTask}
              onChange={this.handleInputChange}
              setCurrentTask={this.state.currentTask}
              loading={this.state.adding}
            />

            {this.state.loading ? (
              <div className="d-flex justify-content-center">
                <Spinner animation="border" variant="dark" />
              </div>
            ) : this.state.tasks.length > 0 ? (
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
          </Card.Body>
        </Card>

        {/* <hr /> */}
      </div>
    );
  }
}
