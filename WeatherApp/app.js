const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

const API = 'http://api.openweathermap.org/data'

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")

const getweather = async (city) => {
    weather.innerHTML = `<h2> Loading... <h2>`

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    console.log(response);
    const data = await response.json()
    console.log(data);
    return showWeather(data)

}

const showWeather = (data) => {
    if(data.cod == "404"){
        weather.innerHTML = `<h2> City not found <h2>`
        return;
    }
    weather.innerHTML = `
    </div>
        <div ><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="">
        </div>
        <div>
            <h2>${data.main.temp}</h2>
            <h4>${data.weather[0].main}</h4>
        </div>
    </div>`

}
form.addEventListener('submit', function (event) {
    getweather(search.value);
    event.preventDefault()  
})