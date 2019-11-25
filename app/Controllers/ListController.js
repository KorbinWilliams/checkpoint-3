import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
import _store from "../store.js"


function _drawLists() {
  let listTemplate = '';
  debugger;
  let lists = _store.State.lists;
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
    debugger;
    event.preventDefault();
    let formData = event.target;
    let newList = {
      listName: formData.ListName.value,
      listId: generateId()
    }
    ListService.addList(newList)
    _drawLists()
  }

  addListItems(event, listId) {
    event.preventDefault()
    let formData = event.target;
    let newListItem = {
      listItem: formData.ListItem.value,
      listId: listId
      // add listId/ change Id on lists to listId 
    }
    ListService.addListItems(newListItem)
    formData.reset()
    _drawLists()
  }

  //TODO: (make lists is good, next make items, remove items, remove lists)
}
