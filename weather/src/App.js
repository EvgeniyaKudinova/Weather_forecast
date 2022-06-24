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
const [cloudDescription, setcloudDescription] = useState("---------");


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
      setcloudDescription(data.weather[0].description) /*получаем пасмурно, облачно ...*/
      //console.log(cloudDescription);
      }
      else{
        console.error("Возникла проблема с получением данных о погоде");
      }
    }
    gettingWeather()
  })


  return (
    <div className="App">
      <h2>Привет</h2>
      {cloudDescription}
    </div>
  );
}

export default App;
