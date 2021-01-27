<template>
  <nav class="bg-gray-800 toolbar flex align-middle">
    <div class="opener cursor-pointer" @click="setSidebar">TAILBLOCKS</div>
    <div class="copy-the-block cursor-pointer">
      <svg
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 18L22 12 16 6"></path>
        <path d="M8 6L2 12 8 18"></path>
      </svg>
      <span>VIEW CODE</span>
    </div>
    <div class="switcher">
      <button data-theme="indigo" class="theme-button bg-indigo-500 is-active"></button>
      <button data-theme="yellow" class="theme-button bg-yellow-500"></button>
      <button data-theme="red" class="theme-button bg-red-500"></button>
      <button data-theme="purple" class="theme-button bg-purple-500"></button>
      <button data-theme="pink" class="theme-button bg-pink-500"></button>
      <button data-theme="blue" class="theme-button bg-blue-500"></button>
      <button data-theme="green" class="theme-button bg-green-500"></button>
    </div>
    <button class="device is-active" data-view="desktop">
      <svg
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M8 21h8m-4-4v4"></path>
      </svg>
    </button>
    <button class="device" data-view="tablet">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    </button>
    <button class="device" data-view="phone">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    </button>
    <button class="mode" @click="changeTheme"></button>
  </nav>
</template>
<script lang="ts">
  import { mapMutations, mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  import { LhDropdown } from '@/components/Dropdown/index';
  export default defineComponent({
    components: {
      LhDropdown,
    },
    data() {
      return {
        isOpen: false,
        darkMode: false,
      };
    },
    computed: {
      ...mapState('common', ['hasSidebar']),
    },
    methods: {
      ...mapMutations('common', ['SET_SIDEBAR', 'SET_THEME']),
      toggle() {
        this.isOpen = !this.isOpen;
      },
      setSidebar() {
        const hasSidebar = !this.hasSidebar;
        this.SET_SIDEBAR(hasSidebar);
      },
      changeTheme() {
        this.darkMode = !this.darkMode;
        this.$colorMode.preference = this.darkMode ? 'dark' : 'light';
        //  this.SET_THEME()
      },
    },
  });
</script>
