<template>
  <aside class="sidebar body-font">
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
          @click="clickTo(1, '/templates/demo1')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/components/modal')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/templates/demo2')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/templates/demo3')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
    <div class="blocks">
      <div class="block-category">模板</div>
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
          @click="clickTo(1, '/templates/demo1')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/components/modal')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/templates/demo2')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/templates/demo3')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
    <div class="blocks">
      <div class="block-category">模板</div>
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
          @click="clickTo(1, '/templates/demo1')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/components/modal')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/templates/demo2')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/templates/demo3')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
    <div class="blocks">
      <div class="block-category">模板</div>
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
          @click="clickTo(1, '/templates/demo1')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/components/modal')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/templates/demo2')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/templates/demo3')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
    <div class="blocks">
      <div class="block-category">模板</div>
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
          @click="clickTo(1, '/templates/demo1')"
        >
          <BlogB></BlogB>
        </button>

        <button
          tabindex="2"
          class="block-item"
          block-type="Blog"
          block-name="BlogC"
          :class="{ 'is-active': isActive === 2 }"
          @click="clickTo(2, '/components/modal')"
        >
          <BlogC></BlogC>
        </button>

        <button
          tabindex="3"
          class="block-item"
          block-type="Blog"
          block-name="BlogD"
          :class="{ 'is-active': isActive === 3 }"
          @click="clickTo(3, '/templates/demo2')"
        >
          <BlogD></BlogD>
        </button>

        <button
          tabindex="4"
          class="block-item"
          block-type="Blog"
          block-name="BlogE"
          :class="{ 'is-active': isActive === 4 }"
          @click="clickTo(4, '/templates/demo3')"
        >
          <BlogE></BlogE>
        </button>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import { mapMutations, mapState } from 'vuex';
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
      ...mapState('common', ['hasSidebar', 'darkMode', 'currentTheme']),
    },
    methods: {
      ...mapMutations('common', ['SET_CODEVIEW']),
      clickTo(index, path) {
        this.isActive = index;
        this.SET_CODEVIEW(false);
        this.$router.push(path);
      },
    },
  });
</script>
