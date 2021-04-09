<template>
  <section class="container mx-auto">
    <!-- button -->
    <button
      type="button"
      class="inline-flex justify-center w-full px-4 py-2 mt-10 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
      :class="`bg-${currentTheme}-500`"
      @click="visible = true"
    >
      Open sideOvers
    </button>
    <!-- Modals -->
    <LhSideOvers v-model="visible" :hover="false"></LhSideOvers>
    <!-- Headers -->
  </section>
</template>
<script lang="ts">
  import { mapState } from 'vuex';
  import { defineComponent, ref } from '@vue/composition-api';
  import { LhSideOvers } from '@/components/SideOvers/index';

  export default defineComponent({
    components: {
      LhSideOvers,
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
