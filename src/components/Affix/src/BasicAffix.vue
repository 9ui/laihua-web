<template>
  <div>
    <div :class="affixCls" :style="affixStyle">
      <slot></slot>
    </div>
  </div>
</template>
<script>
  import { AffixProps } from './affixProps';
  const prefix = 'lh-affix';
  export default {
    name: 'Affix',
    props: AffixProps,
    data() {
      return {
        isFixed: false, // 是否固定
        fixPosition: 'top', // 默认固定位置为顶部 ["top","bottom"]
        containerDom: null, // 容器内dom对象
        isAbsolute: !!this.container && !this.disabled, // 是都绝对定位
        y: 0, // 容器内的dom对象距离容器顶部的偏移量
      };
    },
    computed: {
      cFixedOffsetTop() {
        return this.fixedOffsetTop || this.offsetTop;
      },
      cFixedOffsetBottom() {
        return this.fixedOffsetBottom || this.offsetBottom;
      },
      affixCls() {
        return {
          [prefix]: this.isFixed,
          [`${prefix}-absolute`]: this.isAbsolute,
        };
      },
      affixStyle() {
        const param = {};
        if (this.isFixed) {
          if (this.fixPosition === 'top') {
            param.top = `${this.cFixedOffsetTop}px`;
          } else {
            param.bottom = `${this.cFixedOffsetBottom}px`;
          }
        }
        if (this.isAbsolute) {
          if (this.fixPosition === 'top') {
            param.top = `${this.offsetTop}px`;
          } else {
            param.bottom = `${this.offsetBottom}px`;
          }
        }
        return param;
      },
    },

    mounted() {
      this.$nextTick(() => {
        if (this.container) {
          // 获取当前容器的dom对象
          this.containerDom = this.container.call();
        }
        // 事件监听
        window.addEventListener('scroll', this.trigger, true);
        window.addEventListener('resize', this.trigger);
        this.refresh();
      });
    },

    beforeDestroy() {
      // 销毁事件
      window.removeEventListener('scroll', this.trigger, true);
      window.removeEventListener('resize', this.trigger);
    },

    methods: {
      /**
       * 未监测到的页面变化，需要刷新affix组件的位置
       * @description: 刷新初始化事件
       */
      refresh() {
        const evObj = document.createEvent('HTMLEvents');
        evObj.initEvent('scroll', true, true);
        document.body.dispatchEvent(evObj);
      },
      /**
       * @description: 触发时间
       * @param: {event} 事件对象
       */
      trigger(event) {
        if (this.disabled) return;
        const el = this.$el.firstChild;
        if (event.target === el) return false;
        const original = this.isFixed;
        // affix 固定在容器内
        // 如果遇到固定的dom比容器高，务必添加 overflow: hidden; 的样式，并且targetDom必须position: relative|absoulte。
        if (this.containerDom) {
          const position = el.getBoundingClientRect();
          const containerPosition = this.containerDom.getBoundingClientRect();
          this.y = containerPosition.top;
          if (
            containerPosition.top <= this.cFixedOffsetTop - this.offsetTop &&
            containerPosition.bottom >=
              position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom
          ) {
            this.isFixed = true;
            this.isAbsolute = false;
            this.fixPosition = 'top';
          }
          if (
            containerPosition.top > this.cFixedOffsetTop - this.offsetTop ||
            containerPosition.height < position.height
          ) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'top';
          } else if (
            containerPosition.bottom <
            position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom
          ) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'bottom';
          }
          if (original !== this.isFixed) {
            // 固定状态发生变化时触发该方法。
            this.$emit('change', this.isFixed);
          }
          return;
        }
        // 判断是否固定展示
        if (!this.isFixed) {
          const position = el.getBoundingClientRect();
          if (this.offsetTop !== undefined && position.top < this.offsetTop) {
            this.isFixed = true;
            this.isAbsolute = false;
            this.fixPosition = 'top';
          }
          if (
            !this.isFixed &&
            this.offsetBottom !== undefined &&
            window.innerHeight < position.top + el.clientHeight + this.offsetBottom
          ) {
            this.isFixed = true;
            this.isAbsolute = false;
            this.fixPosition = 'bottom';
          }
          // 判断是否有父节点
        } else if (el.parentNode) {
          const position = el.parentNode.getBoundingClientRect();
          if (
            this.offsetTop !== undefined &&
            this.fixPosition === 'top' &&
            position.top > this.offsetTop
          ) {
            this.isFixed = false;
            this.isAbsolute = true;
          }
          if (
            this.isFixed &&
            this.offsetBottom !== undefined &&
            this.fixPosition === 'bottom' &&
            window.innerHeight > position.top + el.clientHeight + this.offsetBottom
          ) {
            this.isFixed = false;
            this.isAbsolute = true;
          }
        }
        if (original !== this.isFixed) {
          // 固定状态发生变化时触发该方法。
          this.$emit('change', this.isFixed);
        }
      },
    },
  };
</script>
