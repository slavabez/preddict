import { store } from "react-easy-state";
import axios from "axios";

const main = store({
  filteredSub: "all",
  showNSFW: false,
  posts: [],
  watchingPosts: [],
  postsLoading: false,
  loadSub: async subName => {
    main.postsLoading = true;
    const posts = await axios.get(`https://reddit.com/r/${subName}/new.json`);
    main.posts = posts.data.data.children;
    main.filteredSub = subName;
    main.postsLoading = false;
  }
});

export default main;
