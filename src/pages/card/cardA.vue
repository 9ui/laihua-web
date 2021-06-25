<template>
  <LayoutMain>
    <CardA></CardA>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { CardA } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      CardA,
      LayoutMain,
    },
  });
</script>
