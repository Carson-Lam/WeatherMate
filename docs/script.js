// console.log(process.env)
// console.log(apiKey)
async function fetchCityList(){
    const response = await fetch('current.city.list.min.json');
    const cities = await response.json();
    return cities;
}
async function fetchData() {
    document.getElementById("weatherForm").addEventListener("submit", async function (event) {
        try {
            event.preventDefault();
            const city = document.getElementById('city').value;
            const cityList = await fetchCityList();
            const cityExists = cityList.some(c => c.name.toLowerCase() === city.toLowerCase());
            if (!cityExists) {
                alert("City not found in the list!");
                return;
              }
            const res = await fetch(`https://weathermate-pr27.onrender.com/weather?city=${city}`);
            const record = await res.json();
            document.getElementById("cityDisplay").innerHTML = record.name;
            document.getElementById("weather").innerHTML = record.weather[0].main;
            document.getElementById("temp").innerHTML = record.main.temp;
            document.getElementById("maxtemp").innerHTML = record.main.temp_max;
            document.getElementById("mintemp").innerHTML = record.main.temp_min;
        } catch (error) {
            console.error("There was an error fetching the weather data:", error);

        }
    });
}
fetchData();