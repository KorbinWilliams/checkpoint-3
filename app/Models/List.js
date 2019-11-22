import { generateId } from "../utils.js";
import ListItems from "./ListItem.js"

export default class List {
  constructor({ id, listname, listitem }) {
    this.id = id
    this.listname = listname
    this.listitem = listitem.map(l => l = new ListItems(l));
  }
  //Be sure to add the methods needed to create the view template for this model
  //For starting out, your tasks may be strings alone, but later you may wish to turn them into full objects, that will be up to you

  getListTemplate() {
    return `
    <div class="col-3">
    <h3>${this.listname}</h3>
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
    this.listItems = this.listItems.forEach(listItems => {
      Template += listItems.Template
    });
  }
}
