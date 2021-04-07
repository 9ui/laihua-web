<template>
  <!-- block---1 -->
  <section class="w-full">
    <!-- components -->
    <slot v-if="!codeView"></slot>
    <!-- code preview -->
    <SourceCode v-else :code="code"></SourceCode>
  </section>
</template>

<script lang="ts">
  import { defineComponent } from '@vue/composition-api';
  import { SourceCode } from '@/components/CodePreview/index';
  import { mapMutations, mapState } from 'vuex';
  import { beautifyHtml } from '@/utils/beautifyHtml';
  export default defineComponent({
    components: {
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

<style></style>
