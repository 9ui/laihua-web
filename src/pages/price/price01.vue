<template>
  <LayoutMain>
    <Price01></Price01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Price01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Price01,
      LayoutMain,
    },
  });
</script>
