import { store } from "react-easy-state";
import axios from "axios";

export const apiEndpoint = `https://pq75wol035.execute-api.eu-central-1.amazonaws.com/dev/get-reddit-new`;

const main = store({
  filteredSub: "all",
  showNSFW: false,
  posts: [],
  watchingPosts: [],
  postsLoading: false,
  init: () => {
    // Check if localStorage has threads that are bign watched
    if (window.localStorage.watching && window.localStorage.length) {
      this.watchingPosts = window.localStorage.watching;
    } else {
      // Initialise with an empty array for future adding
    }
  },
  loadSub: async subName => {
    main.postsLoading = true;
    const posts = await axios.get(`${apiEndpoint}?sub=${subName}`);
    main.posts = posts.data.posts;
    main.filteredSub = subName;
    main.postsLoading = false;
  },
  addToWatching: (post, expectation) => {
    main.watchingPosts.push({
      expectation,
      post
    });
    window.localStorage.watching = main.watchingPosts;
  },
  removeFromWatching: postId => {
    main.watchingPosts = main.watchingPosts.filter(post => post.id === postId);
    window.localStorage.watching = main.watchingPosts;
  }
});

export default main;
