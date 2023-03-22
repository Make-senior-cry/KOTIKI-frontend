import { makeAutoObservable, runInAction } from 'mobx';
import signIn from '../api/signIn';
import signUp from '../api/signUp';
import signOut from '../api/signOut';
import getUser from '../api/getUser';
import User from '../entities/user';

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
    this.fetchUserData();
  }

  signIn(email, password) {
    return signIn(email, password)
      .then((user) => runInAction(() => { this.user = user; }));
  }

  signUp(name, email, password) {
    return signUp(name, email, password)
      .then((user) => runInAction(() => { this.user = user; }));
  }

  signOut() {
    return signOut()
      .then((user) => runInAction(() => { this.user = user; }));
  }

  fetchUserData() {
    return getUser()
      .then((user) => runInAction(() => { this.user = user; }))
      .catch((error) => console.error(error));
  }

  get isAuthorized() {
    return this.user !== null && this.user instanceof User;
  }
}

const userStore = new UserStore();
export default userStore;
