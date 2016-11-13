"use strict"

function Before(x, y) {
  this.x = x;
  this.y = y;
}

Before.prototype.getArea = function() {
  return this.x * this.y;
}

var b = new Before(2, 3);
console.log("b.x = %d, b.y = %d, b.area = %d", b.x, b.y, b.getArea());

class After {

  constructor(args) {
    this.x = (args.x)? args.x: 0;
    this.y = (args.y)? args.y: 0;
  }

  getArea() {
    return this.x * this.y;
  }
}

var a = new After({x: 4, y: 5});
console.log("a.x = %d, a.y = %d, a.area = %d", a.x, a.y, a.getArea());

if (a.z) {
  console.log("a.z is found."); 
} else {
  console.log("a.z is not found.");
}
