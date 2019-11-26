import List from "../Models/List.js";
import _store from "../store.js"
import ListItems from "../Models/ListItem.js";

//Public
class ListService {


  addList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
    _store.saveState();
  }

  addListItems(newListItem, listId) {
    let listItem = new ListItems(newListItem)
    let list = _store.State.lists.find(list => list.id == listId)
    list.listItems.push(listItem)
    _store.saveState()
  }

  removeList(listId) {
    debugger;
    let listRemoved = _store.State.lists.findIndex(l => l.id == listId);
    _store.State.lists.splice(listRemoved, 1)
    _store.saveState();
  }

  removeListItem(listId, listItemId) {
    let listItemLocation = _store.State.lists.find(l => l.id == listId);
    listItemLocation.listItems = listItemLocation.listItems.filter(l => l.id !== listItemId);
    _store.saveState();
  }
  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
