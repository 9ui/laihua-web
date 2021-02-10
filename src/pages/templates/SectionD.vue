<template>
  <LayoutMain>
    <SectionD></SectionD>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SectionD } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SectionD,
      LayoutMain,
    },
  });
</script>
