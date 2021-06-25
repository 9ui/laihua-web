<template>
  <LayoutMain>
    <BlogC></BlogC>
  </LayoutMain>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { BlogC } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
      BlogC,
    },
  });
</script>
