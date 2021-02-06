<template>
  <LayoutMain>
    <SectionC id="sourceCode"></SectionC>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SectionC } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      SectionC,
      LayoutMain,
    },
  });
</script>
