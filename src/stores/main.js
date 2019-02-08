import { store } from "react-easy-state";
import axios from "axios";

export const apiEndpoint = `https://pq75wol035.execute-api.eu-central-1.amazonaws.com/dev/get-reddit-new`;

const main = store({
  filteredSub: "all",
  showNSFW: false,
  posts: [],
  watchingPosts: [],
  postsLoading: false,
  loadSub: async subName => {
    main.postsLoading = true;
    const posts = await axios.get(`${apiEndpoint}?sub=${subName}`);
    main.posts = posts.data.posts;
    main.filteredSub = subName;
    main.postsLoading = false;
  },
  addToWatching: post => {
    main.watchingPosts.push(post);
  },
  removeFromWatching: postId => {
    main.watchingPosts = main.watchingPosts.filter(post => post.id === postId);
  }
});

export default main;
