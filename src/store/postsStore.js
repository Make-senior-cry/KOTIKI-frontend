import { makeAutoObservable, runInAction } from 'mobx';
import { toast } from 'react-toastify';
import * as API from '../api';

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
    this.likePost = this.likePost.bind(this);
    this.reportPost = this.reportPost.bind(this);
  }

  async fetchFeed(skip, limit) {
    const postsPagination = await API.getFeed(this.type, skip, limit);
    runInAction(() => {
      this.setDataFromPostPaginationDTO(postsPagination);
    });
  }

  async fetchUserPosts(userId, skip, limit) {
    const postsPagination = await API.getPosts(userId, skip, limit);
    runInAction(() => {
      this.setDataFromPostPaginationDTO(postsPagination);
    });
  }

  setType(newType) {
    this.type = newType;
  }

  async likePost(postId) {
    try {
      const { likesCount } = await API.likePost(postId);
      runInAction(() => {
        this.updatePostLocallyById(postId, { likesCount });
      });
    } catch (e) {
      toast.error(e.message);
    }
  }

  async reportPost(postId) {
    try {
      const { reportsCount } = await API.reportPost(postId);
      runInAction(() => {
        this.updatePostLocallyById(postId, { reportsCount });
      });
    } catch (e) {
      toast.error(e.message);
    }
  }

  updatePostLocallyById(postId, newFields) {
    this.posts = this.posts.map((post) => {
      if (post.id === postId) {
        return { ...post, ...newFields };
      }
      return post;
    });
  }

  setDataFromPostPaginationDTO(postsPagination) {
    this.posts = postsPagination.dataList;
    this.hasNextPage = postsPagination.hasNext;
    this.hasPrevPage = postsPagination.hasPrev;
  }
}

export default new PostsStore();
