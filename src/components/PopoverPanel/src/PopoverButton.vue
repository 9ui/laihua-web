<template>
  <div class="relative" @mouseleave="visible = false" @mouseenter="visible = true">
    <slot></slot>
    <PopoverPanel
      :with="panelWidth"
      :height="panelHeight"
      :center="panelCenter"
      :offset-left="offsetLeft"
      :offset-right="offsetRight"
      :visible="visible"
      @close="visible = false"
    >
      <slot name="panel"></slot>
    </PopoverPanel>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@vue/composition-api';
  import { PopoverPanel } from '@/components/PopoverPanel/index';
  export default defineComponent({
    components: {
      PopoverPanel,
    },
    props: {
      panelWidth: {
        type: Number,
        default: 10,
      },
      panelHeight: {
        type: Number,
        default: 10,
      },
      offsetLeft: {
        type: Number,
        default: 0,
      },
      offsetRight: {
        type: Number,
        default: 0,
      },
      panelCenter: {
        type: Boolean,
        default: false,
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

<style></style>
