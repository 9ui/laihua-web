<template>
  <div class="right-info">
    <BasicAffix>
      <div class="rect"></div>
    </BasicAffix>
  </div>
</template>

<script lang="ts">
  import * as Core from '@/core';
  import { BasicAffix } from '@/components/Affix/index';
  const { VueAPI } = Core;
  export default VueAPI.defineComponent({
    components: {
      BasicAffix,
    },
  });
</script>

<style>
  .rect {
    width: 1200px;
    height: 50px;
    background-color: darkgoldenrod;
  }
</style>
