import axios from "axios";
//localhost:5000/todos

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.api = axios.create({ baseURL: baseUrl });
  }
  async getAllTasks() {
    return this.api.get(`/todos`);
  }

}

export default APIHandler 