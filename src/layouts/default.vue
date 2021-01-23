<template>
  <div class="layout">
    <LayoutHeader />
    <p class="p-4 pb-2">
      <select
        v-model="$colorMode.preference"
        class="border w-24 h-8 dark:border-gray-700 dark:text-gray-600 to-gray-500 dark:bg-red-700"
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </p>
    <content class="layout-content">
      <Nuxt />
    </content>
    <div id="subapp"></div>
    <footer class="layout-footer">Footer</footer>
  </div>
</template>
<script lang="ts">
  import * as Core from '@/core';
  import { LayoutHeader } from '@/components/Layouts';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: { LayoutHeader },
    methods: {},
  });
</script>
<style lang="less" scoped>
  #components-layout-demo-basic {
    text-align: center;
  }

  #components-layout-demo-basic .ant-layout-header,
  #components-layout-demo-basic .ant-layout-footer {
    color: #fff;
    // background: #7dbcea;
  }

  #components-layout-demo-basic .ant-layout-footer {
    line-height: 1.5;
  }
</style>
