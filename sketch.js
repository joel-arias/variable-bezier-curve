// properties

let size = 10;

// define curves
let curve1 = [
  [127, 190],
  [132, 286],
  [190, 339],
  [271, 339]
];

let curve2 = [
  [271, 339],
  [350, 339],
  [381, 279],
  [381, 191]
];

// function pointInCurve( point0, point1, point2, point3, t){
//   let pointInCurve = [
//     (
//       point0[0]*(-inT**3 + 3*inT**2 - 3*inT + 1) +
//       point1[0]*(3*inT**3 - 6*inT**2 + 3*inT) +
//       point2[0]*(-3*inT**3 + 3*inT**2) +
//       point3[0]*(inT**3)
//     ),
//     (
//       point0[1]*(-inT**3 + 3*inT**2 - 3*inT + 1) +
//       point1[1]*(3*inT**3 - 6*inT**2 + 3*inT) +
//       point2[1]*(-3*inT**3 + 3*inT**2) +
//       point3[1]*(inT**3)
//     )
//   ]
//   return pointInCurve;
// }

function drawHandlers(points, handlerSize){
  let index = 0;

  for (var i in points) {
    if (points.hasOwnProperty(i)) {
      index = points.index(points[i]);

      let handlerX = points[i][0] - handlerSize/2;
      let handlerY = points[i][1] - handlerSize/2;

      fill(255);
      ellipse(handlerX, handlerY, handlerSize, handlerSize);

    }
  }
}

function setup(){
  canvas(1440, 760);
}

function draw(){
  drawHandlers(curve1, size);
  drawHandlers(curve2, size);
}
