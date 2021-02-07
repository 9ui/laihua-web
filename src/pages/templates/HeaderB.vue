<template>
  <LayoutMain>
    <HeaderB id="sourceCode"></HeaderB>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { HeaderB } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      HeaderB,
      LayoutMain,
    },
  });
</script>
