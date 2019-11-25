import { generateId } from "../utils.js"

export default class ListItems {
  constructor({ listId, listItem }) {
    this.listId = listId
    this.listItem = listItem
  }

  get Template() {
    return `
    <h5>${this.listItem}</h5>
    `
  }
}