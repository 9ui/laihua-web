import { getCurrentInstance, onMounted, nextTick, onUnmounted } from '@vue/composition-api';

export function tryOnMounted(fn: () => void, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn);
  } else if (sync) {
    fn();
  } else {
    nextTick(fn);
  }
}

export function tryOnUnmounted(fn: () => Promise<void> | void) {
  getCurrentInstance() && onUnmounted(fn);
}
