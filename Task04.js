cities = []
for (let i = 1; i <= 5; i++) {
  let city = prompt("Enter a city name");
  cities.push(city);
}
alert("\nYou entered the following cities.");
for (let index in cities) {
  console.log(cities[index]);
}
