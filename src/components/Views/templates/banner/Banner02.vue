<template>
  <div class="mx-auto">
    <div class="flex flex-col items-center mx-auto w-full contanier">
      <div class="relative">
        <img
          src="https://cdn2.laihua.com/dev-dist/static/img/banner.c576595.png"
          class="w-full h-150"
        />
        <div class="absolute top-48 left-20 w-145">
          <h1 class="text-4xl font-bold text-gray-600"
            >用 <span class="text-blue-700">视频简历</span> 讲好您的企业故事
          </h1>
          <p class="py-12 leading-9 text-justify text-gray-600"
            >企业宣传不再受制于成本高昂的TVC广告、静态无声的图文，使用来画视频，用动画视频形式讲述品牌故事，通过这样简单易懂的信息展现方式以及生动的视觉效果，赢得受众对企业的认同。</p
          >
          <button
            class="w-40 px-10 py-3 font-bold text-white bg-blue-700 rounded-full focus:outline-none hover:bg-blue-800"
            >开始创作</button
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { defineComponent, ref } from '@vue/composition-api';
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
