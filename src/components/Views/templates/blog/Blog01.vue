<template>
  <section class="text-gray-600 body-font">
    <div class="py-14 mx-auto">
      <div class="flex flex-wrap mx-4">
        <div
          v-for="i in 12"
          :key="i"
          class="p-4 cursor-pointer sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 2xl:w-1/6 max-w-3xl"
        >
          <div
            class="h-full overflow-hidden rounded-lg border-opacity-60 shadow-md hover:shadow-lg"
          >
            <img
              class="object-cover object-center w-full lg:h-36 md:h-32"
              src="https://resources.laihua.com/2020-8-28/14d5ee50-7e55-4085-b3cd-705064fcd8b5.png"
              alt="blog"
            />
            <div class="p-3">
              <h2 class="mb-3 font-medium text-gray-600 title-font"
                >如何开发炫酷有趣又有料的微课？</h2
              >
              <p class="mb-3 leading-relaxed text-sm text-gray-400"
                >高高 | 来画倾力打造短视频创作营销教育平台</p
              >
              <div class="flex flex-wrap items-center">
                <p class="inline-flex items-center text-gray-400 text-xs md:mb-2 lg:mb-0"
                  >已有1.6万人看过</p
                >
                <s
                  class="
                    inline-flex
                    items-center
                    py-1
                    pr-3
                    ml-auto
                    mr-3
                    text-xs
                    leading-none
                    text-gray-400
                    border-r border-gray-200
                    lg:ml-auto
                    md:ml-0
                  "
                  >￥199.00</s
                >
                <span class="inline-flex items-center text-xs font-bold leading-none text-red-500"
                  >免费</span
                >
              </div>
              <div class="flex mt-3 space-x-3">
                <p class="p-1 text-xs text-gray-400 bg-gray-100 rounded-sm">线上教育</p>
                <p class="p-1 text-xs text-gray-400 bg-gray-100 rounded-sm">微课开发</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
