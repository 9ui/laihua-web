<template>
  <div class="layout">
    <LayoutHeader />
    <content class="layout-content">
      <Nuxt />
    </content>
    <footer class="layout-footer">Footer</footer>
  </div>
</template>
<script lang="ts">
  import * as Core from '@/core';
  import { LayoutHeader } from '@/components/Layouts';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: { LayoutHeader },
    setup() {},
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
