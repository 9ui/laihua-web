<template>
  <LayoutMain>
    <Blog06></Blog06>
  </LayoutMain>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Blog06 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
      Blog06,
    },
  });
</script>
