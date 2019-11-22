import { generateId } from "../utils.js"

export default class ListItems {
  constructor({ id = generateId(), listId, listItem }) {
    this.id = id
    this.listId = listId
    this.listItem = listItem
  }

  getTemplate() {
    return `
    <h5>${this.listItem}</h5>
    `
  }
}