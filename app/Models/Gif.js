export default class Gif {
  constructor(data) {
      this.title = data.title,
      this.url = data.url
      this.image = data.images.original.url 
      this.id = data.id
  }

  get Template() {
      return ` <div class="col-12">
      <h1>${this.title}</h1>
      <img src="${this.image}" alt="">
      <button onclick="app.gifController.setActive()" type="button" class="btn btn-primary">Set
    </button>
    <button onclick="app.gifController.save()" type="button" class="btn btn-primary">Save</button>

  </div>
      
      `
  }
}

// onclick="app.gifController.save()"