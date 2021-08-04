<template>
  <div class="switch-button" :class="customClass">
    <div class="button-wrapper" :class="[active === 0 ? 'active' : '']" @click="$emit('change', 0)">
      {{ activeText }}
    </div>
    <div class="button-wrapper" :class="[active === 1 ? 'active' : '']" @click="$emit('change', 1)">
      {{ inactiveText }}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'SwitchButton',
    props: {
      active: {
        type: Number,
        default: 0,
      },
      customClass: {
        type: String,
        default: 'w-60 h-10 ',
      },
      activeText: {
        type: String,
        default: '按钮1',
      },
      inactiveText: {
        type: String,
        default: '按钮2',
      },
    },
  };
</script>
<style lang="postcss" scoped>
  .switch-button {
    @apply flex bg-white rounded-full shadow-lg items-center border border-blue-500 box-border;
  }

  .button-wrapper {
    @apply flex  items-center  justify-center bg-white rounded-full flex-1 h-full z-10 text-lg text-blue-500 cursor-pointer;
  }

  .button-wrapper.active {
    @apply h-10 bg-blue-500 text-white;
  }
</style>
