<template>
  <header class="text-gray-600 body-font shadow">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nuxt-link
        class="flex title-font text-gray-900 font-medium items-center hover:text-gray-600 mb-4 md:mb-0"
        to="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Laihua</span>
      </nuxt-link>
      <nav
        class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center"
      >
        <nuxt-link class="mr-5 hover:text-gray-900 cursor-pointer" to="base">基础</nuxt-link>
        <div class="mr-5 hover:text-gray-900 cursor-pointer">进阶</div>
        <div class="mr-5 hover:text-gray-900 cursor-pointer">高级</div>
        <div class="mr-5 hover:text-gray-900 cursor-pointer">实战</div>
      </nav>
    </div>
  </header>
</template>
<script lang="ts">
  import * as Core from '@/core';
  import { BasicMenu } from '@/components/Menu';
  import { basicProps } from './props';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    props: basicProps,
    components: {
      BasicMenu,
    },
    methods: {},
    setup() {},
  });
</script>
