<template>
  <transition
    enter-active-class="transition duration-100 ease-out"
    enter-to-class="scale-100 opacity-100"
    enter-from-class="scale-95 opacity-0"
    leave-active-class="transition duration-75 ease-in"
    leave-to-class="scale-95 opacity-0"
    leave-from-class="scale-100 opacity-100"
  >
    <div
      v-if="visible"
      @blur="close"
      class="panel"
      :style="style"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <slot></slot>
    </div>
  </transition>
</template>

<script lang="ts">
  import { computed, defineComponent } from '@vue/composition-api';
  export default defineComponent({
    props: {
      with: {
        type: Number,
        default: 10,
      },
      height: {
        type: Number,
        default: 10,
      },
      center: {
        type: Boolean,
        default: false,
      },
      offsetRight: {
        type: Number,
        default: 0,
      },
      offsetLeft: {
        type: Number,
        default: 0,
      },
      visible: {
        type: Boolean,
        default: true,
      },
    },
    setup(props, { emit }) {
      let style = computed(() => {
        const width = props.with,
          height = props.height,
          offsetRight = props.offsetRight,
          offsetLeft = props.offsetLeft;
        let left = props.center ? 0 - width / 2 : 0;
        if (offsetRight) {
          left = left + offsetRight;
        }
        if (offsetLeft) {
          left = left - offsetLeft;
        }

        const bottom = 0 - height;
        return `bottom:${bottom}px;left:${left}px;width:${width}px;height:${height}px`;
      });
      let close = () => {
        emit('close');
      };
      return {
        style,
        close,
      };
    },
  });
</script>

<style lang="postcss" scoped>
  .panel {
    @apply absolute origin-top-right bg-white divide-y divide-gray-100
   rounded-md shadow-lg ring-1 ring-black ring-opacity-5;
  }
</style>
