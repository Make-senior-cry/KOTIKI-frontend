import { makeAutoObservable, runInAction } from 'mobx';
import * as API from '../api';
import PostRecord from '../entities/postRecord';

export const feedType = {
  FOLLOWING: 'FOLLOWING',
  NEW: 'NEW',
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
    const postsPagination = await API.getFeed(this.type, skip, limit);
    runInAction(() => {
      this.setDataFromPostPagintaionDTO(postsPagination);
    });
  }

  async fetchUserPosts(userId, skip, limit) {
    const postsPagination = await API.getPosts(userId, skip, limit);
    runInAction(() => {
      this.setDataFromPostPagintaionDTO(postsPagination);
    });
  }

  setType(newType) {
    this.type = newType;
  }

  async likePost(postId) {
    try {
      const likesCount = await API.likePost(postId);
      runInAction(() => {
        this.updatePostLocallyById(postId, { likesCount });
      });
    } catch (e) {
      console.error(e);
    }
  }

  async reportPost(postId) {
    try {
      const reportsCount = await API.reportPost(postId);
      runInAction(() => {
        this.updatePostLocallyById(postId, { reportsCount });
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
    this.posts = postsPagination.dataList.map((post) => new PostRecord(post));
    this.hasNextPage = postsPagination.hasNext;
    this.hasPrevPage = postsPagination.hasPrev;
  }
}

export default new PostsStore();
