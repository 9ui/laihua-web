<template>
  <LayoutMain>
    <SectionB id="sourceCode"></SectionB>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SectionB } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SectionB,
      LayoutMain,
    },
  });
</script>
