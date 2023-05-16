import { makeAutoObservable, runInAction } from 'mobx';
import { toast } from 'react-toastify';
import * as API from '../api';
import User, { fakeUser } from '../entities/user';
import config from '../config/config';

class UserStore {
  user = null;

  constructor() {
    makeAutoObservable(this);
  }

  async signIn(email, password) {
    if (config.FAKE_LOGIN) {
      this.user = fakeUser;
    } else {
      // Errors from signIn must be catched in a calling component
      const user = await API.signIn(email, password);
      runInAction(() => { this.user = user; });
    }
  }

  async signUp(name, email, password) {
    // Errors from signUp must be catched in a calling component
    const user = await API.signUp(name, email, password);
    runInAction(() => { this.user = user; });
  }

  async signOut() {
    // Errors from signOut must be catched in a calling component
    await API.signOut();
    runInAction(() => { this.user = null; });
  }

  async fetchUserData() {
    if (config.FAKE_LOGIN) {
      this.user = fakeUser;
    } else {
      try {
        const user = await API.getAuthorizedUser();
        runInAction(() => { this.user = user; });
      } catch (e) {
        toast.error(e.message);
      }
    }
  }

  get isAuthorized() {
    return this.user !== null && this.user instanceof User;
  }
}

const userStore = new UserStore();
export default userStore;
