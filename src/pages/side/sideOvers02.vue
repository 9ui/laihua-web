<template>
  <LayoutMain>
    <SideOvers01></SideOvers01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SideOvers01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SideOvers01,
      LayoutMain,
    },
  });
</script>
