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
    const posts = await axios.get(
      `https://pq75wol035.execute-api.eu-central-1.amazonaws.com/dev/get-reddit-new?sub=${subName}`
    );
    main.posts = posts.data.posts;
    main.filteredSub = subName;
    main.postsLoading = false;
  }
});

export default main;
