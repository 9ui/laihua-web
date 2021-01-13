<template>
  <div class="index-pages">
    <Banner></Banner>
    <NaveCard></NaveCard>
    <ProductFeature></ProductFeature>
    <VideoExam></VideoExam>
    <BottomCarousel></BottomCarousel>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      Banner: () => import('./home/Banner.vue'),
      NaveCard: () => import('./home/NaveCard.vue'),
      ProductFeature: () => import('./home/ProductFeature.vue'),
      VideoExam: () => import('./home/VideoExam.vue'),
      BottomCarousel: () => import('./home/BottomCarousel.vue'),
    },
    setup() {},
  });
</script>
<style lang="less">
  .index-pages {
    position: relative;
    display: flex;
    background-color: #fff;
    flex-direction: column;
    align-items: center;
  }
</style>
