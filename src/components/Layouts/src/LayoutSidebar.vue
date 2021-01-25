<template>
  <aside class="sidebar">
    <div class="blocks">
      <div class="block-category">组件</div>
      <div class="block-list">
        <button
          tabindex="0"
          class="block-item"
          block-type="Blog"
          block-name="BlogA"
          :class="{ 'is-active': isActive === 0 }"
          @click="clickTo(0)"
        >
          <BlogA></BlogA>
        </button>
        <button
          tabindex="1"
          class="block-item"
          block-type="Blog"
          block-name="BlogB"
          :class="{ 'is-active': isActive === 1 }"
          @click="clickTo(1)"
        >
          <BlogB></BlogB>
        </button>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  import { BlogA, BlogB } from '@/components/AsideIcon/index';
  export default defineComponent({
    components: {
      BlogA,
      BlogB,
    },
    data() {
      return {
        isActive: 0,
      };
    },
    computed: {
      ...mapState('common', ['hasSidebar']),
    },
    methods: {
      clickTo(index) {
        this.isActive = index;
      },
    },
  });
</script>
