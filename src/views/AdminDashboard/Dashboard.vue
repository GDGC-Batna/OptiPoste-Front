<template>
  <div>
    <navbar />
    <div class="flex h-screen">
      <sidebar />
      <!-- Main Content -->
      <div class="w-full h-full bg-white p-5 overflow-auto max-h-[90vh]">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script setup>
import sidebar from "../../components/sidebar.vue";
import navbar from "../../components/navbar.vue";
</script>
