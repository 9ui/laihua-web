<template>
  <div class="switcher">
    <div
      data-theme="indigo"
      class="theme-button cursor-pointer bg-indigo-500"
      :class="{ 'is-active': currentTheme === 'indigo' }"
      @click="SET_THEME('indigo')"
    ></div>
    <div
      data-theme="yellow"
      class="theme-button cursor-pointer bg-yellow-500"
      :class="{ 'is-active': currentTheme === 'yellow' }"
      @click="SET_THEME('yellow')"
    ></div>
    <div
      data-theme="red"
      class="theme-button cursor-pointer bg-red-500"
      :class="{ 'is-active': currentTheme === 'red' }"
      @click="SET_THEME('red')"
    ></div>
    <div
      data-theme="purple"
      class="theme-button cursor-pointer bg-purple-500"
      :class="{ 'is-active': currentTheme === 'purple' }"
      @click="SET_THEME('purple')"
    ></div>
    <div
      data-theme="pink"
      class="theme-button cursor-pointer bg-pink-500"
      :class="{ 'is-active': currentTheme === 'pink' }"
      @click="SET_THEME('pink')"
    ></div>
    <div
      data-theme="blue"
      class="theme-button cursor-pointer bg-blue-500"
      :class="{ 'is-active': currentTheme === 'blue' }"
      @click="SET_THEME('blue')"
    ></div>
    <div
      data-theme="green"
      class="theme-button cursor-pointer bg-green-500"
      :class="{ 'is-active': currentTheme === 'green' }"
      @click="SET_THEME('green')"
    ></div>
  </div>
</template>

<script lang="ts">
  import { mapMutations, mapState } from 'vuex';
  import { defineComponent } from '@vue/composition-api';
  export default defineComponent({
    computed: {
      ...mapState('common', ['currentTheme']),
    },
    methods: {
      ...mapMutations('common', ['SET_THEME']),
    },
  });
</script>

<style></style>
