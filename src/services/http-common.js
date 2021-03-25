import axios from "axios";

export default axios.create({
  baseURL: "https://task-doer.herokuapp.com/api",
});
