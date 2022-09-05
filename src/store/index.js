import { createStore } from 'vuex'
import { firebaseAuth } from "../firebase/firebaseInit";
import { db } from "../firebase/firebaseInit";
import { collection, getDoc, doc } from "firebase/firestore"; 
import { getFirestore,  setDoc } from "firebase/firestore";
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
    blogPhotoName:'',
    blogTitle:'',
    blogHtml:'Write Your blog post here..',
    blogPhotoFileUrl:'',
    user:null,
    userEmail:'',
    userFirstname:'',
    userLastname:'',
    userUsername:'',
    userId:'',
    UserInitials:'',
    userPassword:''
  },
  getters: {
    
  },
  mutations: {
    changeUserDetails(state){
      const user = firebaseAuth.currentUser
      const docRef = doc(db, "Users", user.uid);
      const data = {
        Firstname: state.userFirstname,
        Lastname: state.userLastname,
        Email: state.userEmail ,
        Username:state.userUsername,
        password:state.userPassword
      };
      setDoc(docRef, data)
.then(docRef => {
    console.log(docRef);
})
.catch(error => {
    console.log(error);
})
    },
    toggleEditPost(state, payload){
    state.editPost = payload
    },
    changeFirstname(state, payload){
      state.userFirstname = payload
    },
    changeLastname(state, payload){
      state.userLastname = payload
    },changeUsername(state, payload){
      state.userUsername = payload
    },
    updateUser(state, payload){
      state.user = payload
    },
    updateBlogHtml(state, payload){
      state.blogHtml = payload
    },
    updateBlogTitle(state, payload){
      state.blogTitle = payload

    },
    filenameChanged(state, payload){
      state.blogPhotoName = payload

    },
    createFileUrl(state, payload){
      state.blogPhotoFileUrl = payload

    },
   async userDetail(state){
    const user = firebaseAuth.currentUser
      const docRef = doc(db, "Users", user.uid);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  let db = []
  let initial = docSnap.data().Firstname.toUpperCase().slice(0,1) + docSnap.data().Lastname.toUpperCase().slice(0,1)
state.userFirstname = docSnap.data().Firstname
state.userLastname = docSnap.data().Lastname
state.userEmail = docSnap.data().Email
state.userUsername = docSnap.data().Username
state.userPassword = docSnap.data().password
state.UserInitials = initial
 db=[...db, state.userFirstname, state.userLastname, state.userEmail, state.userUsername, initial,state.userPassword, user.uid]

} else {
  console.log("No such document!");
}
    }
  },
  actions: {
  },
  modules: {
  }
})
