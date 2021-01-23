<template>
  <div class="container mx-auto">
    <div class="box-border border-1 h-32 w-32 p-40 bg-teal-500 shadow-xl hover:shadow-2xl"> </div>
    <hr class="my-6" />
    <!-- <button class="bg-blue-900 text-white rounded-md select-none px-4 py-2 focus:outline-none"
      >Default Button</button
    >
    <button
      class="bg-blue-900 text-white rounded-md select-none px-4 py-2 focus:outline-none hover:bg-opacity-75"
      >Hover Button</button
    >
    <button
      class="transition duration-500 ease-in-out transform hover:-translate-y-1 bg-blue-900 text-white rounded-md select-none px-4 py-2 focus:outline-none"
      >Transition Button</button
    >
    <button
      class="bg-gradient-to-bl from-green-400 via-blue-500 to-purple-400 text-white rounded-md select-none px-4 py-2 focus:outline-none"
      >Linear gradients Button</button
    >
-->
    <LhButton color="text-yellow-200" bg-color="bg-blue-900" transform></LhButton>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { LhButton } from '@/components/Button/index';
  export default defineComponent({
    components: {
      LhButton,
    },
  });
</script>

<style></style>
