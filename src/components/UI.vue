<script setup>
import * as d3 from "d3";
import { sankey, sankeyLinkHorizontal } from "d3-sankey";
import { ref, onMounted } from "vue";
const treeChartRef = ref();

const items = {
  nodes: [
    { node: 0, name: "node0", id: "node0", color: "red" },
    { node: 1, name: "node1", id: "node1", color: "orange" },
    { node: 2, name: "node2", id: "node2", color: "blue" },
    { node: 3, name: "node3", id: "node3", color: "green" },
    { node: 4, name: "node4", id: "node4", color: "brown" },
  ],
  links: [
    { source: "node0", target: "node1", value: 1, color: "red" },
    { source: "node1", target: "node2", value: 2, color: "orange" },
    { source: "node1", target: "node3", value: 2, color: "orange" },
    { source: "node0", target: "node4", value: 3, color: "red" },
  ],
};

onMounted(() => {
  console.log("items", items);
  const width = 500;
  const height = 800;
  const nodeWidth = 30;
  const nodeHeight = 160;
  const nodePadding = 200;

  const ENABLE_LINKS_GRADIENTS = true;

  const svg = d3
    .select(treeChartRef.value)
    .attr("viewBox", [0, -100, width, height + 200]);

  const s = sankey()
    .nodeId((d) => d.name)
    .nodeWidth(80)
    .nodePadding(100)
    .extent([
      [1, 1],
      [width, height],
    ])(items);

  const { nodes, links } = sankey()
    .nodeId((d) => d.name)
    .nodeWidth(nodeWidth)
    .nodePadding(nodePadding)
    .extent([
      [1, 1],
      [width, height - nodeHeight],
    ])(items);

  svg
    .append("g")
    .attr("stroke", "#fff")
    .attr("stroke-width", "0")
    .selectAll("rect")
    .data(nodes)
    .join("rect")
    .attr("x", (d) => d.x0)
    .attr("y", (d) => d.y0)
    .attr("height", (d) => 160)
    .attr("width", (d) => d.x1 - d.x0)
    .attr("fill", (d) => "red")
    .append("title")
    .text((d) => `${d.name}`);

  const link = svg
    .append("g")
    .attr("fill", "none")
    .attr("stroke-opacity", 0.7)
    .selectAll("g")
    .data(links)
    .join("g");
  //.style("mix-blend-mode", "multiply");

  if (ENABLE_LINKS_GRADIENTS) {
    const gradient = link
      .append("linearGradient")
      .attr("id", (d) => (d.uid = `${d.source.id}-to-${d.target.id}`))
      .attr("gradientUnits", "userSpaceOnUse")
      .attr("x1", (d) => d.source.x1)
      .attr("x2", (d) => d.target.x0);

    gradient
      .append("stop")
      .attr("offset", "0%")
      .attr("stop-color", (d) => d.source.color);

    gradient
      .append("stop")
      .attr("offset", "100%")
      .attr("stop-color", (d) => d.target.color);
  }

  link
    .append("path")
    .attr("d", sankeyLinkHorizontal())
    .attr("stroke", (d) =>
      !ENABLE_LINKS_GRADIENTS ? d.color : `url(#${d.uid})`
    )
    .attr("stroke-width", (d) => Math.max(1, d.width));

  link
    .append("title")
    .text((d) => `${d.source.name} → ${d.target.name}\n${d.value}`);

  svg
    .append("g")
    .attr("font-family", "sans-serif")
    .attr("font-size", 10)
    .selectAll("text")
    .data(nodes)
    .join("text")
    .attr("x", (d) => d.x0 + 3)
    .attr("y", (d) => (d.y1 + d.y0) / 2)
    .attr("dy", "0.35em")
    .attr("text-anchor", "start")
    .text((d) => d.name);
});
</script>
<template>
  <h2>sankey demo</h2>

  <svg ref="treeChartRef" class="demo"></svg>
</template>

<style scoped>
svg {
  padding-inline: max(2rem, calc(50% - 24rem));
}
</style>
