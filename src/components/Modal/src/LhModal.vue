<template>
  <transition
    enter-active-class="duration-300 ease-out"
    enter-to-class="opacity-100"
    enter-from-class="opacity-0"
    leave-active-class="duration-200 ease-in"
    leave-to-class="opacity-0"
    leave-from-class="opacity-100"
  >
    <div v-if="visible" class="fixed inset-0 z-10 overflow-y-auto">
      <div
        class="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0"
      >
        <div class="fixed inset-0 transition-opacity" aria-hidden="true">
          <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true"
          >&#8203;</span
        >
        <transition
          enter-active-class="duration-300 ease-out"
          enter-to-class="translate-y-0 opacity-100 sm:scale-100"
          enter-from-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          leave-active-class="duration-200 ease-in"
          leave-to-class="translate-y-4 opacity-0 sm:translate-y-0 sm:scale-95"
          leave-from-class="translate-y-0 opacity-100 sm:scale-100"
        >
          <div
            class="inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div class="px-4 pt-5 pb-4 bg-white sm:p-6 sm:pb-4">
              <div class="sm:flex sm:items-start">
                <div
                  class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
                >
                  <svg
                    class="w-6 h-6 text-red-600"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                  <h3 id="modal-headline" class="text-lg font-medium leading-6 text-gray-900">
                    停用帐户
                  </h3>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      您确定要停用帐户吗？您的所有数据将被永久删除。此操作无法撤消
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm"
                @click="visible = false"
              >
                关闭
              </button>
              <button
                type="button"
                class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                @click="visible = false"
              >
                取消
              </button>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import { modalProps } from './modalProps';
  export default defineComponent({
    props: modalProps,
    watch: {
      value(val) {
        this.visible = val;
      },
      visible(val) {
        this.$emit('input', val);
      },
    },
    setup() {
      const visible = ref(false);
      return {
        visible,
      };
    },
  });
</script>
