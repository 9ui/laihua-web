<template>
  <LayoutMain>
    <SidebarB></SidebarB>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SidebarB } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SidebarB,
      LayoutMain,
    },
  });
</script>
