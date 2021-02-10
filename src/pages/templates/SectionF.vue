<template>
  <LayoutMain>
    <SectionF></SectionF>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SectionF } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SectionF,
      LayoutMain,
    },
  });
</script>
