<template>
  <LayoutMain>
    <FormA></FormA>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { FormA } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      FormA,
      LayoutMain,
    },
  });
</script>
