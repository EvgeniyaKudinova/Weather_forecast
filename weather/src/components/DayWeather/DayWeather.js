import React from 'react';
import './index.css'


function DayWeather({dt, icon, tempDay, tempNight}) {

    let myDate = new Date(dt*1000);
    let thisDay = `${myDate.getDate()}`
    let iconDay = `http://openweathermap.org/img/wn/${icon}@2x.png`
    let nameDay = myDate.getDate()
    console.log(dt)

    switch(nameDay){
      case 0:
        nameDay = "Чт"
        break;
      case 1:
        nameDay = "Пт"
        break;
      case 2:
        nameDay = "Сб"
        break;
      case 3:
        nameDay = "Вс"
        break;
      case 4:
        nameDay = "Пн"
        break;
      case 5:
        nameDay = "Вт"
        break;
      case 6:
        nameDay = "Ср"
        break;
    }


    console.log(nameDay)
    //const [dateDay, setdateDay] = useState("---------");
    //setdateDay(data.current.dt)
    console.log(thisDay)

    return (
      <div className="DayWeather">
        <div className='DayTitle'>
          <span className="DayWeather_nameDay">{nameDay}</span>
          <span className="DayWeather_title">{thisDay}</span>
        </div>
        <img src={iconDay} />
        <div className='DayWeather_temp'>
          <span className='Day_temp'>{Math.round(tempDay)}°</span>
          <span className='Night_temp'>{Math.round(tempNight)}°</span>
        </div>
      </div>
    );
}

export default DayWeather;
