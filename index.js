var button = document.querySelector(".button");
var input = document.querySelector(".inputValue");
var names = document.querySelector(".names");
var des = document.querySelector(".des");
var temp = document.querySelector(".temp");

button.addEventListener("click", () => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&appid=6f9d204a9f397da7a86985eca08c6020"
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var desValue = data["weather"][0]["description"];
      var celsius = tempValue - 273.15;
      names.innerHTML = nameValue;
      temp.innerHTML = celsius.toPrecision(2);
      des.innerHTML = desValue;
    })

    .catch((err) => alert("issue"));
});
