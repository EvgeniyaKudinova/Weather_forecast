import './App.css';
import { useEffect, useState } from 'react';

/*Создаем переменные для API*/
/*ключ с сайта*/
const API_key = '599826b9e3c9c9280bcf4fd0e558d925'
const lat = '54.213860'
const lon = '49.618378'
const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`



function App() {
  /*хуко состояние для вывода пасмурности: нач состояние,начальное знач."--------" */
  /*создаются 2 переменные. 2-ая перем. использ.для обновл.состояния 1-ого*/
  const [cloudInfo, setcloudInfo] = useState("---------");
  const [cloudCity, setcloudCity] = useState("---------");
  const [cloudTemp, setcloudTemp] = useState("---------");
  const [cloudIcon, setcloudIcon] = useState("---------");

  const [feelsLike, setfeelsLike] = useState("---------");
  const [humidity, sethumidity] = useState("---------");
  const [visibility, setvisibility] = useState("---------");
  const [pressure, setpressure] = useState("---------");
  const [windSpeet, setwindSpeet] = useState("---------");
  const [sunrise, setsunrise] = useState("---------");
  
    useEffect(() => {
      /*Асинхронный(одновременный) запрос на получение данных*/
      const gettingWeather = async () =>{
        /*fetch - метод, позволяющий полностью прочитать url адрес и получить данные*/
        const api_url = await fetch(API);

        if (api_url.ok) {
          /*переводим данные в json формат*/
        const data = await api_url.json();
        /*выводим все то, что получили с url адреса*/
        console.log("Данные, которые получены в формате json",data);
        setcloudInfo(data.weather[0].description) /*получаем пасмурно, облачно ...*/
        setcloudCity(data.name)
        setcloudTemp(data.main.temp)
        setcloudIcon(data.weather[0].icon)
        console.log(cloudIcon);

        var iconCode = `http://openweathermap.org/img/w/${cloudIcon}.png`
        
        setfeelsLike(data.main.feels_like)
        sethumidity(data.main.humidity)
        setvisibility(data.visibility)
        setpressure(data.main.pressure)
        setwindSpeet(data.wind.speed)
        setsunrise(data.sys.sunrise)

        var UnixTime = sunrise
        console.log(UnixTime);
        var myDate = new Date(UnixTime*1000);
        var HH = myDate.getHours();
        var MM = myDate.getMinutes();
        var dateSunrise = HH + ":" + MM
        console.log(dateSunrise);

        console.log(new Date(sunrise*1000))

        }
        else{
          console.error("Возникла проблема с получением данных о погоде");
        }
        
      }
      gettingWeather()
    })


    return (
      <div className="App">
        {/*Текущее*/}
        <div className="current">

          <div className = "currentCity">{cloudCity}</div>
          <div className = "currentTemp">{Math.round(cloudTemp)}°</div>
          <div className = "currentInfo">{cloudInfo}</div>

          {/*
          <p><a href="lorem.html"><img src="/src/images/Rectangle1.png" /></a></p>
          */}
        </div>

        {/*Детали*/}
        <div class = "details">
          <p>Подробности</p>
          <div>По ощущениям</div> {Math.round(feelsLike)}°
          <div>Влажность</div> {humidity}%
          <div>Видимость</div> {(visibility)/1000} км
          <div>Восход</div> 
          <div>Давление</div> {pressure} мм
          <div>Ветер</div> {windSpeet} м/с
          <div>Закат</div>
        </div>


      </div>
    );
}

export default App;
