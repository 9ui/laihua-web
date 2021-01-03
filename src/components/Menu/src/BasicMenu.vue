<template>
  <div class="header-menu">
    <nuxt-link v-for="menu in menus" :key="menu.key" :to="menu.key" class="sub-menu">
      <span>{{ menu.name }}</span></nuxt-link
    >
  </div>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { menus } from '@/mock/header/menu';
  export default defineComponent({
    setup() {
      return {
        menus,
      };
    },
  });
</script>
<style lang="less" scoped>
  .header-menu {
    display: flex;
    font-size: 14px;

    .sub-menu {
      padding: 0 17px;
      color: #fff;
      cursor: pointer;

      &:hover {
        font-weight: bold;
        color: #333;
      }
    }
  }
</style>
