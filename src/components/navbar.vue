<template>
  <div
    class="flex justify-between items-center px-10 py-5 border-b border-gray-600"
  >
    <div class="flex items-center">
      <img src="../assets/logo.svg" alt="" />
      <h1>OptiPoste</h1>
    </div>
    <div class="flex space-x-8 items-center">
      <BellDot />
      <Search />
      <CircleUserRound />
    </div>
  </div>
</template>

<script setup>
import { Search } from "lucide-vue-next";
import { BellDot } from "lucide-vue-next";
import { CircleUserRound } from "lucide-vue-next";
</script>
