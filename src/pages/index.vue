<template>
  <div class="index-pages">
    <div class="index-pages-container">
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
      Banner: () => import('./home/Banner.vue'),
      LazyContainer,
    },
    setup() {},
  });
</script>
<style lang="less">
  .index-pages {
    background-color: #fff;

    &-container {
      //   max-width: 1920px;
      width: 100%;
      min-width: 1200px;
      margin: 0 auto;
    }
  }
  // 作品案例
  .index-container {
    position: relative;
    display: flex;
    width: 1200px;
    margin: 0 auto;
    flex-direction: column;
  }
</style>
