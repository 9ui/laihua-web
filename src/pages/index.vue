<template>
  <LayoutMain>
    <LhButton id="sourceCode"></LhButton>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { LhButton } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LhButton,
      LayoutMain,
    },
  });
</script>
