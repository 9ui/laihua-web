<template>
  <header class="text-blue-600 bg-black body-font">
    <div class="container flex flex-col flex-wrap items-center mx-auto md:flex-row">
      <a class="flex items-center mb-4 font-medium text-gray-900 title-font md:mb-0">
        <img
          class="h-5 cursor-pointer w-30"
          src="https://cdn2.laihua.com/dev-dist/static/img/logo-light.9244d18.png"
        />
      </a>
      <!-- nav start -->
      <nav
        class="flex flex-wrap items-center justify-center text-base md:mr-auto md:ml-10 md:pl-4 dark:text-white"
      >
        <!-- menu-item product start -->
        <PopoverButton
          class="nav-item group"
          :panel-height="228"
          :panel-width="620"
          :panel-center="true"
          :offset-right="100"
        >
          <span class="nav-text">产品</span>
          <div slot="panel" class="flex p-5">
            <div class="w-1/3 p-2 mr-4">
              <video
                class="w-full h-70 rounded-md"
                autoplay
                loop
                muted
                src="https://resources.laihua.com/2021-1-16/c2c2a6ca-351d-4476-9a5c-fce422943cf2.mp4"
              ></video>
              <h4 class="text-gray-900 my-2">来画视频</h4>
              <p class="text-xs text-gray-600">实时互动的视频演示</p>
            </div>
            <div class="w-1/3 p-2">
              <video
                class="w-full h-70 rounded-md"
                autoplay
                loop
                muted
                src="https://resources.laihua.com/2021-1-30/f32766da-4c8a-42aa-af17-f5e955b39588.mp4"
              ></video>
              <h4 class="text-gray-900 my-2">来画动画</h4>
              <p class="text-xs text-gray-600">零门槛创作动画视频</p>
            </div>
            <div class="flex flex-col justify-start space-y-3 ml-6 mt-4">
              <div class="text-gray-900 font-bold text-md mt-3">更多产品</div>
              <div class="text-md text-gray-600">视频编辑工具</div>
              <div class="text-md text-gray-600">视频短信营销</div>
            </div>
          </div>
        </PopoverButton>
        <!-- menu-item product end -->

        <!-- menu-item price start -->
        <PopoverButton
          class="nav-item group"
          :panel-height="90"
          :panel-width="90"
          :offset-left="20"
        >
          <span class="nav-text">定价</span>
          <div slot="panel">
            <div class="py-1 mt-1">
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >企业会员</a
              >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                >个人会员</a
              >
            </div>
          </div>
        </PopoverButton>
        <!-- menu-item price end -->

        <div class="nav-item">发现</div>
        <div class="nav-item">解决方案</div>
        <div class="nav-item">会员定价</div>
        <div class="nav-item">大赛</div>
        <div class="nav-item">视频学院</div>
      </nav>
      <!-- nav end -->
      <div class="inline-flex ml-5 lg:justify-end lg:ml-0">
        <button
          class="inline-flex items-center px-5 py-2 mt-4 text-base bg-gray-100 border-0 focus:outline-none hover:bg-gray-200 rounded-3xl md:mt-0"
          >登录/注册
        </button>
      </div>
    </div>
  </header>
</template>
<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import { PopoverButton } from '@/components/PopoverPanel/index';
  export default defineComponent({
    components: {
      PopoverButton,
    },
    setup() {},
  });
</script>

<style lang="postcss" scoped>
  .nav-item {
    @apply flex flex-col items-center justify-center h-20 w-14 mx-4 text-sm text-gray-300 cursor-pointer;
  }
</style>
