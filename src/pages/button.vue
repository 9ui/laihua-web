<template>
  <div class="container mx-auto my-6">
    <LhButton color="text-yellow-200" bg-color="bg-blue-900" transform></LhButton>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { LhButton } from '@/components/Button/index';
  import { LhDropdown } from '@/components/Dropdown/index';
  export default defineComponent({
    components: {
      LhButton,
      LhDropdown,
    },
    data() {
      return {
        menus: [
          { label: '按钮1', path: '/demo3' },
          { label: '按钮2', path: '/demo4' },
          { label: '按钮3', path: '/demo3' },
          { label: '按钮4', path: '/demo4' },
        ],
      };
    },
  });
</script>

<style></style>
