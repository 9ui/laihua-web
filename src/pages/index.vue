<template>
  <!-- block---1 -->
  <div class="">
    <BlogA v-if="!codeView"></BlogA>
    <pre v-else v-highlight>
     <code v-highlight class="html">{{code}}</code>
   </pre>
  </div>
</template>

<script lang="ts">
  import { beautifyHtml } from '@/utils/beautifyHtml';
  import { codeA } from '@/view/codeA.ts';
  import * as Core from '@/core';
  import { mapState } from 'vuex';
  import { BlogA } from '@/components/Blocks/index';
  const { VueAPI } = Core;

  export default VueAPI.defineComponent({
    components: {
      BlogA,
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
      this.code = beautifyHtml(codeA());
    },
  });
</script>
