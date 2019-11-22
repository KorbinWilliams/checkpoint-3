import ListService from "../Services/ListService.js";
import { generateId } from "../utils.js"
//TODO Don't forget to render to the screen after every data change.
function _drawLists() {

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
      listId: generateId()
    }
  }

  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
