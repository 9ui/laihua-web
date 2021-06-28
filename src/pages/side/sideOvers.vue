<template>
  <LayoutMain>
    <SideOvers></SideOvers>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SideOvers } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SideOvers,
      LayoutMain,
    },
  });
</script>
