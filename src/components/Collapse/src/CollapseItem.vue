<template>
  <div class="lh-collapse-item" :class="{ 'lh-collapse-item-active': isActive }">
    <div
      :id="`el-collapse-head-${id}`"
      class="lh-collapse-item-header"
      @click="handleHeaderClick"
      @keyup.space.enter.stop="handleEnterClick"
      @focus="handleFocus"
      @blur="focusing = false"
    >
      <span class=""></span>
      <i class="lh-collapse-item-expand h-icon-right"></i>
      <slot name="title">{{ title }}</slot>
    </div>
    <CollapseTransition>
      <div v-show="isActive" :id="`lh-collapse-content-${id}`" class="lh-collapse-item-content">
        <div class="lh-collapse-item-content-box">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>

<script lang="ts">
  import { defineComponent, inject, computed, ref } from '@vue/composition-api';
  import { generateId } from '../../utils/utils';
  import { CollapseProvider } from './collapse';
  import CollapseTransition from './CollapseTransition.vue';
  import { CollapseItemProps } from './props';
  export default defineComponent({
    name: 'CollapseItem',
    components: {
      CollapseTransition,
    },
    props: CollapseItemProps,
    // data() {
    //   return {
    //     isActive: false,
    //   };
    // },
    // methods: {
    //   toggle() {
    //     this.isActive = !this.isActive;
    //   },
    // },
    setup(props) {
      const collapse = inject<CollapseProvider>('collapse');
      const collapseMitt = collapse?.collapseMitt;

      const contentWrapStyle = ref({
        height: 'auto',
        display: 'block',
      });
      const contentHeight = ref(0);
      const focusing = ref(false);
      const isClick = ref(false);
      const id = ref(generateId());

      const isActive = computed(() => {
        return collapse?.activeNames.value.indexOf(props.name) > -1;
      });

      const handleFocus = () => {
        setTimeout(() => {
          if (!isClick.value) {
            focusing.value = true;
          } else {
            isClick.value = false;
          }
        }, 50);
      };

      const handleHeaderClick = () => {
        if (props.disabled) return;
        collapseMitt?.emit('item-click', props.name);
        focusing.value = false;
        isClick.value = true;
      };

      const handleEnterClick = () => {
        collapseMitt?.emit('item-click', props.name);
      };

      return {
        isActive,
        contentWrapStyle,
        contentHeight,
        focusing,
        isClick,
        id,
        handleFocus,
        handleHeaderClick,
        handleEnterClick,
        collapse,
      };
    },
  });
</script>
