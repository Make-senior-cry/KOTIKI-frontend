import { makeAutoObservable } from "mobx";
import signIn from "../api/signIn";
import signUp from "../api/signUp";
import signOut from "../api/signOut";
import User from "../entities/user";

class UserStore {
  user = null;
  error = null;

  constructor() {
    makeAutoObservable(this);
  }

  signIn(email, password) {
    signIn(email, password)
      .then((user) => {
        this.user = user;
        this.error = null;
      })
      .catch((error) => (this.error = error));
  }

  signUp(email, password, name) {
    signUp(email, password, name)
      .then((user) => {
        this.user = user;
        this.error = null;
      })
      .catch((error) => (this.error = error));
  }

  signOut() {
    signOut()
      .then(() => {
        this.user = null;
        this.error = null;
      })
      .catch((error) => (this.error = error));
  }

  get isAuthorized() {
    return this.user !== null && this.user instanceof User;
  }
}

const userStore = new UserStore();
export default userStore;
