'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get perimetr() {
    return `${(this._width + this._height) * 2}см`;
  },

  get area() {
    return `${this._width * this._height}см`;
  },

  set width(value) {
    this._width = value;
  },

  set height(value) {
    this._height = value;
  },
};

rectangle.width = 10;
rectangle.height = 5;
console.log(rectangle.perimetr);
console.log(rectangle.area);
