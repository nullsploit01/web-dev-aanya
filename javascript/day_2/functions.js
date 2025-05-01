// function addAndPrint(number, numberToAddWith) {
//   number += numberToAddWith;
//   console.log("NUMBER -> ", number);
// }

// let a = 0;
// addAndPrint(a, 5);

// let b = 0;
// addAndPrint(b, 7);

// let c = 0;
// addAndPrint(c, 8);

// let d = 0;
// addAndPrint(d, 15);

function toThePower(number, exponent) {
  let result = 1;

  for (let i = 0; i < exponent; i += 1) {
    result *= number;
  }

  return result;
}

// const res = toThePower(4, 0);
// console.log(res);

const toThePower = (number, exponent) => {
  let result = 1;

  for (let i = 0; i < exponent; i += 1) {
    result *= number;
  }

  return result;
};

const res = toThePower(4, 3);
console.log(res);
