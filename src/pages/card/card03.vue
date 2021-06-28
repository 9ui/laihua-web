<template>
  <LayoutMain>
    <Card03></Card03>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Card03 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Card03,
      LayoutMain,
    },
  });
</script>
