<template>
  <section class="container mx-auto">
    <!-- button -->
    <button
      type="button"
      class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
      :class="`bg-${currentTheme}-500`"
      @click="visible = true"
    >
      Open Dialog
    </button>
    <!-- Modals -->
    <LhModal v-model="visible" :hover="false"></LhModal>
    <!-- Headers -->
  </section>
</template>
<script lang="ts">
  import { mapState } from 'vuex';
  import { defineComponent, ref } from '@vue/composition-api';
  import { LhModal } from '@/components/Modal/index';

  export default defineComponent({
    components: {
      LhModal,
    },
    computed: {
      ...mapState('common', ['currentTheme']),
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
      };
    },
  });
</script>
