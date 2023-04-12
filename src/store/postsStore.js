import { makeAutoObservable, runInAction } from 'mobx';
import getFeed from '../api/getFeed';
import likePost from '../api/likePost';
import reportPost from '../api/reportPost';

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

  fetchFeed(skip, limit) {
    return getFeed(this.type, skip, limit)
      .then((postsPagination) => {
        runInAction(() => {
          this.setDataFromPostPagintaionDTO(postsPagination);
        });
      })
      .catch((error) => console.error(error));
  }

  setType(newType) {
    this.type = newType;
  }

  likePost(postId) {
    likePost(postId).then((likesCount) => {
      runInAction(() => {
        this.updatePostById(postId, { likesCount });
      });
    });
  }

  reportPost(postId) {
    reportPost(postId).then((reportsCount) => {
      runInAction(() => {
        this.updatePostById(postId, { reportsCount });
      });
    });
  }

  updatePostById(postId, newFields) {
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
