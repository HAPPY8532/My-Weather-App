const search = document.querySelector('#search')
const btn = document.querySelector('button')
const weather = document.querySelector('.weather')
const api_key = 'e115158606cc8faa56c43b86283e7ee7'



const GetWeather = async (city) => {
    weather.innerHTML = `<h2 style="margin-top:10px">Loading...</h2>`
    const url = ` https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
    const respons = await fetch(url)
    const data = await respons.json()
    console.log(data);

    return ShowWeather(data)
}

const ShowWeather = (data) => {

    if (data.cod === "404") {
        weather.innerHTML = `<h2 style="margin-top:20px">City Not Found</h2>`
    }

    weather.innerHTML = `
    
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            <h1 class="temp">${data.main.temp}°C</h1>
            <h2 class="city">${data.name}</h2>
            <div class="details">
                <div class="col">
                    <img src="./img/weather.png" alt="">
                    <div>
                        <p class="humidity">${data.main.humidity}%</p>
                        <p>humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="./img/wind.png" alt="">
                    <div>
                        <p class="wind">${data.wind.speed}km/h</p>
                        <p>wind speed</p>
                    </div>
                </div>
            </div>
    
    `

}

btn.addEventListener("click", function (event) {
    GetWeather(search.value)
    event.preventDefault();

})
search.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        GetWeather(search.value);
        event.preventDefault();
    }
});