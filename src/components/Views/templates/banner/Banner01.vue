<template>
  <div class="mx-auto">
    <div class="flex flex-col items-center justify-center overflow-x-hidden w-full">
      <div class="relative">
        <img
          src="https://cdn2.laihua.com/tmp-dist/static/img/banner.c47795a.png"
          class="w-480 h-150 max-w-max"
        />
        <div class="absolute top-44 inset-1/4">
          <h1 class="text-6xl font-bold text-gray-600"> 像做PPT一样做动画 </h1>
          <p class="py-12 text-4xl leading-9 text-justify text-gray-600">像PPT一样做动画</p>
          <div class="">
            <button class="btn"> iOS/Android </button>
            <button class="btn ml-4"> 了解电脑版 </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
  .btn {
    @apply px-10 py-3 cursor-pointer font-bold text-yellow-600 border-yellow-600 border-2
    bg-white rounded-full focus:outline-none hover:text-yellow-500 hover:border-yellow-500;
  }
</style>
