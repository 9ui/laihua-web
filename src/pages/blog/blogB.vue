<template>
  <LayoutMain>
    <BlogB></BlogB>
  </LayoutMain>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { BlogB } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
      BlogB,
    },
  });
</script>
