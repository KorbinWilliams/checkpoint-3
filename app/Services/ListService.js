import List from "../Models/List.js";
import _store from "../store.js"
import ListItems from "../Models/ListItem.js";
import { generateId } from "../utils.js";

//Public
class ListService {

  addList(newList) {
    let list = new List(newList)
    _store.State.lists.push(list)
  }

  addListItems(newListItem) {
    let listItem = new listItem(newListItem)
    _store.State.lists.find(List => List.listId == listItem.listId)
  }


  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
