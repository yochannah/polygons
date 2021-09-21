document.addEventListener("DOMContentLoaded", function() {

  var seed = document.getElementById("seed");

  // 1. get width of box
  // 2. get center
  // 3. build random polygon around it
  // 4. use 2 coords to build other polygons
  // 6. considerations:
  // maximum number of polygons?
  // overlaps?
  // colours?

  var middle = {
    h: seed.height.baseVal.value,
    w: seed.width.baseVal.value
  };

  createPolygon(generatePoints(), "#005577");

});

function generatePoints() {
  return [[30,30],[90,90],[100,20]];
}

function createPolygon(points, fill) {
  let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute("points", points);
  polygon.setAttribute("fill", fill);
  polygon.setAttribute("fill-opacity", 0.23);
  seed.appendChild(polygon);
}
