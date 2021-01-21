<template>
  <div class="container mx-auto">
    <div class="box-border border-1 h-32 w-32 p-40 bg-teal-500 shadow-xl hover:shadow-2xl"> </div>
    <hr class="my-6" />
    <button class="bg-blue-900 text-white rounded-md select-none px-4 py-2 focus:outline-none"
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
    <button
      class="transition duration-500 ease-in-out px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-opacity-75 transform hover:-translate-y-1"
    >
      Hover me
    </button>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
