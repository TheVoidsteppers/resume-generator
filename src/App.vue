<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import "@assets/style/global/index.scss";

@Component({})
export default class App extends Vue {}
</script>
