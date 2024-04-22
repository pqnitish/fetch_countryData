let cont = document.getElementById("container");
//console.log(cont);
let apiUrl =
  "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries";
async function getData() {
  let res = await fetch(apiUrl);
  let finalRes = await res.json();
  showCountryData(finalRes.data);
}
function showCountryData(arr) {
  //console.log(arr);
  cont.innerHTML = ""; // clear the previous content
  arr.forEach(function (ele, i) {
    let div = document.createElement("div");
    div.className = "country-data";
    let countryName = document.createElement("p");
    countryName.innerHTML = `CountryName: ${ele.country}`;
    let pop = document.createElement("h3");
    pop.innerHTML = `Population: ${ele.population}`;
    let rank = document.createElement("h2");
    rank.innerHTML = `Rank: ${ele.Rank}`;
    let id = document.createElement("h4");
    id.innerHTML = `Id: ${ele.id}`;
    div.append(countryName, pop, rank, id);
    cont.append(div);
  });
}
async function sortCountryData() {
  let sortUrl = `${apiUrl}?sort=population&order=desc`;
  try {
    let res = await fetch(sortUrl);
    let sortedData = await res.json();
    showCountryData(sortedData.data);
  } catch (error) {
    console.error(error);
  }
}
getData();
