<template>
  <aside class="sidebar" :class="[darkMode ? 'dark-mode' : '']">
    <div class="blocks">
      <div class="block-category">组件</div>
      <div class="block-list">
        <button
          tabindex="0"
          class="block-item"
          block-type="Blog"
          block-name="BlogA"
          :class="{ 'is-active': isActive === 0 }"
          @click="clickTo(0, '/')"
        >
          <BlogA></BlogA>
        </button>

        <button
          tabindex="1"
          class="block-item"
          block-type="Blog"
          block-name="BlogB"
          :class="{ 'is-active': isActive === 1 }"
          @click="clickTo(1, '/demo3')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/demo4')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/base')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/pricing')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  import { BlogA, BlogB, BlogC, BlogD, BlogE } from '@/components/AsideIcon/index';
  export default defineComponent({
    components: {
      BlogA,
      BlogB,
      BlogC,
      BlogD,
      BlogE,
    },
    data() {
      return {
        isActive: 0,
      };
    },
    computed: {
      ...mapState('common', ['hasSidebar', 'darkMode']),
    },
    methods: {
      clickTo(index, path) {
        this.isActive = index;
        this.$router.push(path);
      },
    },
  });
</script>
