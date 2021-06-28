<template>
  <LayoutMain>
    <Header01></Header01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Header01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Header01,
      LayoutMain,
    },
  });
</script>
