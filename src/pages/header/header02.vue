<template>
  <LayoutMain>
    <Header02></Header02>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Header02 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Header02,
      LayoutMain,
    },
  });
</script>
