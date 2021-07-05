<template>
  <LayoutMain>
    <div class="min-h-screen max-w-full p-10 flex flex-wrap">
      <Card01 v-for="i in 10" :key="i"></Card01>
    </div>
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
