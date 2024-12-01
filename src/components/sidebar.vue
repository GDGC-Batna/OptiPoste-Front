<template>
  <div
    :class="{
      'w-60': showSide,
      'w-20': !showSide,
    }"
    class="bg-white text-black pr-4 transition-all duration-300 space-y-6"
  >
    <button
      @click="toggleSideBar"
      class="text-white hover:text-gray-400 px-4 py-2 mb-8 w-full flex justify-end"
    >
      <div v-if="showSide" class="absolute"><ArrowLeftToLine /></div>
      <div v-else class="absolute left-5"><ArrowRightToLine /></div>
    </button>

    <router-link
      v-for="(link, index) in sidebarLinks"
      :key="index"
      :to="link.route"
      :class="[
        'flex items-center  transition-all duration-300 px-4 py-3 hover:bg-[#FECC0B33]',
        isActive(link.route) ? 'bg-white text-primary font-bold' : '',
      ]"
    >
      <component :is="link.icon" class="mr-2" />
      <span v-if="showSide">{{ link.label }}</span>
    </router-link>

    <!-- Logout Button -->
    <button
      class="text-red-600 hover:font-bold hover:underline flex items-center uppercase font-semibold space-x-2 px-4 py-3"
    >
      <LogOut />
      <span v-if="showSide">Logout</span>
    </button>
  </div>
</template>
<script>
import {
  Activity,
  PackageCheck,
  PackagePlus,
  Users,
  ArrowRightLeft,
  Settings,
  LogOut,
  ArrowLeftToLine,
  ArrowRightToLine,
} from "lucide-vue-next";

export default {
  components: {
    Activity,
    PackageCheck,
    PackagePlus,
    Users,
    ArrowRightLeft,
    Settings,
    LogOut,
    ArrowLeftToLine,
    ArrowRightToLine,
  },
  data() {
    return {
      showSide: true,
      sidebarLinks: [
        { route: "/dashboard/home", label: "dashboard", icon: Activity },
        { route: "/dashboard/products", label: "settings", icon: PackageCheck },
        {
          route: "/dashboard/product/create",
          label: "All Files",
          icon: PackagePlus,
        },
        { route: "/dashboard/users", label: "Recent", icon: Users },
        { route: "/dashboard/orders", label: "Trash", icon: ArrowRightLeft },
        { route: "/dashboard/settings", label: "Postal forms", icon: Settings },
        { route: "/dashboard/settings", label: "Bills", icon: Settings },
        {
          route: "/dashboard/settings",
          label: "Bank statements",
          icon: Settings,
        },
        {
          route: "/dashboard/settings",
          label: "Official letters",
          icon: Settings,
        },
      ],
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
    },
    isActive(route) {
      return this.$route.path === route;
    },
  },
};
</script>
