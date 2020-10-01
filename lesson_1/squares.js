let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];

function totalArea(shapes) {
  return shapes.reduce((sum, shape) => {
    return sum + shape.reduce((area, side) => {
      return area * side;
    });
  }, 0);
}

console.log(totalArea(rectangles));

function totalSquareArea(shapes) {
  return shapes.reduce((sum, shape) => {
    if (shape[0] === shape[1]) {
      return sum + (shape[0]**2);
    } else {
      return sum;
    }
  }, 0);
}

console.log(totalSquareArea(rectangles));