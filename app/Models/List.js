import { generateId } from "../utils.js";

export default class List {
  constructor(data) {
    //TODO Your constructor takes in a data object that should have the properties you need to create your list here is a freebie, it will set the id its provided, or if that is undefined it will create a new one (this is an alternative to object destructuring)
    this.id = data.id || generateId();
    this.listname = this.listname
    this.listItem = this.listItem.map(l => l = new this.listItem(l));
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
    let template = "";
    this.listItems = this.listItems.forEach(listItems => {
      template += listItems.Template
    });
  }
}
