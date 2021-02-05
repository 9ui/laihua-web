<template>
  <!-- block---1 -->
  <div class="w-full">
    <!-- components -->
    <LhButton v-if="!codeView" id="sourceCode"></LhButton>

    <!-- code preview -->
    <SourceCode v-else :code="code"></SourceCode>
  </div>
</template>

<script lang="ts">
  import { beautifyHtml } from '@/utils/beautifyHtml';
  import * as Core from '@/core';
  import { mapMutations, mapState } from 'vuex';
  import { LhButton } from '@/components/Blocks/index';
  import { SourceCode } from '@/components/CodePreview/index';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      LhButton,
      SourceCode,
    },
    data() {
      return {
        code: null,
      };
    },
    computed: {
      ...mapState('common', ['codeView']),
    },
    mounted() {
      // 格式化源码
      this.code = beautifyHtml(document.getElementById('sourceCode').innerHTML);
      // 获取源码行数
      this.SET_CODELINES(this.code.replace(/\n$/, '').split('\n').length || 0);
      this.SET_CODE(this.code);
    },
    methods: {
      ...mapMutations('common', ['SET_CODE', 'SET_CODELINES']),
    },
  });
</script>
