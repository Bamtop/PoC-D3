<script setup>
import * as d3 from "d3";
import { ref, onMounted } from "vue";
import { getPath } from "../utils";

const prueba = ref();
const data = [];
onMounted(() => {
  const canvas = d3.select(prueba.value);
  const rowGap = 700;
  const radio = 50;
  const columGap = 150;
  const firstChildCenter = 50;
  const startPathX = 200;
  const startPathY = 500;
  const endPathX = rowGap;
  const pathWidth = 40;
  const fontSize = 15;
  const scoreSize = 25;
  const scoreMargin = 20;

  const textCircle = [
    "Cookies served",
    "Mandatory",
    "Marketing",
    "Personalization",
    "Analytics",
    "Accept-All ",
    "Technical",
    "Uncategorized",
  ];

  const score = [52, 14, 14, 11, 9, 8, 6, 4];

  canvas.attr("viewBox", [0, 0, 1000, 1000]);

  const svg = canvas
    .append("svg")
    .attr("class", "svg")
    .attr("width", 1000)
    .attr("height", 1000);

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth)
    .style("opacity", 0.5)
    .attr(
      "d",
      getPath(startPathX, startPathY, endPathX, firstChildCenter, "up", false)
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap,
        "up",
        false
      )
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap * 2,
        "up",
        true
      )
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap * 3,
        "down",
        true
      )
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap * 4,
        "down",
        false
      )
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap * 5,
        "down",
        false
      )
    );

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#E04A4A26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPath(
        startPathX,
        startPathY,
        endPathX,
        firstChildCenter + columGap * 6,
        "down",
        false
      )
    );
  const circleGroup1 = svg.append("g");
  const circleGroup2 = svg.append("g");
  const circleGroup3 = svg.append("g");
  const circleGroup4 = svg.append("g");
  const circleGroup5 = svg.append("g");
  const circleGroup6 = svg.append("g");
  const circleGroup7 = svg.append("g");
  const circleGroup8 = svg.append("g");

  circleGroup1
    .append("circle")
    .attr("cx", 200)
    .attr("cy", 500)
    .attr("r", radio)
    .style("fill", "#87A1FA")
    .style("z-index", "1000");

  circleGroup1
    .append("text")
    .attr("x", 200)
    .attr("y", 500)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[0])
    .style("font-size", fontSize);

  circleGroup1
    .append("text")
    .attr("x", 200)
    .attr("y", 500 + radio + scoreMargin)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[0])
    .style("font-size", scoreSize);

  circleGroup2
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup2
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[1])
    .style("font-size", fontSize);

  circleGroup2
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[1])
    .style("font-size", scoreSize);

  circleGroup3
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup3
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[2])
    .style("font-size", fontSize);

  circleGroup3
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[2])
    .style("font-size", scoreSize);

  circleGroup4
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap * 2)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup4
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap * 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[3])
    .style("font-size", fontSize);

  circleGroup4
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 2)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[3])
    .style("font-size", scoreSize);

  circleGroup5
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap * 3)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup5
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap * 3)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[4])
    .style("font-size", fontSize);

  circleGroup5
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 3)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[4])
    .style("font-size", scoreSize);

  circleGroup6
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap * 4)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup6
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap * 4)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[5])
    .style("font-size", fontSize);

  circleGroup6
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 4)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[5])
    .style("font-size", scoreSize);

  circleGroup7
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap * 5)
    .attr("r", radio)
    .style("fill", "#406AFF");

  circleGroup7
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap * 5)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[6])
    .style("font-size", fontSize);

  circleGroup7
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 5)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[6])
    .style("font-size", scoreSize);

  circleGroup8
    .append("circle")
    .attr("cx", rowGap)
    .attr("cy", firstChildCenter + columGap * 6)
    .attr("r", radio)
    .style("fill", "#E04A4A");

  circleGroup8
    .append("text")
    .attr("x", rowGap)
    .attr("y", firstChildCenter + columGap * 6)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "white")
    .text(textCircle[7])
    .style("font-size", fontSize);

  circleGroup8
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 6)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[7])
    .style("font-size", scoreSize);
});
</script>
<template>
  <div class="prueba" ref="prueba"></div>
</template>

<style scoped></style>
