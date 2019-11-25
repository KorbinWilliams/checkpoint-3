import List from "../Models/List.js";
import _store from "../store.js"
import ListItems from "../Models/ListItem.js";

//Public
class ListService {

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
