import { defineComponent, computed, unref } from '@vue/composition-api';
import { isString } from '@/utils/is';
import './index.less';

export default defineComponent({
  name: 'Icon',
  props: {
    // icon name
    icon: {
      type: String,
      requre: true,
    },
    // icon size
    size: {
      type: [String, Number],
      default: 14,
    },
    // icon color
    color: {
      type: String,
    },
  },
  setup(props, { attrs }) {
    const getIconRef = computed(() => {
      const { icon } = props;
      return `${icon}`;
    });
    const wrapStyleRef = computed(() => {
      const { size, color } = props;
      let fs = size;
      if (isString(size)) {
        fs = parseInt(size, 10);
      }
      return {
        fontSize: `${fs}px`,
        color,
      };
    });
    return () => (
      <svg class={[attrs.class, 'iconfont']} style={unref(wrapStyleRef)} aria-hidden="true">
        <use xlinkHref={getIconRef.value} />
      </svg>
    );
  },
});
