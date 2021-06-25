<template>
  <LayoutMain>
    <PageE></PageE>
  </LayoutMain>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { PageE } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
      PageE,
    },
  });
</script>
