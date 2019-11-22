import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
import _store from "../store.js"
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {
  let listTemplate = '';
  let lists = _store.State.lists;
  lists.forEach(lists => {
    listTemplate += lists.getListTemplate();
  });
  document.querySelector("#Lists").innerHTML = listTemplate;
}

//Public
export default class ListController {
  constructor() {
    _drawLists();
  }
  addList(event) {
    debugger;
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.listName.value,
      id: generateId()
    }
    ListService.addList(newList)
    _drawLists()
  }

  addListItems(event) {

  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
