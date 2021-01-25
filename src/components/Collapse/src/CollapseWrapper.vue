<template>
  <div class="lh-collapse">
    <slot></slot>
  </div>
</template>

<script>
  import { defineComponent, ref, watch, provide, onUnmounted } from '@vue/composition-api';
  import mitt from 'mitt';
  import { UPDATE_MODEL_EVENT, CHANGE_EVENT } from '../../utils/constants';
  import { CollapseProps } from './collapseProps';

  //   export interface CollapseProvider {
  //     activeNames: Ref;
  //     collapseMitt: Emitter;
  //   }
  export default defineComponent({
    props: CollapseProps,
    emits: [UPDATE_MODEL_EVENT, CHANGE_EVENT],
    setup(props, { emit }) {
      const activeNames = ref([].concat(props.value));
      const collapseMitt = mitt();
      const setActiveNames = (_activeNames) => {
        activeNames.value = [].concat(_activeNames);
        const value = props.accordion ? activeNames.value[0] : activeNames.value;
        emit(UPDATE_MODEL_EVENT, value);
        emit(CHANGE_EVENT, value);
      };

      const handleItemClick = (name) => {
        if (props.accordion) {
          setActiveNames(
            (activeNames.value[0] || activeNames.value[0] === 0) && activeNames.value[0] === name
              ? ''
              : name
          );
        } else {
          const _activeNames = activeNames.value.slice(0);
          const index = _activeNames.indexOf(name);
          if (index > -1) {
            _activeNames.splice(index, 1);
          } else {
            _activeNames.push(name);
          }
          setActiveNames(_activeNames);
        }
      };

      watch(
        () => props.value,
        () => {
          activeNames.value = [].concat(props.value);
        }
      );

      collapseMitt.on('item-click', handleItemClick);

      onUnmounted(() => {
        collapseMitt.all.clear();
      });

      provide('collapse', {
        activeNames,
        collapseMitt,
      });

      return {
        activeNames,
        setActiveNames,
        handleItemClick,
      };
    },
  });
</script>
