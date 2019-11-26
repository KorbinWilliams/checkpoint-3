import { generateId } from "../utils.js";
import ListItems from "./ListItem.js"

export default class List {
  constructor({ id = generateId(), listName, listItems = [] }) {
    this.id = id
    this.listName = listName
    this.listItems = listItems.map(listItems => new ListItems(listItems));
    // cannot read property 'map' of undefined
  }

  get ListTemplate() {
    return `
    <div class="col-3 align-items-center">
    <button onclick="app.listController.removeList('${this.id}')">Remove this list</button>
    <h3>${this.listName}</h3>
    <div>${this.getItemsTemplate()}</div>
    <form onsubmit="app.listController.addListItems(event, '${this.id}')">
            <label for="listItems">List Item</label>
            <input type="text" name="listItem" class="form-control" placeholder="Listitem">
            <button type="submit">Submit</button>        
    </form>
</div>
</div>
    `
  }
  getItemsTemplate() {
    let template = "";
    this.listItems.forEach(listItem => {
      template += listItem.Template
    });
    return template;
  }
}

// add this after getting add list to work ${this.getItemsTemplate()} line 17
