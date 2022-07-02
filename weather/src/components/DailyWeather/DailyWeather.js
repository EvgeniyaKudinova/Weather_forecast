import React from 'react';
import DayWeather from '../DayWeather/DayWeather';
import './index.css'

function DailyWeather({dailyWeather}) {
    //const dailyWeather = props.dailyWeather
    const firstDay = dailyWeather[0]
    console.log(firstDay)

    return (
      <div className="DailyWeather">
        <h2 className="DailyWeather_title">По дням</h2>
        <div className='DayList'>
          {dailyWeather.map((day) => {
          return <DayWeather 
            day = {day.dt}
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
