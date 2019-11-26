import { generateId } from "../utils.js"

export default class ListItems {
  constructor({ id = generateId(), listId, listItem }) {
    this.id = id
    this.listId = listId
    this.listItem = listItem
  }

  get Template() {
    return `
    <h5>${this.listItem}</h5>
    <button class="btn btn-primary" onclick="app.listController.removeListItem('${this.listId}','${this.id}')"></button>
    `
  }
}