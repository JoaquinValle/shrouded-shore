// Dependencies
import axios from "axios";

// Enviroment BGA client id
const BGA = process.env.REACT_APP_BGA;
// Limit of games queried
const limit = 20;

export default {
  // Search BGA API by game id
  getId:function(id){
    return axios.get(`https://www.boardgameatlas.com/api/search?ids=${id}&pretty=true&client_id=${BGA}`);
  },

  // Search BGA API by game name
  getName:function(gameName){
    return axios.get(`https://www.boardgameatlas.com/api/search?name=${gameName}&limit=${limit}&pretty=true&client_id=${BGA}`);
  },

  // Search BGA API by popularity
  getTop: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
  },

  // Search BGA API for random games
  getRandom: function() {
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
  },

  // Search BGA API by year published
  getNew: function() {
    const date = new Date();
    const year = date.getFullYear()+1;
    return axios.get(`https://www.boardgameatlas.com/api/search?order_by=year_published&lt_year_published=${year}&popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
  },
  
  getRecommendations: function(averagePlayTime) {
    return axios.get(`https://www.boardgameatlas.com/api/search?gt_max_playtime=${averagePlayTime}&pretty=true&order_by=reddit_week_count&limit=${limit}&client_id=${BGA}`)
  },

  // Search BGA API for all categories
  getCategories: function() {
    return axios.get(`https://www.boardgameatlas.com/api/game/categories?pretty=true&client_id=${BGA}`)
  },

  // Search BGA API for all categories
  getCategoryId: function(categoryId) {
    return axios.get(`https://www.boardgameatlas.com/api/search?categories=${categoryId}&order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
  },

  // Search BGA API by complexity, which is divided by game time
  getComplexity: function(complexity) {
    switch(complexity) {
      case "very-easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?lt_max_playtime=31&order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
      case "easy":
        return axios.get(`https://www.boardgameatlas.com/api/search?gt_max_playtime=30&lt_max_playtime=61&order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
      case "moderate":
        return axios.get(`https://www.boardgameatlas.com/api/search?gt_max_playtime=60&lt_max_playtime=91&order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
      case "hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?gt_max_playtime=90&lt_max_playtime=121&order_by=popularity&limit=${limit}&pretty=true&client_id=${BGA}`)
      case "very-hard":
        return axios.get(`https://www.boardgameatlas.com/api/search?gt_max_playtime=120&pretty=true&order_by=popularity&limit=${limit}&client_id=${BGA}`)
      default:
        const errorPromise = new Promise(function(resolve, reject) {
          throw new Error("Not a valid complexity..");
        });
        return errorPromise;
    }
  },

  // Get user by id from DB
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },

  logIn: function(user) {
    return axios.post(`/api/user/login`, user)
  },

  signup: function(user) {
    return axios.post(`/api/user/signup`,user)
  },

  getSaved: function(token) {
    return axios.get(`/api/user/${token}`)
  },

  saveGame: function(user, gameId) {
    return axios.post(`/api/user/games/${user}/${gameId}`)
    }
};
// saved games (tiempo promedio (complexity))
// regrese resultados


// 