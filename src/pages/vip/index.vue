<template>
  <div class="vip">
    <div class="vip-container">
      <Banner></Banner>
      <LazyContainer> </LazyContainer>
    </div>
  </div>
</template>

<script lang="ts">
  import { LazyContainer } from '@/components/Container/index';
  import * as Core from '@/core';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      Banner: () => import('./Banner.vue'),
      LazyContainer,
    },
    setup() {},
  });
</script>
<style lang="less">
  .vip {
    background-color: #fff;

    &-container {
      max-width: 1920px;
      min-width: 1200px;
      margin: 0 auto;
    }
  }
</style>
