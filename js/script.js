const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b0f756832dmsh3ea3412f2051e92p1083a8jsn6ca2ffd247a8",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};

const getWeather = (city) => {
  cityName.innerHTML = city;

  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      cloud_pct.innerHTML = response.cloud_pct;
      temp.innerHTML = response.temp;
      feels_like.innerHTML = response.feels_like;
      humidity.innerHTML = response.humidity;
      humidity2.innerHTML = response.humidity;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed2.innerHTML = response.wind_speed;
      wind_degrees.innerHTML = response.wind_degrees;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};
submit.addEventListener("click", (e) => {
  e.preventDefault();
  getWeather(city.value);
});

getWeather("Delhi");

fetch(
  "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London",
  options
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    london_cloud_pct.innerHTML = response.cloud_pct;
    london_temp.innerHTML = response.temp;
    london_feels_like.innerHTML = response.feels_like;
    london_humidity.innerHTML = response.humidity;
    london_min_temp.innerHTML = response.min_temp;
    london_max_temp.innerHTML = response.max_temp;
    london_wind_speed.innerHTML = response.wind_speed;
    london_wind_degrees.innerHTML = response.wind_degrees;
    london_sunrise.innerHTML = response.sunrise;
    london_sunset.innerHTML = response.sunset;
  })

  .catch((err) => console.error(err));
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bengaluru",
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      bengaluru_cloud_pct.innerHTML = response.cloud_pct;
      bengaluru_temp.innerHTML = response.temp;
      bengaluru_feels_like.innerHTML = response.feels_like;
      bengaluru_humidity.innerHTML = response.humidity;
      bengaluru_min_temp.innerHTML = response.min_temp;
      bengaluru_max_temp.innerHTML = response.max_temp;
      bengaluru_wind_speed.innerHTML = response.wind_speed;
      bengaluru_wind_degrees.innerHTML = response.wind_degrees;
      bengaluru_sunrise.innerHTML = response.sunrise;
      bengaluru_sunset.innerHTML = response.sunset;
    })
  
    .catch((err) => console.error(err));
    fetch(
      "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        mumbai_cloud_pct.innerHTML = response.cloud_pct;
        mumbai_temp.innerHTML = response.temp;
        mumbai_feels_like.innerHTML = response.feels_like;
        mumbai_humidity.innerHTML = response.humidity;
        mumbai_min_temp.innerHTML = response.min_temp;
        mumbai_max_temp.innerHTML = response.max_temp;
        mumbai_wind_speed.innerHTML = response.wind_speed;
        mumbai_wind_degrees.innerHTML = response.wind_degrees;
        mumbai_sunrise.innerHTML = response.sunrise;
        mumbai_sunset.innerHTML = response.sunset;
      })
    
      .catch((err) => console.error(err));
      fetch(
        "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata",
        options
      )
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          kolkata_cloud_pct.innerHTML = response.cloud_pct;
          kolkata_temp.innerHTML = response.temp;
          kolkata_feels_like.innerHTML = response.feels_like;
          kolkata_humidity.innerHTML = response.humidity;
          kolkata_min_temp.innerHTML = response.min_temp;
          kolkata_max_temp.innerHTML = response.max_temp;
          kolkata_wind_speed.innerHTML = response.wind_speed;
          kolkata_wind_degrees.innerHTML = response.wind_degrees;
          kolkata_sunrise.innerHTML = response.sunrise;
          kolkata_sunset.innerHTML = response.sunset;
        })
      
        .catch((err) => console.error(err));

        submit_lucknow.addEventListener("click", (e) => {
          e.preventDefault();
          getWeather("Lucknow");
        });
        submit_nyc.addEventListener("click", (e) => {
          e.preventDefault();
          getWeather("New York");
        });
        submit_paris.addEventListener("click", (e) => {
          e.preventDefault();
          getWeather("Paris");
        });
        submit_chandigarh.addEventListener("click", (e) => {
          e.preventDefault();
          getWeather("Chandigarh");
        });
  
