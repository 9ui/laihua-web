<template>
  <div class="lh-collapse-item" :class="{ 'lh-collapse-item-active': isActive }">
    <div class="lh-collapse-item-header" @click="toggle">
      <span class=""></span>
      <i class="lh-collapse-item-expand h-icon-right"></i>
      <slot name="title">{{ title }}</slot>
    </div>
    <CollapseTransition>
      <div v-show="isActive" class="lh-collapse-item-content">
        <div class="lh-collapse-item-content-box">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>
<script>
  import CollapseTransition from './collapsetransition';
  export default {
    name: 'CollapseItem',
    components: {
      CollapseTransition,
    },
    props: {
      name: {
        type: [String, Number],
        default: 0,
      },
      title: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        isActive: false,
      };
    },
    computed: {},
    created() {},
    methods: {
      toggle() {
        this.isActive = !this.isActive;
      },
    },
  };
</script>
