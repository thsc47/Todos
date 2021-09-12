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

  async postATask(task) {
    return this.api.post(`/todos`, task);
  }

  async deleteATask(id) {
    return this.api.delete(`/todos/${id}`);
  }

  async updateATask(id,task) {
    return this.api.put(`/todos/${id}`,task);
  }

}

export default APIHandler 