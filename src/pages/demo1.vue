<template>
  <div>
    <!-- blok---1 -->
    <div class="border border-light-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="flex space-x-4 animate-pulse">
        <div class="rounded-full bg-blue-500 h-12 w-12"></div>
        <div class="flex-1 space-y-4 py-1">
          <div class="h-4 bg-blue-400 rounded w-3/4"></div>
          <div class="space-y-2">
            <div class="h-4 bg-blue-400 rounded"></div>
            <div class="h-4 bg-blue-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- blok---2 -->
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4 m-20"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="/favicon.ico" alt="ChitChat Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style></style>
