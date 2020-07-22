let XMLHttpRequest= require('xmlhttprequest').XMLHttpRequest
const  fetchData = (url_api)=>{
    return new Promise((resolve,reject)=>{       
        const xhttp= new XMLHttpRequest()
        xhttp.open('GET',url_api,true)  
            xhttp.onreadystatechange=(()=>{
            if(xhttp.readyState===4){
                (xhttp.status===200)
                    ? resolve( JSON.parse(xhttp.responseText))
                    : reject(new Error('Errror ', url_api))
            }
        });
        xhttp.send();
    });
}
let cityId="3688689" //Bogotá
let ApiKey="11963f9eba9096d1a0e7c05ecf934a2c"
let API=`http://api.openweathermap.org/data/2.5/forecast?id=${cityId}&units=metric&appid=${ApiKey}`

const anotherFunction= async(url_api)=>{
    try{
        const Bogota= await fetchData(url_api)
        console.log(Bogota)
        /*Constantes del DOM*/
        const imagen=document.getElementById("TodayWeather-icon")
        const TermperaturaHoy=document.getElementById("TodayWeather-TodayWeather")

        const FirstDaysForecast_card=document.getElementById("FirstDaysForecast_card")
        const  SecondDaysForecast_card= document.getElementById("SecondDaysForecast_card")
        /*Información de la API*/
        const BogotaIcon=Bogota.list[0].weather[0].icon
        const TomorrowIcon=Bogota.list[1].weather[0].icon
        const NextDayIcon=Bogota.list[10].weather[0].icon
        const LastDayIcon=Bogota.list[39].weather[0].icon
        const BogotaTemperatura=Bogota.list[0].main.temp
        const Descripcion=Bogota.list[0].weather[0].description
        const tomorrow_description=Bogota.list[1].weather[0].description
        const NextDay_description=Bogota.list[10].weather[0].description
        const LastDay_description=Bogota.list[39].weather[0].description
        var tomorrow_max=Bogota.list[1].main.temp_max
        const tomorrow_min=Bogota.list[1].main.temp_min
        var NextDaty_max=Bogota.list[10].main.temp_max
        const NextDay_min=Bogota.list[10].main.temp_min
        var LastDaty_max=Bogota.list[39].main.temp_max
        const LastDay_min=Bogota.list[39].main.temp_min

        FirstDaysForecast_card.innerHTML = `<img src="http://openweathermap.org/img/wn/${TomorrowIcon}@2x.png" alt=""  width="80%">
                                            <div class="DaysForecast-card-dates" id="tomorrow">

                                            </div>
                                            <div class="DaysForecast-card-number">
                                            <h4>${tomorrow_max}/${tomorrow_min}</h4>
                                            </div>
        `
        SecondDaysForecast_card.innerHTML =`
                                            <img src="http://openweathermap.org/img/wn/${NextDayIcon}@2x.png" alt=""  width="80%">
                                            <div class="DaysForecast-card-dates">
                                            <p>Friday</p>
                                            <p>${NextDay_description}</p>
                                            </div>
                                            <div class="DaysForecast-card-number">
                                            <h4>${NextDaty_max}/${NextDay_min}</h4>
                                            </div>

        `
        ThirdDaysForecast_card.innerHTML =`
                                            <img src="http://openweathermap.org/img/wn/${LastDayIcon}@2x.png" alt=""  width="80%">
                                            <div class="DaysForecast-card-dates">
                                            <p>Saturday</p>
                                            <p>${LastDay_description}</p>
                                            </div>
                                            <div class="DaysForecast-card-number">
                                            <h4>${LastDaty_max}/${LastDay_min}</h4>
                                            </div>

`
        const tomorrow=document.getElementById("tomorrow")
        imagen.innerHTML = `<img src="http://openweathermap.org/img/wn/${BogotaIcon}@2x.png" alt=""  width="80%">
                            <p style="margin-top:-20px">${Descripcion}</p>
        `
        TermperaturaHoy.innerHTML = `<h2>${BogotaTemperatura}<span>°C</span></h2>`
        tomorrow.innerHTML = `   <p>Thursday</p>
                                 <p>${tomorrow_description}</p>
        `
    }
    catch(error){
        console.error(error)
    }
}

console.log('Before')
anotherFunction(API)
console.log('After')
