import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
import _store from "../store.js"


function _drawLists() {
  let listTemplate = '';
  let lists = _store.Lists;
  lists.forEach(lists => {
    listTemplate += lists.ListTemplate;
  });
  document.querySelector("#Lists").innerHTML = listTemplate;
  // probably more to this savestate than I know, makes it a string maybe map to object?
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
      listName: formData.ListName.value,
      listId: generateId()
    }
    ListService.addList(newList)
    formData.reset()
    _drawLists()
  }

  addListItems(event, listId) {
    event.preventDefault();
    let formData = event.target;
    let newListItem = {
      listItem: formData.listItem.value,
      listId: listId
    }
    ListService.addListItems(newListItem, listId)
    formData.reset()
    _drawLists()
  }

  removeList(listId) {
    ListService.removeList(listId);
    _drawLists()
  }

  //TODO: (make lists is good, next make items, remove items, remove lists)
}
