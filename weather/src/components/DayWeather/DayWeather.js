import React from 'react';
import './index.css'


function DayWeather({dt, icon, tempDay, tempNight}) {

    let myDate = new Date(dt*1000); // Переменные которые мы не изменяем записываем через const 
    let thisDay = `${myDate.getDate()}` // today
    let iconDay = `http://openweathermap.org/img/wn/${icon}@2x.png`
    let nameDay = myDate.getDay()
    console.log(dt) // Мусор

      // Вместо свчиа лучше сделать это через словарь 
  // const dayOfWeekDictionary = {
  //   0: 'Вс',
  //   1: 'Пн',
  //   2: 'Вт',
  //   3: 'Ср',
  //   4: 'Чт',
  //   5: 'Пт',
  //   6: 'Сб',
  // }
  // nameDay = dayOfWeekDictionary[nameDay]

    switch(nameDay){
      case 0:
        nameDay = 'Вс'
        break;
      case 1:
        nameDay = 'Пн'
        break;
      case 2:
        nameDay = 'Вт'
        break;
      case 3:
        nameDay = 'Ср'
        break;
      case 4:
        nameDay = 'Чт'
        break;
      case 5:
        nameDay = 'Пт'
        break;
      case 6:
        nameDay = 'Сб'
        break;
      case 7:
        nameDay = 'Вс'
        break;
    }

    // Добавь пожалуйста функцию определения Сегодня/завтра Как первые два дня на макете 


    console.log(nameDay)
    //const [dateDay, setdateDay] = useState("---------");
    //setdateDay(data.current.dt)
    console.log(thisDay)

    return (
      <div className='DayWeather'>
        <div className='DayTitle'>
          <span className='DayWeather_nameDay'>{nameDay}</span>
          <span className='DayWeather_title'>{thisDay}</span>
        </div>
        {/* Атрибут alt у img очень важный */}
        {/* <img src={iconDay} alt='day weather icon' /> */}
        <img src={iconDay} />
        <div className='DayWeather_temp'>
          <span className='Day_temp'>{Math.round(tempDay)}°</span>
          <span className='Night_temp'>{Math.round(tempNight)}°</span>
        </div>
      </div>
    );
}

export default DayWeather;
