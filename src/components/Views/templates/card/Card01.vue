<template>
  <div class="flex flex-col lg:w-1/3 md:w-1/2 xl:w-1/4 2xl:w-1/5 p-5">
    <div
      class="relative cursor-pointer group"
      @mouseenter="showVideo = true"
      @mouseleave="showVideo = false"
    >
      <img
        v-if="!showVideo"
        class="rounded-md"
        src="https://resources.laihua.com/2021-6-27/fdf198c0-d6ac-11eb-98f2-9b61c6395201.png"
      />
      <video
        v-else
        class="rounded-md"
        muted
        autoplay
        loop
        src="https://resources.laihua.com/2021-6-14/1c1c6995-ac85-48a9-aaf6-cd7f87379d44nail.mp4"
      ></video>
      <div
        class="
          absolute
          top-2
          right-2
          p-1
          bg-gray-700
          opacity-0
          rounded-sm
          group-hover:opacity-90
          hover:bg-blue-600
        "
      >
        <svg aria-hidden="true" class="w-4 h-4">
          <use data-v-5651378e="" xlink:href="#icon-wb-unlike">
            <svg id="icon-wb-unlike" viewBox="0 0 1224 1024">
              <path
                d="M687.880001 989.903231l-11.6428 9.147913a93.974023 93.974023 0 0
                                1-137.218706-15.800942v4.158143l-441.594745-424.130546a325.998381 325.998381 0 0 1
                                0-464.880344 332.651409 332.651409 0 0 1 472.365001 0l41.581426
                                41.581426 42.413054-41.581426a332.651409 332.651409 0 0 1 472.365001 0
                                325.998381 325.998381 0 0 1 0 464.880344z"
                fill="#FFFFFF"
              ></path>
            </svg>
          </use>
        </svg>
      </div>
      <div
        class="
          absolute
          top-2
          right-10
          px-2
          py-1
          text-xs
          rounded-sm
          text-white
          bg-gray-700
          opacity-0
          group-hover:opacity-90
          hover:bg-blue-600
        "
        >使用</div
      >
      <div
        class="
          absolute
          bottom-2
          right-2
          z-10
          bg-gray-700
          opacity-90
          text-white text-xs
          p-1
          rounded-md
          group-hover:opacity-0
        "
        >01:24</div
      >
      <div class="absolute bottom-2 right-2 w-8 h-8">
        <img
          class="border-2 border-gray-300 rounded-full opacity-0 group-hover:opacity-100"
          src="https://thirdqq.qlogo.cn/g?b=oidb&k=qD9BoKsMy7khbzaJtaQUIg&s=100&t=1557351189"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="text-sm text-gray-900 mt-2">中银票e贴在线app理财动画模版</div>
    <div class="flex flex-row justify-between items-center mt-1">
      <div class="text-gray-600 text-sm">企业会员免费</div>
      <div class="h-4 px-2 text-xs rounded-md text-yellow-500 bg-black text-center">商</div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        showVideo: false,
      };
    },
  };
</script>
