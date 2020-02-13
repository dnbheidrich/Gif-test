import GifService from "../Services/GifService.js";
import store from "../store.js";

// Private
function _draw() {
  let values = store.State.values;
  console.log(values);
}

//Public
// !!!!ANCHOR  fix draw
export default class GifController {
  constructor() {
    store.subscribe("values", _draw);
  }
}
