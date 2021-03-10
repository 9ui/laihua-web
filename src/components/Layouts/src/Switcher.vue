<template>
  <div class="switcher">
    <div
      data-theme="indigo"
      class="bg-indigo-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'indigo' }"
      @click="SET_THEME('indigo')"
    ></div>
    <div
      data-theme="yellow"
      class="bg-yellow-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'yellow' }"
      @click="SET_THEME('yellow')"
    ></div>
    <div
      data-theme="red"
      class="bg-red-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'red' }"
      @click="SET_THEME('red')"
    ></div>
    <div
      data-theme="purple"
      class="bg-purple-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'purple' }"
      @click="SET_THEME('purple')"
    ></div>
    <div
      data-theme="pink"
      class="bg-pink-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'pink' }"
      @click="SET_THEME('pink')"
    ></div>
    <div
      data-theme="blue"
      class="bg-blue-500 cursor-pointer theme-button"
      :class="{ 'is-active': currentTheme === 'blue' }"
      @click="SET_THEME('blue')"
    ></div>
    <div
      data-theme="green"
      class="bg-green-500 cursor-pointer theme-button"
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
