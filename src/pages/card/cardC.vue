<template>
  <LayoutMain>
    <CardC></CardC>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { CardC } from '@/components/Views/index';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      CardC,
      LayoutMain,
    },
  });
</script>
