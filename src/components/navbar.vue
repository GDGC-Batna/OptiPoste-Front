<template>
  <div
    class="flex justify-between items-center px-10 py-5"
  >
    <div class="flex items-center space-x-4">
      <img src="../assets/logo.svg" alt="" />
       <h1 class="text-3xl text-white font-primary font-bold"><span class="text-secondary">Opti</span> <span class="text-primary">Poste</span></h1>
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
