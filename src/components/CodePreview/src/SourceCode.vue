<template>
  <pre v-highlight class="pre-wrapper">
     <code class="aside-line-number">
         <span v-for="i in codeLines" :key="i" class="line-number" >{{i}}</span>
    </code>
     <code v-highlight  class="html" >{{code}}</code>
   </pre>
</template>

<script lang="ts">
  import { mapState } from 'vuex';
  export default {
    name: 'CodePreview',
    props: {
      code: {
        type: String,
        default: '',
      },
    },
    computed: {
      ...mapState('common', ['codeLines']),
    },
  };
</script>
