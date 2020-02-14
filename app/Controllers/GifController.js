import GifService from "../Services/GifService.js";
import store from "../store.js";

// Private
function _draw() {
  let gifs = store.State.gifs['Template']
  document.getElementById("gifs").innerHTML = gifs;
  // console.log(gifs);
}
function _drawMyGif(){
let myGifs= store.State.myGifs['Template']
myGifs.forEach(element => {
  
  document.getElementById("myGifs").innerHTML= myGifs
});
  
}
//Public
// !!!!ANCHOR  fix draw
export default class GifController {
  constructor() {
    store.subscribe("myGifs", _drawMyGif)
    store.subscribe("gifs", _draw);
  }
  addGif(){
    GifService.addGif();
  }

  save(){
    GifService.save();
  }
}
