<script setup>
import * as d3 from "d3";
import { ref, onMounted } from "vue";
import { getPath, getPathWithoutCurve } from "../utils";

const prueba = ref();
const prueba2 = ref();
const rowGap = 700;
const radio = 50;
const columGap = 150;
const firstChildCenter = 50;
const startPathX = 200;
const startPathY = 500;
const endPathX = rowGap;
const pathWidth = 40;
const fontSize = 12;
const scoreSize = 20;
const scoreMargin = 20;

onMounted(() => {
  const canvas = d3.select(prueba.value);

  const textCircle = [
    "Cookies served",
    "Mandatory Cookies",
    "Marketing Cookies",
    "Personalization Cookies",
    "Analytics Cookies",
    "Accept-All Cookies ",
    "Technical Cookies",
    "Uncategorized Cookies",
  ];

  const score = [52, 14, 14, 11, 9, 8, 6, 4];

  canvas.attr("viewBox", [0, 0, 1000, 1000]);

  const svg = canvas
    .append("svg")
    .attr("class", "svg")
    .attr("width", 1500)
    .attr("height", 1500);

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

  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr("d", getPathWithoutCurve(endPathX, firstChildCenter, 1000));
  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPathWithoutCurve(endPathX, firstChildCenter + columGap, 1000)
    );
  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPathWithoutCurve(endPathX, firstChildCenter + columGap * 2, 1000)
    );
  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPathWithoutCurve(endPathX, firstChildCenter + columGap * 3, 1000)
    );
  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPathWithoutCurve(endPathX, firstChildCenter + columGap * 4, 1000)
    );
  svg
    .append("path")
    .attr("fill", "none")
    .style("stroke", "#406AFF26")
    .style("stroke-width", pathWidth) // Ancho de línea de 2 unidades
    .attr(
      "d",
      getPathWithoutCurve(endPathX, firstChildCenter + columGap * 5, 1000)
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
    .append("foreignObject") // Usar foreignObject en lugar de text
    .attr("x", 200 - radio) // Ajustar la posición x según sea necesario
    .attr("y", 500 - radio) // Ajustar la posición y según sea necesario
    .attr("width", radio * 2) // Ancho igual al diámetro del círculo
    .attr("height", radio * 2) // Alto igual al diámetro del círculo
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:60%;word-wrap: break-word;">${textCircle[0]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[1]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[2]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap * 2 - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[3]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap * 3 - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[4]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap * 4 - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[5]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap * 5 - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[6]}</p></div>`
    );

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
    .append("foreignObject")
    .attr("x", rowGap - radio)
    .attr("y", firstChildCenter + columGap * 6 - radio)
    .attr("width", radio * 2)
    .attr("height", radio * 2)
    .html(
      `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:80%;word-wrap: break-word;">${textCircle[7]}</p></div>`
    );

  circleGroup8
    .append("text")
    .attr("x", rowGap + radio + scoreMargin)
    .attr("y", firstChildCenter + columGap * 6)
    .attr("text-anchor", "middle")
    .attr("dominant-baseline", "central")
    .style("fill", "#696969")
    .text(score[7])
    .style("font-size", scoreSize);
  const createDonut = (data, positionX, positionY) => {
    const width = 100,
      height = 100;
    const radius = Math.min(width, height) / 2 - 1;

    const donutGroup = svg
      .append("g")
      .attr("width", width)
      .attr("height", height)
      .attr("transform", `translate(${positionX + radius - 5},${positionY})`);

    const color = d3.scaleOrdinal().range(["#FF4040", "#406AFF"]);
    const pie = d3.pie().value((d) => d[1]);
    const data_ready = pie(Object.entries(data));

    donutGroup
      .selectAll("whatever")
      .data(data_ready)
      .join("path")
      .attr("d", d3.arc().innerRadius(12).outerRadius(radius))
      .attr("fill", (d) => color(d.data[0]))
      .style("opacity", 1);
  };
  createDonut({ a: 9, b: 20 }, 1000, firstChildCenter);
  createDonut({ a: 40, b: 20 }, 1000, firstChildCenter + columGap);
  createDonut({ a: 20, b: 20 }, 1000, firstChildCenter + columGap * 2);
  createDonut({ a: 0, b: 10 }, 1000, firstChildCenter + columGap * 3);
  createDonut({ a: 9, b: 20 }, 1000, firstChildCenter + columGap * 4);
  createDonut({ a: 9, b: 20 }, 1000, firstChildCenter + columGap * 5);
});
</script>
<template>
  <div class="prueba" ref="prueba"></div>
  <div class="prueba2" ref="prueba2"></div>
</template>

<style scoped></style>
