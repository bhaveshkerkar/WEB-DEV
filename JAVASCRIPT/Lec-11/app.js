// function saveToDB(data) {
//   return new Promise((resolve, reject) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       resolve("Success: data was saved");
//     } else {
//       reject("failure: weak Connection");
//     }
//   });
// }

// saveToDB("Bhavesh Kerkar")
//   .then((result) => {
//     console.log("data was saved");
//     console.log("Result of Promise:", result);
//     return saveToDB("Bhavesh");
//   })

//   .then((result) => {
//     console.log("data2 was saved");
//     console.log("Result of Promise:", result);
//     return saveToDB("Kerkar");
//   })

//   .then((result) => {
//     console.log("data3 was saved");
//     console.log("Result of Promise:", result);
//   })
//   .catch((error) => {
//     console.log("Promise Was Rejected");
//     console.log("Error of promise:", error);
// //   });

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
