<template>
  <Loading v-if="loading"/>
    <div class=" login flex justify-center sm:justify-between items-center h-screen ">
        <div class=" w-full md:w-1/2">
  <p class="text-sm text-dark text-center">
    Don't have an account?
    <router-link
      class="text-lg ml-1 font-semibold underline hover:tracking-wider"
      :to="{ name: 'Register' }"
      >Register</router-link
    >
  </p>
  <div class="w-full">
    <h1 class="font-semibold tracking-wider text-xl text-center">Login to <span class="text-2xl font-bold">Mavs-Blogs</span></h1>
    <form class="bg-white px-5 pt-6 pb-8 mb-4">
      <p
            v-if="error"
            class="
              error
              text-center
              mb-2
              text-red-300 text-sm
              tracking-wide
              font-semibold
            "
          >
            {{ errMssg }}
          </p>
        <div class="mb-4 relative ">
        <i class="fas fa-envelope absolute top-3 left-3 text-dark z-10"></i>        <input
          class="
            bg-gray-100
            appearance-none
            border
            rounded
            w-full
            py-2
            px-8
            text-dark
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="email"
          type="email"
          required
          placeholder="Email"
        />
      </div>
      <div class="mb-4 relative ">
        <i class="fas fa-lock absolute top-3 left-3 text-dark z-10"></i>     
        <input
              type="checkbox"
              @click="toggledInputField"
              class="absolute top-3 right-3 z-10"
            />
           <input
          class="
            appearance-none
            bg-gray-100
            rounded
            w-full
            py-2
            px-8
            text-dark
            mb-3
            leading-tight
            focus:outline-none focus:shadow-outline
          "
          v-model="password"
          :type="inputField"
          placeholder="Password"
        />
      </div>
      <div class="flex flex-col items-center justify-between">
        <router-link
          :to="{ name: 'ForgotPassword' }"
          class="
            mb-5
            inline-block
            align-baseline
            font-bold
            text-sm text-dark
            hover:tracking-wider
          "
        >
          Forgot Password?
        </router-link>
        <button
        @click="Login()"
          class="
            bg-dark
            hover:tracking-wider
            text-white
            font-bold
            py-2
            px-4
            rounded-full
            focus:outline-none focus:shadow-outline
          "
          type="button"
        >
          Sign In
        </button>
      </div>
    </form>
  </div>
  </div>
  <div class="hidden sm:block w-1/2 bg-img">
    <div class=" w-full h-full relative"></div>
  </div>
</div>
</template>

<script>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import { firebaseAuth } from "../firebase/firebaseInit";
import Loading from "@/components/Loading.vue";

export default {
    data() {
        return {
            email: "",
            password: "",
            loading:false,
            error:false,
            errMssg:'',
            inputField:'password'
        };
    },
    methods: {
      toggledInputField() {
            if (this.inputField == "password") {
                this.inputField = "text";
            }
            else {
                this.inputField = "password";
            }},
        Login() {
          if(this.email === '' || this.password === ''){
            return
          }else{
            this.loading = true;
            let self = this;
            signInWithEmailAndPassword(firebaseAuth, this.email, this.password)
                .then((userCredential) => {
                  console.log(userCredential.user.uid);
                self.$router.push({ name: "Home" });
                this.loading = false;
            })
                .catch((error) => {
                  this.loading= false
                  this.error = true;
                this.errMssg = error.message;
                setTimeout(() => {
                    this.error = false;
                    this.errMssg = "";
                }, 20000);
            });
        }
    },},
    components: { Loading }
}
</script>

<style lang="scss" scoped>
   .bg-img{
        background: url('../assets/background.jpg');
      background-size: cover;
background-position: center;    

      height: 100%;
      width: 100%;
      opacity: 1;
      z-index: 100;
    
    }
</style>