<template>
  <div class="vipservice-level-info">
    <div class="wrapper">
      <h1>一站式视频创作及营销解决方案</h1>
      <div class="cards">
        <div
          v-for="(level, index) in levelInfo"
          :key="level.id"
          class="card-item"
          :class="[level.id === '200' ? 'active' : '', level.id === '100' ? 'card-item-first' : '']"
        >
          <h3>{{ level.title }}</h3>
          <div class="desc">{{ level.desc }}</div>
          <img :src="level.icon" alt="" :class="`icon-${index}`" class="icon" />
          <button class="btn" @click="$emit('open', index)">获取报价</button>
          <div v-if="level.mark">
            <div class="mark">{{ level.mark }}</div>
            <Icon icon="#iconjiahao" size="16px" class="add-icon"></Icon>
          </div>
          <div class="card-item-ft">
            <ul class="tags">
              <li v-for="tag in level.tag" :key="tag.tagId" class="tag">
                {{ tag.tagName }}
              </li>
            </ul>
            <a v-if="level.id !== '100'" href="/apiserver" class="more"> 了解更多>> </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { levelInfo } from './data';
  export default defineComponent({
    setup() {
      return {
        levelInfo,
      };
    },
  });
</script>
