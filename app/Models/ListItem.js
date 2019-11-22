import { generateId } from "../utils"

export default class ListItems {
  constructor({ id = generateId(), listItem }) {
    this.id = id
    this.listItem = listItem
  }

  getTemplate() {
    return `
    <h5>${this.listItem}</h5>
    `
  }
}