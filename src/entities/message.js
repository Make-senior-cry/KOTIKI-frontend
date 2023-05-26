export default class Message {
  constructor(id, text, sendTimestamp, senderId, receiverId, checked) {
    this.id = id;
    this.text = text;
    this.sendTimestamp = sendTimestamp;
    this.senderId = senderId;
    this.receiverId = receiverId;
    this.checked = checked;
  }
}
