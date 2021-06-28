<template>
  <LayoutMain>
    <Banner02></Banner02>
  </LayoutMain>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Banner02 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
      Banner02,
    },
  });
</script>
