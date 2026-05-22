const apiKey = "7accea11443a72bda9c387f67bdf9172";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Enter city name");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);

        const data = await response.json();

        console.log(data);

        if (data.cod !== 200) {
            alert(data.message);
            return;
        }

        document.getElementById("weatherBox").style.display = "block";

        document.getElementById("cityName").innerHTML = data.name;

        document.getElementById("temp").innerHTML =
            Math.round(data.main.temp) + "°C";

        document.getElementById("description").innerHTML =
            data.weather[0].description;

        document.getElementById("humidity").innerHTML =
            data.main.humidity + "%";

        document.getElementById("wind").innerHTML =
            data.wind.speed + " km/h";

        const icon = data.weather[0].icon;

        document.getElementById("weatherIcon").src =
            `https://openweathermap.org/img/wn/${icon}@4x.png`;

    } catch (error) {

        console.log(error);

        alert("Error fetching weather");

    }
}