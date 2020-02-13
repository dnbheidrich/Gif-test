export default class Gif {
  constructor(data) {
      this.title = data.title,
      this.url = data.url
      this.image = data.image.original.url
      this.id = data.id
  }

  get Template() {
      return this.title
  }
}