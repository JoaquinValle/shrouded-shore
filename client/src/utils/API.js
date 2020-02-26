import axios from "axios";


let id = "mslELa9SkR"
export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  
  BGA:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&limit=20&pretty=true&client_id=${id}`);
  },
  getTop: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${id}`)
  },

  getRandom: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${id}`)
  },

  //filter by new
  getNew: function() {
    let res = axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&pretty=true&client_id=${id}`)
    return res
  },

  //filter by category
  getCategory: function(category) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories&pretty=true&client_id=${id}`)
  },
  //complexity
  getComplexity: function(complexity) {
    switch(complexity) {
      case "very-easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?lt_max_playtime=31&pretty=true&client_id=${id}`)
      case "easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=30&lt_max_playtime=61&pretty=true&client_id=${id}`)
      case "moderate":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=61&lt_max_playtime=91&pretty=true&client_id=${id}`)
      case "hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=91&lt_max_playtime=121&pretty=true&client_id=${id}`)
      case "very-hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=121&pretty=true&client_id=${id}`)
    }
  },
  gameId:function(id){
    return axios.get(`https://www.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=${id}`);
  }
};
