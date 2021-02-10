<template>
  <LayoutMain>
    <SectionE></SectionE>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SectionE } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SectionE,
      LayoutMain,
    },
  });
</script>
