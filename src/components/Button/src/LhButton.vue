<template>
  <button
    class="px-4 py-2 rounded-md hover:bg-opacity-75"
    :class="[
      color,
      bgColor,
      {
        'transform duration-500 ease-in-out hover:-translate-y-1': transform,
      },
    ]"
  >
    Hover me
  </button>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { buttonProps } from './buttonProps';
  export default defineComponent({
    props: buttonProps,
  });
</script>

<style lang="postcss"></style>
