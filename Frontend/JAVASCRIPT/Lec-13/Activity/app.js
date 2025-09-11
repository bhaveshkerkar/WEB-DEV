let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  console.log(country);

  let colArr = await getCollage(country);
  console.log(colArr);
});

async function getCollage(country) {
  try {
    let res = await axios.get(url + country);
    return res.data;
  } catch (err) {
    console.log("Error: ", err);
    return [];
  }
}
