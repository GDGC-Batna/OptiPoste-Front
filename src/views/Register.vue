<script lang="ts">
import axios from "axios";
export default {
  methods: {
    async register() {
      try {
        const response = await axios.post(
          "https://your-api-endpoint/register",
          {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword,
          }
        );
        console.log("Registration successful:", response.data);
      } catch (error) {
        console.error("Registration failed:", error);
      }
    },
  },
  data() {
    return {
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
};
</script>

<template>
  <div class="background-image h-screen py-52">
    <div class="flex justify-center items-center space-x-10">
      <img src="../assets/logo.svg" alt="" />
      <h1 class="text-4xl font-bold text-white">OptiPoste</h1>
    </div>
    <div class="max-w-sm mx-auto bg-white p-8 my-10">
      <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
      <p class="text-center text-gray-500">Create a new account.</p>
      <form @submit.prevent="register">
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
        <div class="mb-4">
          <label for="confirmPassword" class="block text-gray-700"
            >Confirm Password</label
          >
          <input
            type="password"
            v-model="confirmPassword"
            id="confirmPassword"
            class="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
        >
          Register
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
