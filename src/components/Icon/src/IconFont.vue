<template>
  <svg class="iconfont" :style="{ fontSize: fontSize }" aria-hidden="true">
    <use :xlink:href="`#${name}`" />
  </svg>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  import { iconProps } from './props';
  export default defineComponent({
    props: iconProps,
  });
</script>
