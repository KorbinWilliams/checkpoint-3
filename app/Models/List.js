import { generateId } from "../utils.js";
import ListItems from "./ListItem.js"

export default class List {
  constructor({ listId, listName, listItem }) {
    this.listId = listId
    this.listName = listName
    this.listItem = listItem.map(l => new ListItems(l));
  }

  getListTemplate() {
    return `
    <div class="col-3 align-items-center">
    <h3>${this.listName}</h3>
    <div>${this.getListItemsTemplate()}</div>
    <form onsubmit="app.ListController.addListItem(event, '${this.listId}')">
        <div class="form-group">
            <label for="listItem">List Item</label>
            <input type="text" name="listItem" class="form-control" placeholder="Listitem">
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
    this.listItem.forEach(listItem => {
      Template += listItem.Template
      this.listItem = Template
    });
  }
}


// add this after getting add list to work ${this.getListItemsTemplate()} line 17
