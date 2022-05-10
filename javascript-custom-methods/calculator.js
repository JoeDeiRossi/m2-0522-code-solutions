/* exported calculator */

let calculator = {
  add: function (x, y) {
    return x + y;
  },

  subtract: function (x, y) {
    return x - y;
  },

  multiply: function (x, y) {
    return x * y;
  },

  divide: function (x, y) {
    return x / y;
  },

  square: function (x) {
    return x * x;
  },

  sumAll: function (numbers) {
    let sum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  },

  getAverage: function (numbers) {
    const sum = this.sumAll(numbers);
    return sum / numbers.length;
  }
};
