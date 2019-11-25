import { generateId } from "../utils.js";
import ListItems from "./ListItem.js"

export default class List {
  constructor({ listId = generateId, listName, listItems }) {
    this.listId = listId
    this.listName = listName
    this.listItems = listItems.map(listItems => new ListItems(listItems));
    // cannot read property 'map' of undefined
  }

  get ListTemplate() {
    return `
    <div class="col-3 align-items-center">
    <h3>${this.listName}</h3>
    <div>${this.getListItemsTemplate()}</div>
    <form onsubmit="app.ListController.addListItem(event, '${this.listId}')">
        <div class="form-group">
            <label for="listItems">List Item</label>
            <input type="text" name="listItems" class="form-control" placeholder="Listitem">
        </div>
        <div>
            <button type="submit" class="btn btn-primary">submit</button>
        </div>
    </form>
</div>
</div>
    `
  }
  getListItemsTemplate() {
    let Template = "";
    this.listItems.forEach(listItems => {
      Template += listItems.Template
      this.listItems = Template
    });
  }
}

// add this after getting add list to work ${this.getListItemsTemplate()} line 17
