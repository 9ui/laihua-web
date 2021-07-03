<template>
  <div class="w-56 min-w-0 bg-white rounded-lg shadow-lg">
    <ul class="p-2 space-y-1">
      <li class="relative">
        <button
          class="flex items-center min-w-full px-2 py-1 border border-transparent rounded sm:border-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
          :class="{ 'bg-gray-200': open1, 'rounded-b-none': open1, 'border-gray-300': open1 }"
          @click="open1 = true"
        >
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            ></path>
          </svg>
          <span>分享</span>
          <svg
            class="w-4 h-4 ml-auto sm:hidden"
            :class="{ 'transform rotate-180': open1 }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <svg
            class="hidden w-4 h-4 ml-auto sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <ul
          class="absolute left-0 z-10 w-full opacity-0 p-2 space-y-1 bg-white border border-t-0 rounded-t-none rounded-b-lg shadow-lg sm:w-48 sm:-mt-2 sm:ml-4 sm:top-0 sm:left-full sm:border-0 sm:rounded-lg"
          v-show="open1"
          @click="open1 = false"
        >
          <li>
            <a href="#" class="block px-2 py-1 rounded hover:bg-gray-200">Facebook</a>
          </li>
          <li>
            <a href="#" class="block px-2 py-1 rounded hover:bg-gray-200">Twitter</a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            ></path>
          </svg>
          <span>重命名</span>
        </a>
      </li>
    </ul>
    <hr class="border-gray-400" />
    <ul class="p-2 space-y-1">
      <li class="relative">
        <button
          class="flex items-center min-w-full px-2 py-1 border border-transparent rounded sm:border-none hover:bg-gray-200 focus:bg-gray-200 focus:outline-none"
          :class="{ 'bg-gray-200': open, 'rounded-b-none': open, 'border-gray-300': open }"
          @click="open = true"
        >
          <div class="w-4 h-4 mr-3 bg-white border-2 border-gray-400 rounded-full"></div>
          <span>无状态</span>
          <svg
            class="w-4 h-4 ml-auto sm:hidden"
            :class="{ 'transform rotate-180': open }"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
          <svg
            class="hidden w-4 h-4 ml-auto sm:block"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>
        <ul
          class="absolute left-0 z-10 w-full p-2 space-y-1 bg-white border border-t-0 rounded-t-none rounded-b-lg shadow-lg sm:w-48 sm:-mt-2 sm:ml-4 sm:top-0 sm:left-full sm:border-0 sm:rounded-lg"
          v-show="open"
          @click="open = false"
        >
          <li>
            <a href="#" class="flex items-center px-2 py-1 rounded group hover:bg-gray-200">
              <div class="flex items-center justify-center w-4 h-4 mr-3">
                <div
                  class="w-4 h-4 duration-200 ease-in-out bg-white border-2 border-orange-400 rounded-full transition-border-width group-hover:w-3 group-hover:h-3 group-hover:border-6"
                ></div>
              </div>
              <span>审核</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-2 py-1 rounded group hover:bg-gray-200">
              <div class="flex items-center justify-center w-4 h-4 mr-3">
                <div
                  class="w-4 h-4 duration-200 ease-in-out bg-white border-2 border-blue-400 rounded-full transition-border-width group-hover:w-3 group-hover:h-3 group-hover:border-6"
                ></div>
              </div>
              <span>进行中</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-2 py-1 rounded group hover:bg-gray-200">
              <div class="flex items-center justify-center w-4 h-4 mr-3">
                <div
                  class="w-4 h-4 duration-200 ease-in-out bg-white border-2 border-green-400 rounded-full transition-border-width group-hover:w-3 group-hover:h-3 group-hover:border-6"
                ></div>
              </div>
              <span>已审核</span>
            </a>
          </li>
          <li>
            <a href="#" class="flex items-center px-2 py-1 rounded group hover:bg-gray-200">
              <div class="flex items-center justify-center w-4 h-4 mr-3">
                <div
                  class="w-4 h-4 duration-200 ease-in-out bg-white border-2 border-gray-400 rounded-full transition-border-width group-hover:w-3 group-hover:h-3 group-hover:border-6"
                ></div>
              </div>
              <span>无状态</span>
            </a>
          </li>
        </ul>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            ></path>
          </svg>
          <span>复制链接</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
            ></path>
          </svg>
          <span>移动到</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            ></path>
          </svg>
          <span>复制到</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            ></path>
          </svg>
          <span>锁定</span>
        </a>
      </li>
      <li>
        <a href="#" class="flex items-center px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
            ></path>
          </svg>
          <span>下载</span>
        </a>
      </li>
    </ul>
    <hr class="border-gray-400" />
    <ul class="p-2 space-y-1">
      <li>
        <button class="flex items-center min-w-full px-2 py-1 rounded hover:bg-gray-200">
          <svg
            class="w-4 h-4 mr-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            ></path>
          </svg>
          <span>删除</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        open1: false,
        open: false,
      };
    },
  };
</script>
