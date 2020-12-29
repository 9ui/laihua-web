<template>
  <div class="a-container">首页2020</div>
</template>

<script lang="ts">
  import { mapActions, mapState } from 'vuex';
  import * as Core from '@/core';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
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
  .a-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
