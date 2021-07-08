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
        class="
          flex flex-wrap
          items-center
          justify-center
          text-base
          md:mr-auto md:ml-10 md:pl-4
          dark:text-white
        "
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
              <!-- icon start -->
              <div class="flex mt-2 space-x-2">
                <div
                  class="icon-wrapper"
                  @mouseenter="visible = true"
                  @mouseleave="visible = false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0
                      00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span v-if="visible" class="text-xs text-indigo-600 ml-1">桌面端下载</span>
                </div>
                <div
                  class="icon-wrapper"
                  @mouseenter="visible1 = true"
                  @mouseleave="visible1 = false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span v-if="visible1" class="text-xs text-indigo-600">手机端下载</span>
                </div>
              </div>
              <!-- icon end -->
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
              <div class="flex mt-2 space-x-2">
                <div
                  class="icon-wrapper"
                  @mouseenter="visible2 = true"
                  @mouseleave="visible2 = false"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-icon"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                  <span v-if="visible2" class="text-xs text-indigo-600">手机端下载</span>
                </div>
              </div>
            </div>
            <div class="flex flex-col justify-start space-y-3 ml-6 mt-4">
              <div class="text-gray-900 font-bold text-md mt-3">更多产品</div>
              <div class="link-text">视频编辑工具</div>
              <div class="link-text">视频短信营销</div>
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
          class="
            inline-flex
            items-center
            px-5
            py-2
            mt-4
            text-base
            bg-gray-100
            border-0
            focus:outline-none
            hover:bg-gray-200
            rounded-3xl
            md:mt-0
          "
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
    setup() {
      const visible = ref(false);
      const visible1 = ref(false);
      const visible2 = ref(false);
      return {
        visible,
        visible1,
        visible2,
      };
    },
  });
</script>

<style lang="postcss" scoped>
  .nav-item {
    @apply flex flex-col items-center justify-center h-20 w-14 mx-4 text-sm text-gray-300 cursor-pointer;
  }

  .icon-wrapper {
    @apply flex items-center group border bg-gray-100 rounded-full px-2 py-1 cursor-pointer hover:border-indigo-500;
  }

  .h-icon {
    @apply h-5 w-5 text-gray-500 group-hover:text-indigo-500;
  }

  .link-text {
    @apply text-sm text-gray-600 cursor-pointer hover:text-indigo-600 hover:underline;
  }
</style>
