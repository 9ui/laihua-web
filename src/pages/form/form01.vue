<template>
  <LayoutMain>
    <Form01></Form01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Form01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Form01,
      LayoutMain,
    },
  });
</script>
