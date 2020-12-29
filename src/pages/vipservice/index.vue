<template>
  <div class="vipservice">
    <!-- solution -->
    <LevelInfo />
    <!-- brand -->
    <Brand />
    <LazyContainer>
      <!-- more-service -->
      <Appreciation />
      <!-- footer -->
      <div class="vipserver-footer">
        <div class="footer-wrapper">
          <div class="ft-left">
            <p>来画视频</p>
            <p>让视频创作更简单，更美好</p>
            <button class="btn">预约咨询</button>
            <div class="tel">
              <Icon name="#icondianhua" font-size="16px" class="tel-icon"></Icon>
              0755-86962091
            </div>
          </div>
          <img class="ft-img" src="../../assets/images/vipservice/bg2.png" />
        </div>
      </div>
    </LazyContainer>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { LazyContainer } from '@/components/Container/index';
  import LevelInfo from './LevelInfo.vue';
  import Brand from './Brand.vue';
  import Appreciation from './Appreciation.vue';

  export default defineComponent({
    components: {
      LevelInfo,
      Brand,
      Appreciation,
      LazyContainer,
    },
    setup() {},
  });
</script>

<style lang="less">
  @import 'index.less';
</style>
