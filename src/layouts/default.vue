<template>
  <div class="layout">
    <LayoutSidebar></LayoutSidebar>
    <div class="layout-container">
      <LayoutHeader></LayoutHeader>
      <!-- <p class="p-4 pb-2">
      <select
        v-model="$colorMode.preference"
        class="border w-24 h-8 dark:border-gray-700 dark:text-gray-600 to-gray-500 dark:bg-red-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p> -->
      <content class="layout-content" :class="[hasSidebar ? 'has-sidebar' : undefined]">
        <Nuxt />
      </content>
      <LayoutFooter></LayoutFooter>
    </div>
  </div>
</template>
<script lang="ts">
  import { mapState } from 'vuex';
  import * as Core from '@/core';
  import { LayoutHeader, LayoutFooter, LayoutSidebar } from '@/components/Layouts/index';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: { LayoutHeader, LayoutFooter, LayoutSidebar },
    computed: {
      ...mapState('common', ['hasSidebar']),
    },
    methods: {},
  });
</script>
<style lang="less" scoped>
  .layout {
    display: flex;

    &-container {
      flex: 1;
    }

    &-content {
      display: flex;
      padding: 0 16px;
      transition: padding 0.3s;
      flex-direction: column;

      &.has-sidebar {
        padding: 0 16px 0 170px;
        flex: 1;
      }
    }
  }
</style>
