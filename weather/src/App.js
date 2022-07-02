import './App.css';
import { useEffect, useState } from 'react';
import DailyWeather from './components/DailyWeather/DailyWeather';

/*Создаем переменные для API*/
/*ключ с сайта*/
const API_key = '599826b9e3c9c9280bcf4fd0e558d925'
const lat = '54.213860'
const lon = '49.618378'

//const API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric&lang=ru`
//формируем get запрос
const API = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${API_key}&lang=ru&units=metric`
console.log(API)


function App(props) {
  /*хуко состояние для вывода пасмурности: нач состояние,начальное знач."--------" */
  /*создаются 2 переменные. 2-ая перем. использ.для обновл.состояния 1-ого*/
  const [cloudTemp, setcloudTemp] = useState("---------");
  const [cloudIcon, setcloudIcon] = useState("---------");
  const [cloudDescription, setDescription] = useState("---------");

  
  const [dailyWeather, setdailyWeather] = useState([]);
  
  //const [cloudCity, setcloudCity] = useState("---------");
 

  /*const [feelsLike, setfeelsLike] = useState("---------");
  const [humidity, sethumidity] = useState("---------");
  const [visibility, setvisibility] = useState("---------");
  const [pressure, setpressure] = useState("---------");
  const [windSpeet, setwindSpeet] = useState("---------");
  const [sunrise, setsunrise] = useState("---------");*/


  
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
          setcloudTemp(data.daily[0].temp.day)
          setcloudIcon('http://openweathermap.org/img/wn/' + data.daily[0].weather[0].icon + '@2x.png') /*2х - четче становится картинка*/
          setDescription(data.daily[0].weather[0].description) /*получаем пасмурно, облачно ...*/

          //достает из данных дни
          setdailyWeather(data.daily)

          //setcloudCity(data.name)
          /*setfeelsLike(data.main.feels_like)
          sethumidity(data.main.humidity)
          setvisibility(data.visibility)
          setpressure(data.main.pressure)
          setwindSpeet(data.wind.speed)
          setsunrise(data.sys.sunrise)

          var UnixTime = sunrise
          console.log(UnixTime);
          var myDate = new Date(UnixTime*1000);
          console.log(myDate.toLocaleTimeString("ru", {
          timeStyle: "short",})); /*установили время восхода без секунд с нулями впереди*/

          

        }
        else{
          console.error("Возникла проблема с получением данных о погоде");
        }
        
      }
      //вызов функции
      gettingWeather()
    }, [] )

    
    return (
      <div className="App">
        {/*Текущее*/}
        <div className="current">
          <div className = "currentCity">Димитровград</div>
          <div className = "currentTemp"><img src={cloudIcon} width="100" height="100"></img>{Math.round(cloudTemp)}°</div>
          <div className = "currentDescription">{cloudDescription}</div>
        </div>

        <DailyWeather dailyWeather = {dailyWeather} />

         {/*<SunSvg />*/}

        {/*Детали
         <div className = "details">
          <p>Подробности</p>
          <div className='feelsLike'>По ощущениям</div> {Math.round(feelsLike)}° 
          <div>Влажность</div> {humidity}% 
          <div>Видимость</div> {(visibility)/1000} км
          <div>Восход</div>
          <div>Давление</div> {pressure} мм
          <div>Ветер</div> {windSpeet} м/с
          <div>Закат</div>
         </div>*/}
      </div>
    );
}

export default App;
