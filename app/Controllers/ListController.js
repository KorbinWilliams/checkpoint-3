import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
import _store from "../store.js"

function _drawLists() {
  let listTemplate = '';
  let lists = _store.State.lists;
  lists.forEach(lists => {
    listTemplate += lists.getListTemplate();
  });
  document.querySelector("#Lists").innerHTML = listTemplate;
  // probably more to this savestate than I know, makes it a string maybe map to object?
  _store.saveState()
}

//Public
export default class ListController {
  constructor() {
    _store.loadState();
    _drawLists();
  }
  addList(event) {
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.ListName.value,
      id: generateId()
    }
    ListService.addList(newList)
    _drawLists()
  }

  addListItems(event) {
    event.preventDefault()
    let formData = event.target;
    let newItem = {
      listItem: formData.ListItem.value,
      listId: 
    }
  }

  //TODO: (make lists is good, next make items, remove items, remove lists)
}
