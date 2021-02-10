<template>
  <LayoutMain>
    <HeaderA></HeaderA>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { HeaderA } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      HeaderA,
      LayoutMain,
    },
  });
</script>
