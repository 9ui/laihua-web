<template>
  <aside class="aside" :class="[hasSidebar ? 'has-sidebar' : undefined]"> </aside>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    computed: {
      ...mapState('common', ['hasSidebar']),
    },
  });
</script>

<style lang="less">
  .aside {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    flex-basis: 160px;
    height: 100vh;
    padding: 20px;
    overflow: auto;
    background-color: #edf2f7;
    transform: translateX(-100%);
    transition: transform 0.3s;
    flex-direction: column;
    align-items: center;

    &.has-sidebar {
      width: 160px;
      transform: translateX(0);
      box-shadow: 2px 68px 10px rgba(194, 206, 219, 0.68);
    }
  }
</style>
