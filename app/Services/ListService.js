import List from "../Models/List.js";
import _store from "../store.js"

//Public
class ListService {

  addList(newList) {
    // create separate place for listItems in state make add listItem function in cont & serv, fix up model.
    let list = new List(newList)
    _store.State.lists.push(list)
  }

  //NOTE You will need this code to persist your data into local storage, be sure to call the store method to save after each change
}

const SERVICE = new ListService();
export default SERVICE;
