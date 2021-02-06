<template>
  <LayoutMain>
    <CardB id="sourceCode"></CardB>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { CardB } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      CardB,
      LayoutMain,
    },
  });
</script>
