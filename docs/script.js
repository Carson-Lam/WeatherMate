async function fetchData() {
    // window.addEventListener("load",() =>  {
        if (!navigator.geolocation){
            cityOutput.textContent="Geolocation fetching failed";
            return;
        }
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const {longitude, latitude} = position.coords;
                const res = await fetch(`https://weathermate-pr27.onrender.com/weather?lat=${latitude}&lon=${longitude}`);
                const record = await res.json();
                document.getElementById("cityDisplay").innerHTML = record.name;
                document.getElementById("weather").innerHTML = record.weather[0].main;
                document.getElementById("temp").innerHTML = record.main.temp;
                document.getElementById("maxtemp").innerHTML = record.main.temp_max;
                document.getElementById("mintemp").innerHTML = record.main.temp_min;
            },
            (error) => {
                cityOutput.textContent = `Error: ${error.message}`;
            }
        )
    // });

    document.getElementById("weatherForm").addEventListener("submit", async function (event) {
        try {
            event.preventDefault();
            const city = document.getElementById('city').value;
            const res = await fetch(`https://weathermate-pr27.onrender.com/weather?city=${city}`);
            const record = await res.json();
            document.getElementById("cityDisplay").innerHTML = record.name;
            document.getElementById("weather").innerHTML = record.weather[0].main;
            document.getElementById("temp").innerHTML = record.main.temp;
            document.getElementById("maxtemp").innerHTML = record.main.temp_max;
            document.getElementById("mintemp").innerHTML = record.main.temp_min;
        } catch (error) {
            alert("Could not fetch weather data for entered city!")
            document.getElementById("cityDisplay").innerHTML = " ";
            document.getElementById("weather").innerHTML = " ";
            document.getElementById("temp").innerHTML = " ";
            document.getElementById("maxtemp").innerHTML = " ";
            document.getElementById("mintemp").innerHTML = " ";
            console.error("There was an error fetching the weather data:", error);
        }
    });
}
fetchData();

document.querySelector("#close").addEventListener("click", function() {
    document.querySelector(".popup").style.display = "none";
});