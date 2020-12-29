import { Ref, watchEffect, ref } from '@vue/composition-api';

interface IntersectionObserverProps {
  target: Ref<Element | null | undefined>;
  root?: Ref<Element | null | undefined>;
  onIntersect: IntersectionObserverCallback;
  rootMargin?: string;
  threshold?: number;
}

export function useIntersectionObserver({
  target,
  root,
  onIntersect,
  rootMargin = '0px',
  threshold = 0.1,
}: IntersectionObserverProps) {
  let cleanup = () => {};
  // const observer: Ref<Nullable<IntersectionObserver>> = ref(null);
  const io = ref(
    new IntersectionObserver(onIntersect, {
      root: root ? root.value : null,
      rootMargin,
      threshold,
    })
  );
  const stopEffect = watchEffect(() => {
    cleanup();
    const current = target.value;
    current && io.value.observe(current);
    cleanup = () => {
      if (io.value) {
        io.value.disconnect();
        target.value && io.value.unobserve(target.value);
      }
    };
  });
  return {
    io,
    stop: () => {
      cleanup();
      stopEffect();
    },
  };
}
