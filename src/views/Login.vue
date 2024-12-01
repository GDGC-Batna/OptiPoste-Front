<script lang="ts">
import axios from "axios";
export default {
  methods: {
    async login() {
      try {
        const response = await axios.post("https://your-api-endpoint/login", {
          email: this.email,
          password: this.password,
        });
        console.log("Login successful:", response.data);
      } catch (error) {
        console.error("Login failed:", error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>

<template>
  <div class="background-image h-screen py-52">
    <div class="flex justify-center items-center space-x-5">
      <img src="../assets/logo.svg" alt="" />
      <h1 class="text-4xl text-white font-primary font-bold"><span class="text-secondary">Opti</span> <span class="text-primaryb">Poste</span></h1>
    </div>
    <div class="max-w-sm mx-auto bg-white p-8 my-5 font-primary">
      <h2 class="text-2xl font-bold mb-6 text-center">Login</h2>
      <p class="text-center text-gray-500">Login to your account.</p>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-700">Email</label>
          <input
            type="email"
            v-model="email"
            id="email"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-700">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div class="mb-4 flex items-center">
          <input type="checkbox" id="keepLoggedIn" class="mr-2" />
          <label for="keepLoggedIn" class="text-gray-700"
            >Keep me logged in</label
          >
        </div>
        <button type="submit" class="w-full bg-primary text-white py-2 rounded-lg">
          <router-link to="/dashboard">Login</router-link>
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.background-image {
  background-image: url("../assets/bg.webp");
  background-size: cover;
  background-position: center;
}
</style>
