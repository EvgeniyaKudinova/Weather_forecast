import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css'

function DailyWeather({dailyWeather}) {
    //const dailyWeather = props.dailyWeather
    const firstDay = dailyWeather[0]
    console.log(firstDay)

    //если пусто, то мы не возвращаем jsx разметку, а возв. 0      
    // Лучше делать проверку по длине массива 
     // if (dailyWeather.length) {
    if(firstDay === undefined){
      return null
    }

    return (
      <div className="DailyWeather">
        <h2 className="DailyWeather_title">По дням</h2>
        <div className='DayList'>
          {/*берем массив dailyWeather, принимает элемент day
          проходимся по массиву и преобразуем этот массив в jsx элемент*/}
          {dailyWeather.map((day) => {
          return <DayWeather
            key={day.dt} //особенность реакта
            dt = {day.dt}
            icon = {day.weather[0].icon}
            tempDay = {day.temp.day}
            tempNight = {day.temp.night}

          />
          })}
        </div>
      </div>
    );
}

export default DailyWeather;
