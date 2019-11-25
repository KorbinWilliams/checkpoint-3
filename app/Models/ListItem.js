import { generateId } from "../utils.js"

export default class ListItems {
  constructor({ id = generateId(), listItem }) {
    this.id = id
    this.listItem = listItem
  }

  get Template() {
    return `
    <h5>${this.listItem}</h5>
    `
  }
}