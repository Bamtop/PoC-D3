export const getPath = (
  firstPointX,
  firstPointY,
  endPointX,
  endPointY,
  childPosition,
  isCenter
) => {
  let mediumPointX1 = 0;
  let mediumPointY1 = 0;
  let mediumPointX2 = 0;
  let mediumPointY2 = 0;
  let numberX = 15;
  let numberY = 50;

  if (isCenter) {
    numberX = 35;
    numberY = 25;
  }

  if (childPosition === "up") {
    mediumPointX1 = (firstPointX + endPointX) / 2 - numberX;
    mediumPointY1 = (firstPointY + endPointY) / 2 + numberY;
    mediumPointX2 = (firstPointX + endPointX) / 2 + numberX;
    mediumPointY2 = (firstPointY + endPointY) / 2 - numberY;
  } else if (childPosition === "down") {
    mediumPointX1 = (firstPointX + endPointX) / 2 - numberX;
    mediumPointY1 = (firstPointY + endPointY) / 2 - numberY;
    mediumPointX2 = (firstPointX + endPointX) / 2 + numberX;
    mediumPointY2 = (firstPointY + endPointY) / 2 + numberY;
  }

  return (
    `M ${firstPointX} ${firstPointY} ` +
    `Q ${mediumPointX1} ${mediumPointY1} ${mediumPointX2} ${mediumPointY2} ` +
    `T ${endPointX} ${endPointY}`
  );
};

export const getPathWithoutCurve = (firstPointX, firstPointY, endPointX) => {
  return `M ${firstPointX} ${firstPointY} L ${endPointX} ${firstPointY}`;
};
