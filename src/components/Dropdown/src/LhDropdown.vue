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
        <span>components</span>
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
        class="origin-top-right absolute right-10 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
        @mouseleave="visible = false"
      >
        <div class="py-1">
          <a href="/demo3" class="block px-4 py-2 text-sm text-gray-700" role="menuitem">button</a>
          <a href="/pricing" class="block px-4 py-2 text-sm text-gray-700" role="menuitem"
            >dropdown</a
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
