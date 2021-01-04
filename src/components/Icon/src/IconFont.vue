<template>
  <svg class="iconfont" :style="{ fontSize: fontSize }" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  import { iconProps } from './iconProps';
  export default defineComponent({
    props: iconProps,
  });
</script>
