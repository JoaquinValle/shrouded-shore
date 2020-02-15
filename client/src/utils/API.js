import axios from "axios";

export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  }
};
