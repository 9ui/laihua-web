<template>
  <div class="layout" :class="[hasSidebar ? 'has-sidebar' : undefined]">
    <LayoutSidebar></LayoutSidebar>
    <div class="layout-container">
      <LayoutHeader></LayoutHeader>
      <!-- <p class="px-56 pb-2">
        <select
          v-model="$colorMode.preference"
          class="border w-24 h-8 dark:border-gray-700 dark:text-gray-600 to-gray-500 dark:bg-red-700"
        >
          <option value="system">System</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </p> -->
      <content class="main px-5">
        <Nuxt />
      </content>
      <!-- <LayoutFooter></LayoutFooter> -->
    </div>
  </div>
</template>
<script lang="ts">
  import { mapState } from 'vuex';
  import * as Core from '@/core';
  import { LayoutHeader, LayoutSidebar } from '@/components/Layouts/index';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: { LayoutHeader, LayoutSidebar },
    computed: {
      ...mapState('common', ['hasSidebar', 'theme']),
    },
    methods: {},
  });
</script>
