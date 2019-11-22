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
      listname: formData.listname.value
      id: 
    }
  }

  addSpeaker(event, sId) {
    event.preventDefault();
    let formData = event.target;
    let newSpeaker = {
      name: formData.name.value,
      topic: formData.topic.value,
      time: formData.time.value,
      sessionId: sId
    };
    SessionsService.addSpeaker(newSpeaker);
    formData.reset();
    _drawSessions();
  }
  //TODO: Your app will need the ability to create, and delete both lists and listItems
}
