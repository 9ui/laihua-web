<template>
  <LayoutMain>
    <SideOversA></SideOversA>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SideOversA } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SideOversA,
      LayoutMain,
    },
  });
</script>
