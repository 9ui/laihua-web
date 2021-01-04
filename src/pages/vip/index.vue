<template>
  <div class="vip">
    <div class="vip-container">
      <Banner></Banner>
      <RightInfo></RightInfo>
      <LazyContainer> </LazyContainer>
    </div>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  import { LazyContainer } from '@/components/Container/index';
  import RightInfo from './RightInfo.vue';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      Banner: () => import('./Banner.vue'),
      RightInfo,
      LazyContainer,
    },
    setup() {},
  });
</script>
<style lang="less">
  .vip {
    padding-top: 48px;
    background-color: #fff;

    &-container {
      height: 5000px;
      max-width: 1920px;
      min-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
