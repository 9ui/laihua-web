<template>
  <nav class="bg-gray-800 toolbar flex align-middle">
    <div class="opener cursor-pointer" @click="setSidebar">示例列表</div>
    <!-- code view -->
    <div v-if="codeView" class="clipboard-wrapper">
      <div class="copy-the-block copy-to-clipboard" @click="copyToClipboard">
        <svg
          viewBox="0 0 25 24"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19.914 1h-18v19" />
          <path d="M6 5v18h18V5z" />
        </svg>
        <span>COPY TO CLIPBOARD</span>
      </div>
      <span :class="[`clipboard-tooltip${copied ? ' is-copied ' : ''}`]">Copied!</span>
    </div>
    <div class="copy-the-block cursor-pointer" @click="toggleView">
      <svg
        v-if="!codeView"
        fill="none"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        viewBox="0 0 24 24"
      >
        <path d="M16 18L22 12 16 6"></path>
        <path d="M8 6L2 12 8 18"></path>
      </svg>
      <svg
        v-else
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        class="css-i6dzq1"
        viewBox="0 0 24 24"
      >
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
        <circle cx="12" cy="12" r="3"></circle>
      </svg>
      <span>{{ !codeView ? 'VIEW CODE' : 'PREVIEW' }}</span>
    </div>
    <!-- switcher -->
    <div class="switcher">
      <div
        v-for="(t, index) in themeList"
        :key="index"
        :data-theme="t"
        :class="[
          'theme-button cursor-pointer',
          `bg-${t}-500`,
          t === currentTheme ? 'is-active' : undefined,
        ]"
        @click="SET_THEME(t)"
      ></div>
    </div>
    <!-- device  -->
    <button class="device is-active" data-view="desktop">
      <svg
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        viewBox="0 0 24 24"
      >
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M8 21h8m-4-4v4"></path>
      </svg>
    </button>
    <button class="device" data-view="tablet">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    </button>
    <button class="device" data-view="phone">
      <svg
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <path d="M12 18h.01"></path>
      </svg>
    </button>
    <!-- mode -->
    <div class="mode cursor-pointer" @click="changeMode"></div>
  </nav>
</template>
<script lang="ts">
  import { mapMutations, mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  import { LhDropdown } from '@/components/Dropdown/index';
  export default defineComponent({
    components: {
      LhDropdown,
    },
    data() {
      return {
        darkMode: false, // 是否显示dark模式
        copied: false, // 是否已经复制
        themeList: ['indigo', 'yellow', 'red', 'purple', 'pink', 'blue', 'green'], // 主题色列表
      };
    },
    computed: {
      ...mapState('common', ['hasSidebar', 'currentTheme', 'code', 'codeView']),
    },
    methods: {
      ...mapMutations('common', [
        'SET_SIDEBAR',
        'SET_THEME',
        'SET_MODE',
        'SET_CODEVIEW',
        'SET_CODE',
      ]),
      /**
       * @description：展开/收起 sidebar
       */
      setSidebar() {
        const hasSidebar = !this.hasSidebar;
        this.SET_SIDEBAR(hasSidebar);
      },
      /**
       * @description：设置light/dark
       */
      changeMode() {
        this.darkMode = !this.darkMode;
        this.$colorMode.preference = this.darkMode ? 'dark' : 'light';
        this.SET_MODE(this.darkMode);
      },
      /**
       * @description:是否显示源码
       */
      toggleView() {
        const _codeView = this.codeView ? !this.codeView : !this.codeView;
        this.SET_CODEVIEW(_codeView);
      },
      /**
       * @description: 复制到剪贴板
       */
      copyToClipboard() {
        const input = document.createElement('textarea');
        input.innerHTML = this.code;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        this.copied = true;
        setTimeout(() => {
          this.copied = false;
        }, 2000);
      },
    },
  });
</script>
