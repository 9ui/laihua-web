<template>
  <div class="index-pages">
    <div class="index-pages-container">
      <Banner></Banner>
      <Scene></Scene>
      <LazyContainer>
        <Scenarios></Scenarios>
        <Introduction></Introduction>
      </LazyContainer>
    </div>
  </div>
</template>

<script lang="ts">
  import { mapActions, mapState } from 'vuex';
  import { LazyContainer } from '@/components/Container/index';
  import * as Core from '@/core';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      Banner: () => import('./home/Banner.vue'),
      Scenarios: () => import('./home/Scenarios.vue'),
      Introduction: () => import('./home/Introduction.vue'),
      Scene: () => import('./home/Scene.vue'),
      LazyContainer,
    },
    fetch({ store }) {
      store.dispatch('solution/fetchCategory');
    },
    computed: {
      ...mapState('solution', ['categorys']),
    },
    mounted() {
      this.fetchCategory();
    },
    methods: {
      ...mapActions('solution', ['fetchCategory']),
    },
    setup() {},
  });
</script>
<style lang="less">
  .index-pages {
    background-color: #fff;

    &-container {
      max-width: 1920px;
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
