<template>
  <LayoutMain>
    <div>主页</div>
  </LayoutMain>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { LayoutMain } from '@/components/Layouts/index';
  export default defineComponent({
    components: {
      LayoutMain,
    },
  });
</script>
