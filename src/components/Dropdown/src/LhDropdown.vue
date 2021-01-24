<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="relative inline-block text-left px-6">
    <div>
      <button
        type="button"
        class="group rounded-md text-white inline-flex items-center text-base font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        @click="visible = true"
        @blur="visible = false"
        @mouseenter="visible = true"
      >
        <span>Solutions</span>
        <!-- <svg
          class="ml-2 h-5 w-5 text-gray-400 group-hover:text-gray-500"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg> -->
      </button>
    </div>
    <transition
      enter-active-class="transition ease-out duration-100"
      enter-to-class="opacity-100 scale-100"
      enter-from-class="opacity-0 scale-95"
      leave-active-class="transition ease-in duration-75"
      leave-to-class="opacity-0 scale-95"
      leave-from-class="opacity-100 scale-100"
    >
      <div
        v-show="visible"
        class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        @mouseleave="visible = false"
      >
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Edit</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Duplicate</a
          >
        </div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Edit</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Duplicate</a
          >
        </div>
        <div class="py-1">
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Edit</a
          >
          <a
            href="#"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
            >Duplicate</a
          >
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    data() {
      return {
        visible: false,
      };
    },
    methods: {
      blur() {
        console.log('被执行了');
      },
    },
  });
</script>

<style></style>
