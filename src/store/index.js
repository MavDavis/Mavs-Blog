import { createStore } from 'vuex'

export default createStore({
  state: {
    editPost:null,

    sampleBlogCards: [
      {
        blogTitle: "Blog Card #1",
        blogCoverPhoto: "stock-1",
        blogDate: "September 3, 2022",
      },
      {
        blogTitle: "Blog Card #2",
        blogCoverPhoto: "stock-2",
        blogDate: "September 3, 2022",
      },
      {
        blogTitle: "Blog Card #3",
        blogCoverPhoto: "stock-3",
        blogDate: "September 3, 2022",
      },
      {
        blogTitle: "Blog Card #4",
        blogCoverPhoto: "stock-4",
        blogDate: "September 3, 2022",
      },
    ],
  },
  getters: {
    
  },
  mutations: {
    toggleEditPost(state, payload){
    state.editPost = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
