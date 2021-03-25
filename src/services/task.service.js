import authHeader from "./auth-header";
import api from "./http-common";

class TaskService {
  fetchByUsername(username) {
    return api.get(`/users/${username}`, { headers: authHeader() });
  }

  create(data) {
    return api.post("/todos", data, { headers: authHeader() });
  }

  deleteById(id) {
    return api.delete(`/todos/${id}`, { headers: authHeader() });
  }

  updateById(id, data) {
    return api.put(`/todos/${id}`, data, { headers: authHeader() });
  }
}

export default new TaskService();
