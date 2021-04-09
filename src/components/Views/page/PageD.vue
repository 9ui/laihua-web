<template>
  <div class="mx-auto">
    <div class="w-full text-white h-96" :style="style">
      <div class="flex flex-col items-center max-w-screen-xl mx-auto contanier">
        <h1 class="mt-16 text-5xl font-bold">行业解决方案</h1>
        <p class="mt-12 text-3xl">视频创作为各行各业赋能，100W+ 企业和政府组织的共同选择</p>
        <ul class="flex justify-between w-full mt-24">
          <li
            class="flex flex-col items-center justify-center w-48 h-48 bg-white rounded-sm shadow-md cursor-pointer hover:shadow-xl group"
          >
            <div class="w-20 h-20 bg-gray-200 rounded-full group-hover:bg-blue-500"></div>
            <p class="mt-3 text-base text-gray-700 group-hover:text-blue-500">教育培训</p>
          </li>
          <li
            class="flex flex-col items-center justify-center w-48 h-48 bg-white rounded-sm shadow-md cursor-pointer hover:shadow-xl group"
          >
            <div class="w-20 h-20 bg-gray-200 rounded-full group-hover:bg-blue-500"></div>
            <p class="mt-3 text-base text-gray-700 group-hover:text-blue-500">媒体宣传</p>
          </li>
          <li
            class="flex flex-col items-center justify-center w-48 h-48 bg-white rounded-sm shadow-md cursor-pointer hover:shadow-xl group"
          >
            <div class="w-20 h-20 bg-gray-200 rounded-full group-hover:bg-blue-500"></div>
            <p class="mt-3 text-base text-gray-700 group-hover:text-blue-500">金融财经</p>
          </li>
          <li
            class="flex flex-col items-center justify-center w-48 h-48 bg-white rounded-sm shadow-md cursor-pointer hover:shadow-xl group"
          >
            <div class="w-20 h-20 bg-gray-200 rounded-full group-hover:bg-blue-500"></div>
            <p class="mt-3 text-base text-gray-700 group-hover:text-blue-500">健康医疗</p>
          </li>
          <li
            class="flex flex-col items-center justify-center w-48 h-48 bg-white rounded-sm shadow-md cursor-pointer hover:shadow-xl group"
          >
            <div class="w-20 h-20 bg-gray-200 rounded-full group-hover:bg-blue-500"></div>
            <p class="mt-3 text-base text-gray-700 group-hover:text-blue-500">互联网</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="flex flex-wrap justify-between w-full max-w-screen-xl mx-auto mt-48 -m-4 contanier">
      <div v-for="i in 6" :key="i" class="w-1/3 p-4 cursor-pointer">
        <div
          class="flex flex-col items-center justify-between p-10 border border-gray-200 rounded-lg hover:shadow-lg"
        >
          <img
            class="w-auto h-16"
            src="https://resources.laihua.com/2021-1-29/585eb842-068a-4da0-adc6-d501273b67e1.png"
          />

          <p class="mt-4 text-sm leading-relaxed text-gray-800"
            >朵木，一个位资深国学爱好者的全职妈妈。为了更好普及《论语》、《中庸》、《大学》等经典古籍中的哲理，她创建了朵木工作室，旨在将更多优质内容传递给家长和孩子们听。</p
          >
          <button
            class="px-6 py-2 mt-20 text-sm text-gray-500 bg-white border border-gray-300 border-solid rounded-full focus:outline-none hover:bg-blue-500 hover:text-white"
          >
            查看案例
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from '@vue/composition-api';

  export default defineComponent({
    setup() {
      const style = ref(
        "background:url('https://cdn2.laihua.com/tmp-dist/static/img/solution-bg.d83b7b6.png')"
      );
      return {
        style,
      };
    },
  });
</script>
