<template>
  <div id="app">
    <chart7 v-if="stages.length == 6"></chart7>
    <chart6 v-if="stages.length == 5"></chart6>
    <chart5 v-if="stages.length == 4"></chart5>
    <chart4 v-if="stages.length == 3"></chart4>
  </div>
</template>
<script setup>
import UI from "./components/UI.vue";
import chart7 from "./components/TreeChart-7childs.vue";
import chart6 from "./components/TreeChart-6childs.vue";
import chart5 from "./components/TreeChart-5childs.vue";
import chart4 from "./components/TreeChart-4childs.vue";

const stages = ["experience", "accept all", "reject all"];
</script>

<style></style>
