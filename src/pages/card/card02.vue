<template>
  <LayoutMain>
    <Card02></Card02>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Card02 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Card02,
      LayoutMain,
    },
  });
</script>
