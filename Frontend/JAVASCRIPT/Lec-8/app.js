//Array methods ->
//1] forEach
// let arr = [1, 2, 3, 4, 5];

// function print(el) {
//   console.log(el);
// }

// arr.forEach(print);

// arr.forEach(function (el) {
//   console.log(el);
// });
// ----------------

// 2] Map

// let num = [1, 2, 3, 4];

// let double = num.map(function (el) {
//   return el * 2;
// });

// 3] Filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// let ans = arr.filter((el) => {
//   return el < 5; //el %2 == 0;
// });

// 4] every

// let total = [2, 4].every((el) => el % 2 == 0);

// 5] some

// let total1 = [1, 2, 3, 4, 5].some((el) => el % 2 == 0); //true
// let total2 = [1, 3, 5].some((el) => el % 2 == 0); //false

// 6] reduce

// let nums = [1, 2, 3, 4, 5];
// let finalVal = nums.reduce((res, el) => {
//   return res + el;
// });

// practice que 1]

// let nums = [10, 20, 30, 40, 1];

// let ans = nums.every((el) => el % 10 == 0);

// console.log(ans);4

// min Number que2]

// let nums = [10, 20, 30, 40, 333];

// let min = nums.reduce((min, el) => {
//   if (min < el) {
//     return min;
//   } else {
//     return el;
//   }
// });

// console.log(min);

// default paramters
// function sum(b = 4, a) {
//   return a + b;
// }

// console.log(sum(1));

// spread
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(...arr);

// rest

// destructuring

let names = ["Bhavesh", "Devraj", "Vedang", "Vicky", "Rohit", "Javascript"];

let [...others] = names; //let [Winner,...others] = names;

// destructuring objects

const student = {
  name: "bhavesh",
  age: 21,
  city: "Sindhudurg",
  mobile_no: 1234567789,
  email_Id: "Bhaveshkerkargmail.com",
};

let { mobile_no: contact, city: town } = student;
