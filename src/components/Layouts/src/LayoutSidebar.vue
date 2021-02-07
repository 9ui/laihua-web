<template>
  <aside class="sidebar body-font">
    <div v-for="(item, index) in blockList" :key="index" class="blocks">
      <div class="block-category">{{ item.name }}</div>
      <div class="block-list">
        <!-- home block -->
        <div
          v-if="index === 0"
          class="block-item"
          :class="{ 'is-active': blockType === 'home' && blockName === 'Introduction' }"
          @click="clickTo('home', 'Introduction', '/')"
        >
          <component :is="item.components[0]"></component>
        </div>
        <!-- other block -->
        <div
          v-for="(com, j) in item.components"
          v-else
          :key="j + 100"
          class="block-item"
          :class="{ 'is-active': blockType === item.pathName && blockName === com }"
          :block-type="blockType"
          :block-name="blockName"
          @click="clickTo(item.pathName, com, `/${item.pathName}/${com}`)"
        >
          <component :is="com"></component>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts">
  import { mapMutations, mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  import { getIcons, blockList } from '@/components/AsideIcon/index';

  export default defineComponent({
    components: getIcons,
    data() {
      return {
        isActive: 0,
        blockList,
      };
    },
    computed: {
      ...mapState('common', ['hasSidebar', 'darkMode', 'currentTheme', 'blockType', 'blockName']),
    },
    methods: {
      ...mapMutations('common', ['SET_CODEVIEW', 'SET_BLOCKTYPE', 'SET_BLOCKNAME']),
      /**
       * @description: 切换block
       * @param {blockType} 模块类型
       * @param {blockName} 模块名称
       * @param {path} 跳转路由
       */
      clickTo(blockType: string, blockName: string, path: string) {
        // 关闭源码预览
        this.SET_CODEVIEW(false);
        // 设置模块类型
        this.SET_BLOCKTYPE(blockType);
        // 设置模块名称
        this.SET_BLOCKNAME(blockName);
        // 路由跳转
        this.$router.push({ path });
      },
    },
  });
</script>
