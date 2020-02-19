import axios from "axios";

export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  
  BGA:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&pretty=true&client_id=SB1VGnDv7M`);
  }
};
