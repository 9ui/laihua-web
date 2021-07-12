<template>
  <div class="mx-auto p-5">
    <SwitchButton :active="active" @change="oncChange"></SwitchButton>
    <!-- <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon--download-pc"></use>
    </svg> -->
  </div>
</template>

<script>
  import { SwitchButton } from '@/components/SwitchButton/index';
  export default {
    components: {
      SwitchButton,
    },
    data() {
      return {
        active: 0,
      };
    },
    methods: {
      oncChange(_num) {
        this.active = _num;
      },
    },
  };
</script>

<style lang="postcss" scoped>
  .icon {
    width: 100px;
    height: 100px;
    overflow: hidden;
    vertical-align: -0.15em;
    fill: currentColor;
  }
</style>
