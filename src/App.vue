<template>
  <div class="app-wrapper">
    <div class="app" v-if="$store.state.postLoaded">
      <div v-show="!navigation">
        <Navbar />
      </div>
      <router-view />
      <Footer />
    </div>
  </div>
</template>

<script>
    import { firebaseAuth } from "./firebase/firebaseInit";
    import { getAuth, onAuthStateChanged } from "firebase/auth";
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
export default {
  name: "app",
  components: { Navbar, Footer },
  data() {
    return {
      navigation: null,
    };
  },
  created() {
    this.checkRoute();
    onAuthStateChanged(firebaseAuth, (user) => {
      this.$store.commit('updateUser', user);
      if(user){
        this.$store.commit('userDetail')
      }
  }
)
  },
  mounted() {
    onAuthStateChanged(firebaseAuth, (user) => {
      this.$store.commit('updateUser', user);
      if(user){
        this.$store.commit('userDetail')
      }
  }
)
this.$store.commit('getPost')

  },
  methods: {
    checkRoute() {
      if (
        this.$route.name === "Login" ||
        this.$route.name === "ForgotPassword" ||
        this.$route.name === "Register"
      ) {
        this.navigation = true;
        return;
      } 
        this.navigation = false;
      
    },
  },
  watch: {
    $route() {

      this.checkRoute();
    },
  },
};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
  transition: 0.4s ease;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.app-wrapper {
  scroll-behavior: smooth;
}

// .container {
//   max-width: 1440px;
//   margin: 0 auto;
// }

// .link {
//   cursor: pointer;
//   text-decoration: none;
//   text-transform: uppercase;
//   color: black;
// }

// .link-light {
//   color: #fff;
// }.
.router-link-active{
  color:#1DB954;
}
</style>
