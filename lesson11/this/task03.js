'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get perimetr() {
    return `${(this.width + this.height) * 2}см`;
  },

  get area() {
    return `${this.width * this.height}см`;
  },

  set widthNum(value) {
    this.width = value;
  },

  set heightNum(value) {
    this.height = value;
  },
};

rectangle.widthNum = 4;
rectangle.heightNum = 8;
console.log(rectangle.perimetr);
console.log(rectangle.area);
