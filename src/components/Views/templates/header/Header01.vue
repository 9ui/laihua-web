<template>
  <header class="text-gray-600 body-font bg-black">
    <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
      <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
          class="w-30 h-5 cursor-pointer"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPAAAAAwCAMAAAAYYwcUAAACo1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+Hen5WAAAA4HRSTlMAAQIDBAUGBwgJCgsMDQ4PEBESExQVFhcYGRobHB0eHyEiIyQmJygpKistLi8wMTIzNDU3ODo7PD0+P0BBQkNERUZHSEpLTE1OT1BRUlNUVVZXWFlaW11fYWNkZmdoaWtsbXByc3R1dnd4eXp8fX5/gIGCg4WGh4mKi4yNjo+QkZKTlJWWmJmam5yen6Cio6Slpqeoqqusra6vsLGytLW3uLm6u72+v8DBwsPE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"
          alt=""
        />
      </a>
      <nav
        class="md:mr-auto md:ml-10 md:py-1 md:pl-4 flex flex-wrap items-center text-base justify-center dark:text-white"
      >
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">工作台</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">产品</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">发现</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">解决方案</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">会员定价</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">大赛</a>
        <a class="mr-10 hover:text-white cursor-pointer text-gray-300 text-sm">视频学院</a>
      </nav>
      <div class="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
        <button
          class="inline-flex items-center bg-gray-100 border-0 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded-3xl text-base mt-4 md:mt-0"
          >登录/注册
        </button>
      </div>
    </div>
  </header>
</template>
