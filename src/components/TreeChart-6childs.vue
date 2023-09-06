<script setup>
import * as d3 from "d3";
import { ref, onMounted } from "vue";
import { getPath, getPathWithoutCurve, getPercentage } from "../utils";

const prueba = ref();
const prueba2 = ref();
const rowGap = 700;
const radio = 50;
const columGap = 150;
const firstChildCenter = 200;
const startPathX = 200;
const startPathY = 576;
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

  svg
    .append("foreignObject")
    .attr("x", 550)
    .attr("y", 0)
    .attr("width", 300)
    .attr("height", 1080)
    .html(
      `<div style="display:flex;flex-direction:column; align-items:center;width: 100%; height: 100%;background-color:#406AFF0D;border-radius:25%;padding-top:25px;color:#69696980">
          <span style="font-size:20px;font-family:Inter;font-weight:700;">COVERAGE</span>
          <span style="font-size:12px;font-family:Inter;font-weight:700;">COOKIES WRAPPED UP BY CMP</span>
          <span style="font-size:40px;margin-top:15px;font-family:Inter;font-weight:700;">94%</span>
        </div>`
    );

  svg
    .append("foreignObject")
    .attr("x", 950)
    .attr("y", 0)
    .attr("width", 400)
    .attr("height", 950)
    .html(
      `<div style="display:flex;flex-direction:column; align-items:center;width: 100%; height: 100%;background-color:#406AFF0D;border-radius:25%;padding-top:25px;color:#69696980">
          <span style="font-size:20px;font-family:Inter;font-weight:700;">PRECISION</span>
          <span style="font-size:12px;font-family:Inter;font-weight:700;">COOKIES CATEGORY ASSIGNMENT ACCURACY</span>
          <span style="font-size:40px;margin-top:15px;font-family:Inter;font-weight:700;">75%</span>
        </div>`
    );

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
        `<div style="width: 100%; height: 100%; display: flex; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: white;"><p style="text-align: center; width:90%;word-wrap: break-word;">${textCircle}</p></div>`
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
    const total = data.a + data.b;
    const percentageA = getPercentage(data.a, total);
    const percentageB = getPercentage(data.b, total);

    donutGroup
      .selectAll("whatever")
      .data(data_ready)
      .join("path")
      .attr("d", d3.arc().innerRadius(12).outerRadius(radius))
      .attr("fill", (d) => color(d.data[0]))
      .style("opacity", 1);

    if (data.a != 0 && data.b != 0) {
      donutGroup
        .append("foreignObject") // Usar foreignObject en lugar de text
        .attr("x", 70) // Ajustar la posición x según sea necesario
        .attr("y", -40) // Ajustar la posición y según sea necesario
        .attr("width", radio * 5) // Ancho igual al diámetro del círculo
        .attr("height", radio * 2) // Alto igual al diámetro del círculo
        .html(
          `<div style="width: 100%; display: flex; flex-direction:column; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: black;">
          <div style="width: 100%; height: 100%; display: flex;  align-items:center; gap:8px">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="9" fill="#406AFF"/>
            </svg>
            <p>Correctly Assigned</p>
            <p><b>${data.b}</b> (${percentageB}%)</p>

          </div>
          <div style="width: 100%; height: 100%; display: flex;  align-items:center; gap:8px">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="9" fill="#FF4040"/>
            </svg>
            <p>Incorrectly Assigned
              <br> 
              or served without consent</p>
            <p style="align-self: baseline;"><b>${data.a}</b> (${percentageA}%)</p>
          </div>
        </div>`
        );
    } else if (data.a == 0 && data.b != 0) {
      donutGroup
        .append("foreignObject") // Usar foreignObject en lugar de text
        .attr("x", 70) // Ajustar la posición x según sea necesario
        .attr("y", -40) // Ajustar la posición y según sea necesario
        .attr("width", radio * 5) // Ancho igual al diámetro del círculo
        .attr("height", radio * 2) // Alto igual al diámetro del círculo
        .html(
          `<div style="width: 100%; display: flex; flex-direction:column; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: black;">
          <div style="width: 100%; height: 100%; display: flex;  align-items:center; gap:8px">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="9" cy="9" r="9" fill="#406AFF"/>
            </svg>
            <p>Correctly Assigned</p>
            <p><b>${data.b}</b> (${percentageB}%)</p>
          </div>
        </div>`
        );
    } else if (data.a != 0 && data.b == 0) {
      donutGroup
        .append("foreignObject") // Usar foreignObject en lugar de text
        .attr("x", 70) // Ajustar la posición x según sea necesario
        .attr("y", -40) // Ajustar la posición y según sea necesario
        .attr("width", radio * 5) // Ancho igual al diámetro del círculo
        .attr("height", radio * 2) // Alto igual al diámetro del círculo
        .html(
          `<div style="width: 100%; display: flex; flex-direction:column; justify-content: center; align-items:center;  font-size: ${fontSize}px; color: black;">
          <div style="width: 100%; height: 100%; display: flex;  align-items:center; gap:8px">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="9" cy="9" r="9" fill="#FF4040"/>
            </svg>
            <p>Incorrectly Assigned
              <br> 
              or served without consent</p>
            <p style="align-self: baseline;"><b>${data.a}</b> (${percentageA}%)</p>
          </div>
        </div>`
        );
    }
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
    alertColor,
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

  createCircleGroup(
    200,
    startPathY,
    radio,
    primaryColor,
    textCircle[0],
    score[0]
  );
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
    alertColor,
    textCircle[6],
    score[6]
  );

  createDonut({ a: 9, b: 20 }, 1000, firstChildCenter);
  createDonut({ a: 40, b: 20 }, 1000, firstChildCenter + columGap);
  createDonut({ a: 20, b: 20 }, 1000, firstChildCenter + columGap * 2);
  createDonut({ a: 0, b: 10 }, 1000, firstChildCenter + columGap * 3);
  createDonut({ a: 9, b: 20 }, 1000, firstChildCenter + columGap * 4);
});
</script>
<template>
  <div class="prueba" ref="prueba"></div>
</template>

<style scoped></style>
