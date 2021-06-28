<template>
  <LayoutMain>
    <Sidebar02></Sidebar02>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Sidebar02 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Sidebar02,
      LayoutMain,
    },
  });
</script>
