import { generateId } from "../utils.js";
import ListItems from "./ListItem.js"

export default class List {
  constructor({ id, listName, listitem }) {
    this.id = id
    this.listName = listName
    this.listitem = listitem.map(l => l = new ListItems(l));
  }

  getListTemplate() {
    return `
    <div class="col-3">
    <h3>${this.listName}</h3>
    <div pt-3>${this.getListItemsTemplate()}</div>
    <form onsubmit="app.ListController.addListItem(event, '${this.id}')">
        <div class="form-group">
            <label for="Listitem">List Item</label>
            <input type="text" name="Listitem" id="" class="form-control" placeholder="Listitem">
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
    // this.listItems = this.listItems.forEach(listItems => {
    //   Template += listItems.Template
    this.listitem = Template
    // });
  }
}


// add this after getting add list to work ${this.getListItemsTemplate()} line 17
