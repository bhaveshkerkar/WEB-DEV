// let btn = document.querySelector("button");

// btn.addEventListener("click", async () => {
//   let fact = await getFacts();
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFacts() {
//   try {
//     let res = await axios.get(url);
//     return res.data.fact;
//   } catch (e) {
//     console.log("Error", e);
//     return "No fact Found";
// //   }
// // }

// let btn = document.querySelector("button");
// let url = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//   let link = await getImage();
//   let img = document.querySelector("img");
//   img.setAttribute("src", link);
//   console.log(link);
// });

// async function getImage() {
//   try {
//     let res = await axios.get(url);
//     return res.data.message;
//   } catch (e) {
//     console.log("Error", e);
//     return "Image Not Found";
//   }
// }

const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const config = { headers: { Accept: "application/json" } };
    let res = await axios.get(url, config);
    console.log(res.data);
  } catch (err) {
    console.log("Error", err);
  }
}
