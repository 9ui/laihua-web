<template>
  <div>
    <header class="layout-header">
      <div class="layout-header__content">
        <nuxt-link to="/"> <img class="layout-header__logo" :src="logo" /></nuxt-link>
        <BasicMenu></BasicMenu>
      </div>
      <div class="layout-header__action">
        <!-- <button @click="navTo('login')">登陆</button>
        <button type="primary">注册送会员</button> -->
      </div>
    </header>
  </div>
</template>
<script lang="ts">
  import * as Core from '@/core';
  import { BasicMenu } from '@/components/Menu';
  import logo from '@/assets/images/logo.png';
  import { basicProps } from './props';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    props: basicProps,
    components: {
      BasicMenu,
    },
    methods: {
      navTo(path: string) {
        this.$router.push(path);
      },
    },
    setup() {
      return {
        logo,
      };
    },
  });
</script>
