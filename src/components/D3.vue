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

const primaryColor = "#406AFF";
const alertColor = "#E04A4A";

onMounted(() => {
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
  const canvas = d3.select(prueba.value).attr("viewBox", [0, 0, 1000, 1000]);
  const svg = canvas
    .append("svg")
    .attr("class", "svg")
    .attr("width", 1500)
    .attr("height", 1500);

  const createPath = (color, opacity, width, path) => {
    svg
      .append("path")
      .attr("fill", "none")
      .style("stroke", color)
      .style("stroke-width", width)
      .style("opacity", opacity)
      .attr("d", path);
  };

  const createCircleGroup = (cx, cy, r, color, textCircle, score) => {
    const circleGroup = svg.append("g").attr("class", "circle-group");

    circleGroup
      .append("circle")
      .attr("cx", cx)
      .attr("cy", cy)
      .attr("r", r)
      .attr("fill", color);

    circleGroup
      .append("foreignObject") // Usar foreignObject en lugar de text
      .attr("x", cx - radio) // Ajustar la posición x según sea necesario
      .attr("y", cy - radio) // Ajustar la posición y según sea necesario
      .attr("width", radio * 2) // Ancho igual al diámetro del círculo
      .attr("height", radio * 2) // Alto igual al diámetro del círculo
      .html(
        `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:60%;word-wrap: break-word;">${textCircle}</p></div>`
      );

    circleGroup
      .append("text")
      .attr("x", cx)
      .attr("y", cy + radio + scoreMargin)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "central")
      .style("fill", "#696969")
      .text(score)
      .style("font-size", scoreSize);
  };

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

  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(startPathX, startPathY, endPathX, firstChildCenter, "up", false)
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap,
      "up",
      false
    )
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap * 2,
      "up",
      true
    )
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap * 3,
      "down",
      true
    )
  );

  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap * 4,
      "down",
      false
    )
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap * 5,
      "down",
      false
    )
  );
  createPath(
    alertColor,
    0.5,
    pathWidth,
    getPath(
      startPathX,
      startPathY,
      endPathX,
      firstChildCenter + columGap * 6,
      "down",
      false
    )
  );

  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter, 1000)
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter + columGap, 1000)
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter + columGap * 2, 1000)
  );

  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter + columGap * 3, 1000)
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter + columGap * 4, 1000)
  );
  createPath(
    primaryColor,
    0.5,
    pathWidth,
    getPathWithoutCurve(endPathX, firstChildCenter + columGap * 5, 1000)
  );

  createCircleGroup(200, 500, radio, primaryColor, textCircle[0], score[0]);
  createCircleGroup(
    rowGap,
    firstChildCenter,
    radio,
    primaryColor,
    textCircle[1],
    score[1]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap,
    radio,
    primaryColor,
    textCircle[2],
    score[2]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 2,
    radio,
    primaryColor,
    textCircle[3],
    score[3]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 3,
    radio,
    primaryColor,
    textCircle[4],
    score[4]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 4,
    radio,
    primaryColor,
    textCircle[5],
    score[5]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 4,
    radio,
    primaryColor,
    textCircle[5],
    score[5]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 4,
    radio,
    primaryColor,
    textCircle[5],
    score[5]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 5,
    radio,
    primaryColor,
    textCircle[6],
    score[6]
  );
  createCircleGroup(
    rowGap,
    firstChildCenter + columGap * 6,
    radio,
    alertColor,
    textCircle[7],
    score[7]
  );

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
