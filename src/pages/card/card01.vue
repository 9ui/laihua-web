<template>
  <LayoutMain>
    <Card01></Card01>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Card01 } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      Card01,
      LayoutMain,
    },
  });
</script>
