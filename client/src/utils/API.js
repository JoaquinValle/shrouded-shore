import axios from "axios";
const BGA = process.env.REACT_APP_BGA;


let id = "mslELa9SkR"
export default {
  // Get user by id
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  
<<<<<<< HEAD
  BGA:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&limit=20&pretty=true&client_id=${id}`);
  },
  getTop: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${id}`)
  },

  getRandom: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${id}`)
=======
  getName:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&limit=20&pretty=true&client_id=${BGA}`);
  },
  getTop: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${BGA}`)
  },

  getRandom: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=20&pretty=true&client_id=${BGA}`)
>>>>>>> f862a2a87e27ce636922b4cd7eadfdde49434c35
  },

  //filter by new
  getNew: function() {
<<<<<<< HEAD
    let res = axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&pretty=true&client_id=${id}`)
    return res
  },

  //filter by category
  getCategory: function(category) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories&pretty=true&client_id=${id}`)
=======
    let res = axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&pretty=true&client_id=${BGA}`)
    console.log(BGA);
    return res;
  },

  //filter by category
  getCategories: function(category) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories&pretty=true&client_id=${BGA}`)
>>>>>>> f862a2a87e27ce636922b4cd7eadfdde49434c35
  },
  //complexity
  getComplexity: function(complexity) {
    switch(complexity) {
      case "very-easy":
<<<<<<< HEAD
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
=======
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


>>>>>>> f862a2a87e27ce636922b4cd7eadfdde49434c35
  }
};
