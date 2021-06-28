<template>
  <section class="container mx-auto">
    <LhButton></LhButton>
  </section>
</template>
<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { Lhbutton } from '@/components/Button/index';

  export default defineComponent({
    components: {
      Lhbutton,
    },
    setup() {},
  });
</script>
