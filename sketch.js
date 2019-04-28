// properties

let size = 10;
let columns;
let rows;
let resolution = 100;
let t = 0;
let numOfCircles = 20;

// define curves
let curve1 = [
  [100, 400],
  [100, 100],
  [400, 100],
  [400, 400]
];

function getPointInCurve( p0, p1, p2, p3, t){
  a = [(t * p0[0]) + ((1-t) * p1[0]), (t * p0[1]) + ((1-t) * p1[1])]
  b = [(t * p1[0]) + ((1-t) * p2[0]), (t * p1[1]) + ((1-t) * p2[1])]
  c = [(t * p2[0]) + ((1-t) * p3[0]), (t * p2[1]) + ((1-t) * p3[1])]
  d = [(t * a[0]) + ((1-t) * b[0]), (t * a[1]) + ((1-t) * b[1])]
  e = [(t * b[0]) + ((1-t) * c[0]), (t * b[1]) + ((1-t) * c[1])]
  pointInCurve = [(t * d[0]) + ((1-t) * e[0]), (t * d[1]) + ((1-t) * e[1])]
  return pointInCurve;
}

function drawHandlers(points, handlerSize){
  let index = 0;

  for (var i in points) {
    if (points.hasOwnProperty(i)) {
      index = points.indexOf(points[i]);

      fill(0);
      ellipse(points[i][0], points[i][1], handlerSize, handlerSize);

    }
  }
}

function drawTrace(numberOfCircles, points, t, circleWidth, circleHeight){
  let increment = 0;

  for (var i = 0; i < numberOfCircles+1; i++) {
      let nextTPoint = getPointInCurve(points[0], points[1], points[2], points[3], t);
      ellipse(nextTPoint[0], nextTPoint[1], circleWidth, circleHeight);
      increment = 1 / numberOfCircles
      t += increment
  }
}

function setup(){
  createCanvas(500, 500);
  columns = canvas.width/resolution;
  rows = canvas.height/resolution;
}

function draw(){

  background(255);
  drawHandlers(curve1, size);

  let tPoint = getPointInCurve(curve1[0], curve1[1], curve1[2], curve1[3], t);
  drawTrace(numOfCircles, curve1, t, size, size);
}
