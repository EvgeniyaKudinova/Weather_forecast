import React from 'react';
import './index.css'


function DayWeather({dt, icon, tempDay, tempNight}) {

    let myDate = new Date(dt*1000);
    let thisDay = `${myDate.getDate()}.${myDate.getMonth() + 1}`
    let iconDay = 'http://openweathermap.org/img/w/' + icon + '.png'
    let nameDay = myDate.getDate()
    console.log(dt)

    switch(nameDay){
      case 0:
        nameDay = "Сб"
        break;
      case 1:
        nameDay = "Вс"
        break;
      case 2:
        nameDay = "Пн"
        break;
      case 3:
        nameDay = "Вт"
        break;
      case 4:
        nameDay = "Ср"
        break;
      case 5:
        nameDay = "Чт"
        break;
      case 6:
        nameDay = "Пт"
        break;
    }


    console.log(nameDay)
    //const [dateDay, setdateDay] = useState("---------");
    //setdateDay(data.current.dt)
    console.log(thisDay)

    return (
      <div className="DayWeather">
        <span className="DayWeather_nameDay">{nameDay}</span>
        <span className="DayWeather_title">{thisDay}</span>
        <div>
          <img src={iconDay} />
          <span className='Daily_temp'>{Math.round(tempDay)}°</span>
          <span className='Night_temp'>{Math.round(tempNight)}°</span>
        </div>
      </div>
    );
}

export default DayWeather;
