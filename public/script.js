// console.log(process.env)
// console.log(apiKey)
async function fetchData(){
    const city = 'Markham';
    const res = await fetch (`http://localhost:5000/weather?city=${city}`);
    
    const record = await res.json();
    document.getElementById("city").innerHTML = record.name;
    document.getElementById("weather").innerHTML = record.weather[0].main;
    document.getElementById("temp").innerHTML = record.main.temp;
    document.getElementById("maxtemp").innerHTML = record.main.temp_max;
    document.getElementById("mintemp").innerHTML = record.main.temp_min;
}
fetchData();
