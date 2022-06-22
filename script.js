console.log("not Okay");


let weather={
    apiKey:"f6be4f8a8a2d30dd84fa7c16bd8517e0",          //weather class var
    fetchWeather:function(city){        //   //weather class func
    fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&units=metric&appid=" +
          this.apiKey
     )
     .then((response) => {
        if (!response.ok) {
            alert("No weather found");
            throw new error("No weather found");
        }
        return response.json();
     })
     .then((data)=>this.displayWeather(data));
    },
    displayWeather:function(data){                 //weather class func
        const{name}=data;
        const{icon,description}=data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
       // console.log(data);

        document.querySelector(".city").innerText="Weather in "+name;
        document.querySelector(".icon").src="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText =   "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText =     "Wind speed: " + speed + " km/h";
        document.querySelector(".weather").classList.remove("loading");
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

    document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

    document.querySelector(".search-bar").addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
      weather.search();
    }
  });

weather.fetchWeather("Everett");
 
