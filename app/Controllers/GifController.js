import GifService from "../Services/GifService.js";
import store from "../store.js";

// Private
function _draw() {
  let gifs = store.State.gifs['Template']
  document.getElementById("gifs").innerHTML = gifs;
  // console.log(gifs);
}

//Public
// !!!!ANCHOR  fix draw
export default class GifController {
  constructor() {
    store.subscribe("gifs", _draw);
  }
  addGif(){
    GifService.addGif();
  }

  save(){
    GifService.addGif();
  }
}
