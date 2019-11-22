import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
import _store from "../store"
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listsTemplate = '';
  let lists = _store.State.lists;
  lists.forEach(lists => {
    listsTemplate += lists.getListTemplate();
  });
  document.querySelector("#Lists")
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }

  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listname: formData.listname.value,
      id: generateId()
    }
    ListService.addList(newList)
  }

  addListItems(event) {

  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
