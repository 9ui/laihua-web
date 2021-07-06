<template>
  <div
    class="mx-auto w-full h-135 bg-cover bg-no-repeat"
    style="
      background-image: url('https://cdn2.laihua.com/tmp-dist/static/img/banner-bg.06ab844.jpg');
    "
  >
    <div class="flex justify-between w-300 mx-auto pt-36">
      <div class="flex flex-col pt-12">
        <h1 class="text-5xl font-bold text-gray-600"
          >视频简历<span class="text-purple-800">面对面</span>的仪式感
        </h1>
        <p class="py-12 leading-9 text-xl text-justify text-gray-600"
          >一秒吸引面试官眼球<br />让简历变得更酷炫</p
        >
        <button class="btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
          马上体验</button
        >
      </div>
      <video
        autoplay
        loop
        muted
        class="h-2/3 w-1/2"
        src="https://resources-yp.laihua.com/2021-4-14/34951382-0888-4da3-941b-0beffdecb117.mp4"
      ></video>
    </div>
  </div>
</template>
<script>
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    setup() {
      //   const style = ref(
      //     "background:url('https://cdn2.laihua.com/dev-dist/static/img/banner.c576595.png');width:100%;heigh:auto"
      //   );
      return {
        // style,
      };
    },
  });
</script>

<style lang="postcss" scoped>
  .btn {
    @apply flex flex-row items-center w-44  box-border  px-10 py-3 font-bold text-white bg-purple-700 rounded-full focus:outline-none hover:bg-purple-800;
  }
</style>
