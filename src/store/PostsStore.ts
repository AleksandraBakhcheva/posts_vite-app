import { makeAutoObservable } from "mobx";

class PostsStore {
  posts = [];
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  getPosts = async () => {
    this.isLoading = true;
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_page=0&_limit=10"
    );
    this.posts = await response.json();
    this.isLoading = false;
  };
}

const store = new PostsStore();
export default store;
