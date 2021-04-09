<template>
  <LayoutMain>
    <SidebarA></SidebarA>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SidebarA } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SidebarA,
      LayoutMain,
    },
  });
</script>
