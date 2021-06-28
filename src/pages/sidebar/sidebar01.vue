<template>
  <LayoutMain>
    <Sidebar01></Sidebar01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Sidebar01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Sidebar01,
      LayoutMain,
    },
  });
</script>
