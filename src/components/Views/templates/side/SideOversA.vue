<template>
  <div class="container">
    <button
      type="button"
      class="inline-flex justify-center w-full px-4 py-2 mt-10 text-base font-medium text-white border border-transparent rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
      :class="`bg-${currentTheme}-500 hover:bg-${currentTheme}-700 focus:ring-${currentTheme}-500`"
      @click="isOpen = true"
    >
      Open Dialog
    </button>
    <transition :duration="700">
      <div class="fixed inset-0 overflow-hidden" v-show="isOpen">
        <div class="absolute inset-0 overflow-hidden">
          <!-- Background overlay, show/hide based on slide-over state. -->
          <transition
            enter-active-class="duration-700 ease-in-out "
            enter-to-class="opacity-100"
            enter-from-class="opacity-0"
            leave-active-class="duration-700 ease-in-out "
            leave-to-class="opacity-0"
            leave-from-class="opacity-100"
          >
            <div
              v-show="isOpen"
              @click="closePanel"
              class="absolute inset-0 transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>
          </transition>

          <div class="absolute inset-y-0 right-0 flex max-w-full pl-10">
            <!-- Slide-over panel, show/hide based on slide-over state -->
            <transition
              enter-active-class="transition duration-500 ease-in-out transform sm:duration-700"
              enter-to-class="translate-x-0"
              enter-from-class="translate-x-full"
              leave-active-class="transition duration-500 ease-in-out transform sm:duration-700"
              leave-to-class="translate-x-full"
              leave-from-class="translate-x-0"
            >
              <div class="relative w-screen max-w-md" v-show="isOpen">
                <!-- Close button, show/hide based on slide-over state  -->
                <transition
                  enter-active-class="duration-500 ease-in-out"
                  enter-to-class="opacity-100"
                  enter-from-class="opacity-0"
                  leave-active-class="duration-500 ease-in-out"
                  leave-to-class="topacity-0"
                  leave-from-class="opacity-100"
                >
                  <div
                    class="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4"
                    v-show="isOpen"
                  >
                    <button
                      class="text-gray-300 rounded-md hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                      @click="closePanel"
                    >
                      <span class="sr-only">Close panel</span>
                      <!-- Heroicon name: outline/x -->
                      <svg
                        class="w-6 h-6"
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
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </transition>
                <div class="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl">
                  <div class="px-4 sm:px-6">
                    <h2 class="text-lg font-medium text-gray-900" id="slide-over-title">
                      Panel title
                    </h2>
                  </div>
                  <div class="relative flex-1 px-4 mt-6 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div
                        class="h-full border-2 border-gray-200 border-dashed"
                        aria-hidden="true"
                      ></div>
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import { mapState } from 'vuex';
  export default defineComponent({
    computed: {
      ...mapState('common', ['currentTheme']),
    },
    setup() {
      const isOpen = ref(false);
      // 关闭面板
      const closePanel = () => {
        isOpen.value = false;
      };
      return {
        isOpen,
        closePanel,
      };
    },
  });
</script>
