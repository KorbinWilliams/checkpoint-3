import List from "../Models/List.js";
import _store from "../store.js"
import ListItems from "../Models/ListItem.js";
import store from "../store.js";

//Public
class ListService {
  removeList(listId) {
    let listRemoved = _store.State.lists.find(l => l.listId == listId);
    _store.State.lists.filter(lists => lists.listId !== listRemoved.listId)
  }

  addList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
  }

  addListItems(newListItem, listId) {
    let listItem = new ListItems(newListItem)
    let list = _store.State.lists.find(list => list.listId == listId)
    list.listItems.push(listItem)
    _store.saveState()
  }


  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
