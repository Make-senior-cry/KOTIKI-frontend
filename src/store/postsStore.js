import { makeAutoObservable, runInAction } from 'mobx';
import * as API from '../api';

export const feedType = {
  FOLLOWING: 'following',
  NEW: 'new',
};

class PostsStore {
  posts = [];

  hasNextPage = false;

  hasPrevPage = false;

  type = feedType.NEW;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchFeed(skip, limit) {
    try {
      const postsPagination = await API.getFeed(this.type, skip, limit);
      runInAction(() => {
        this.setDataFromPostPagintaionDTO(postsPagination);
      });
    } catch (e) {
      console.error(e);
    }
  }

  setType(newType) {
    this.type = newType;
  }

  async likePost(postId) {
    try {
      const likesCount = await API.likePost(postId);
      runInAction(() => {
        this.updatePostById(postId, { likesCount });
      });
    } catch (e) {
      console.error(e);
    }
  }

  async reportPost(postId) {
    try {
      const reportsCount = await API.reportPost(postId);
      runInAction(() => {
        this.updatePostById(postId, { reportsCount });
      });
    } catch (e) {
      console.error(e);
    }
  }

  async updatePostLocallyById(postId, newFields) {
    this.posts = this.posts.map((post) => {
      if (post.id === postId) {
        return { ...post, ...newFields };
      }
      return post;
    });
  }

  setDataFromPostPagintaionDTO(postsPagination) {
    this.posts = postsPagination.dataList;
    this.hasNextPage = postsPagination.hasNext;
    this.hasPrevPage = postsPagination.hasPrev;
  }
}

export default new PostsStore();
