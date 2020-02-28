import axios from "axios";
const BGA = process.env.REACT_APP_BGA;

export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  
  getName:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&limit=20&pretty=true&client_id=${BGA}`);
  },
  getTop: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${BGA}`)
  },

  getRandom: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${BGA}`)
  },

  //filter by new
  getNew: function() {
    let res = axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&pretty=true&client_id=${BGA}`)
    console.log(BGA);
    return res;
  },

  //filter by category
  getCategories: function(category) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories&pretty=true&client_id=${BGA}`)
  },
  //complexity
  getComplexity: function(complexity) {
    switch(complexity) {
      case "very-easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?lt_max_playtime=31&pretty=true&client_id=${BGA}`)
      case "easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=30&lt_max_playtime=61&pretty=true&client_id=${BGA}`)
      case "moderate":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=61&lt_max_playtime=91&pretty=true&client_id=${BGA}`)
      case "hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=91&lt_max_playtime=121&pretty=true&client_id=${BGA}`)
      case "very-hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?mt_max_playtime=121&pretty=true&client_id=${BGA}`)
    }
  },

  getId:function(id){
    return axios.get(`https://www.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=${BGA}`);


  }
};
