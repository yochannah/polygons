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

  let points = generatePoints(20, middle);
  for (var i = 0; i < points.length; i++) {
    createPolygon(points[i], "#005577", middle);
  }

});

//from MDN thx https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(original, size, bounds) {
  console.log(original);
  let negative = Math.random() <= 0.45;
  let newNum = original;
  if (negative) {
    newNum = newNum - Math.floor(Math.random() * size);
  } else {
    newNum = original + Math.floor(Math.random() * size);
  }

  if (newNum <= 0)
  {newNum = 0;}

  if (newNum > bounds.w) {
    return bounds.w;
  }
  if (newNum > bounds.h) {
    return bounds.h;
  }
  return newNum;
}


function wobblePointPair(pointPair, size, bounds) {
  let a = getRandomInt(pointPair[0], size, bounds),
    b = getRandomInt(pointPair[1], size, bounds);
  return [a, b];
}

function generatePoints(numberOfPoints, middle) {
  let starter = [
      [30, 30],
      [90, 90],
      [100, 20]
    ],
    resultSet = [],
    size = middle.h + middle.w / numberOfPoints / 2;
  for (var i = 0; i < numberOfPoints; i++) {
    if (i > 0) {
      resultSet.push([
        wobblePointPair((resultSet[i - 1][0]), size, middle),
        wobblePointPair((resultSet[i - 1][1]), size, middle),
        wobblePointPair((resultSet[i - 1][2]), size, middle)
      ]);
    } else {
      resultSet.push([
        wobblePointPair((starter[0]), size, middle),
        wobblePointPair((starter[1]), size, middle),
        wobblePointPair((starter[2]), size, middle)
      ]);
    }
  }
  return resultSet;
}

function createPolygon(points, fill, middle) {
  let polygon = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
  polygon.setAttribute("points", points);
  polygon.setAttribute("fill", fill);
  polygon.setAttribute("fill-opacity", 0.23);
  seed.appendChild(polygon);
}
