export default class ListItems {
  constructor(data) {
    this.listItems = listItems
  }

  getTemplate() {
    return `
    <h5>${this.listItems}</h5>
    `
  }
}