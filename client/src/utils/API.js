import axios from "axios";

export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  
  BGA:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&pretty=true&client_id=SB1VGnDv7M`);
  },
  getTOP: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&pretty=true&client_id=SB1VGnDv7M`)
  },

  //filter by new
  getNew: function() {
    let res = axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&pretty=true&client_id=SB1VGnDv7M`)
    return res
  },

  //filter by category
  getCategory: function(category) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories=${category}&pretty=true&client_id=SB1VGnDv7M`)
  },

  //complexity
  getComplexity: function(complexity) {
    switch(complexity) {
      case "very easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?lt_max_playtime=31&pretty=true&client_id=SB1VGnDv7M`)
      case "easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=30&lt_max_playtime=61&pretty=true&client_id=SB1VGnDv7M`)
      case "moderate":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=61&lt_max_playtime=91&pretty=true&client_id=SB1VGnDv7M`)
      case "hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=91&lt_max_playtime=121&pretty=true&client_id=SB1VGnDv7M`)
      case "very hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=121&pretty=true&client_id=SB1VGnDv7M`)
    }
  }
};
