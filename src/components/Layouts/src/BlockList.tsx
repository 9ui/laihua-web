import { defineComponent } from '@vue/composition-api';
export default defineComponent({
  setup() {
    return () => {
      const a = 1;
      return <div class="cursor-pointer bg-red-500">{a}</div>;
    };
  },
});
