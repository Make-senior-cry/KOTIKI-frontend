import { makeAutoObservable } from "mobx"

class ModalStore {
  currentModal;
  ADD_POST_MODAL = 'ADD_POST_MODAL';

  constructor() {
    makeAutoObservable(this);
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal(modalName) {
    this.currentModal = modalName;
  }

  hideModal() {
    this.currentModal = null;
  }
}

export default new ModalStore();