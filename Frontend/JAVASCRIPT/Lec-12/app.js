// async function greet() {
//   throw "404 Page Not Found ";
//   return "Hello";
// }

// greet()
//   .then((result) => {
//     console.log("Promise Was Resovled");
//     console.log("result was".result);
//   })

//   .catch((err) => {
//     console.log("Promise was Rejected With err", err);
//   });

// let demo = async () => {
//   return 5;
// };

// function getNum() {
//   return new Promise((resolve, reject) => {
//     console.log("");
//   });
// }
// async function demo() {
//   getNum();
// }

// h1 = document.querySelector("h1");

// function ChangeColor(color, delay) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 5) + 1;
//       if (num > 3) {
//         reject("Promise Rejected");
//       }

//       h1.style.color = color;
//       console.log(`Change Colour To ${color}`);
//       resolve("Color Chnaged!");
//     }, delay);
//   });
// }

// async function demo() {
//   try {
//     await ChangeColor("red", 1000);
//     await ChangeColor("yellow", 1000);
//     await ChangeColor("green", 1000);
//     ChangeColor("orange", 1000);
//   } catch (err) {
//     console.log(err);
//   }
//   let a = 5;
//   console.log(a);
//   console.log("New number = ", a + 3 );
// }

// let jeSonRes =
//   '{"fact": "The largest cat breed is the Ragdoll. Male Ragdolls weigh between 12 and 20 lbs (5.4-9.0 k)","length": 141}';
// let validRes = JSON.parse(jeSonRes);
// console.log(validRes.fact);

// let student = {
//   Name: "Bhavesh",
//   age: 21,
// };

// let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })

//   .then((data1) => {
//     console.log("data1:", data1.fact);
//     return fetch(url);
//   })

//   .then((res) => {
//     return res.json();
//   })

//   .then((data2) => {
//     console.log("data2", data2.fact);
//   })

//   .catch((err) => {
//     console.log("ERROR -", err);
//   });

let url = "https://catfact.ninja/fact ";

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("error", e);
  }
}
