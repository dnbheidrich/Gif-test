import store from "../store.js";

let _myApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/Dieter/gifs",
  timeout: 3000
});

let _gifApi = axios.create({
  baseURL: "//api.giphy.com/v1/gifs/random?api_key=k7cGK56RlYrKpisWpAS4wyMVk5AcDyEi",
  timout: 3000
})

class GifService {



}

const service = new GifService();
export default service;