<script setup>
import * as d3 from "d3";
import { ref, onMounted } from "vue";

const prueba = ref();
const data = [];
onMounted(() => {
  const deltaXStart = 100;
  const deltaYStart = 100;
  const deltaXMiddle1 = 130;
  const deltaYMiddle1 = 100;
  const deltaXMiddle2 = 140;
  const deltaYMiddle2 = 180;
  const deltaXEnd = 400;
  const deltaYEnd = 200;

  const pathString =
    `M ${deltaXStart} ${deltaYStart} ` +
    `Q ${deltaXMiddle1} ${deltaYMiddle1} ${deltaXMiddle2} ${deltaYMiddle2} ` +
    `T ${deltaXEnd} ${deltaYEnd}`;

  const canvas = d3.select(prueba.value);

  canvas.attr("viewBox", [0, 0, 800, 800]);

  const svg = canvas
    .append("svg")
    .attr("class", "svg")
    .attr("width", 800)
    .attr("height", 800);
  svg
    .append("circle")
    .attr("cx", 25)
    .attr("cy", 45)
    .attr("r", 25)
    .style("fill", "purple");

  const circle = svg.append("g");

  circle
    .append("circle")
    .attr("cx", 100)
    .attr("cy", 100)
    .attr("r", 10)
    .style("fill", "red");

  circle.append("title").text("hola");

  svg
    .append("circle")
    .attr("cx", 400)
    .attr("cy", 200)
    .attr("r", 50)
    .style("fill", "black");

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "black")
    .style("stroke-width", 2) // Ancho de línea de 2 unidades
    .attr("d", pathString);
});
</script>
<template>
  <div class="prueba" ref="prueba"></div>
</template>

<style scoped></style>
