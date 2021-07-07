<template>
  <LayoutMain>
    <Header03></Header03>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Header03 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Header03,
      LayoutMain,
    },
  });
</script>
