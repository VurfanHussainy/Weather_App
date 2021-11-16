//!Open Weather Api
let API_KEY = "c036ba5c72baf7989f571041ac485654";

let search = document.getElementById("search");
search.addEventListener("keyup", (e) => {
  if (e.keyCode === 13) {
    let searchText = e.target.value;
    Getweather(searchText);
  }
});

async function Getweather(cityName) {
  let data = await window.fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&&units=metric&appid=${API_KEY}`
  );
  let response = await data.json();
  console.log(response);
  let { name } = response;
  let details = response.weather[0];
  let { main, description, icon } = details;
  document.getElementById("template").innerHTML = `
<section id="weatherApp">
<article>
<header><h1>${response.main.temp}&deg;c</h1></header>
<main>
<h2>${name}</h2>
<p>${main}</p>
<p>${description}</P>
<p><img src=https://openweathermap.org/img/wn/${icon}@2x.png /></p>
<p>Min Temp:${response.main.temp_min}&degc</p>
<p>Max Temp:${response.main.temp_max}&degc</p>
<p>humidity:${response.main.humidity}</p>
</main>
</article>
</section>
`;
}

setInterval(() => {
  let date = new Date().toLocaleTimeString();
  let AmorPm = date > 12 ? "PM" : "AM";
  document.getElementById("time").innerHTML = `${date} ${AmorPm}`;
}, 1000);
var x = document.getElementById("demo");
