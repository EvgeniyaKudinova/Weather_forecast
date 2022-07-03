import React from 'react';
import './index.css'
import { ReactComponent as SunSvg1 } from './Line1.svg';
import { ReactComponent as SunSvg2 } from './Line2.svg';
import { ReactComponent as WindSpeed } from './Wind.svg';
import { ReactComponent as Sunrise } from './Sunrise.svg';
import { ReactComponent as Sunset } from './Sunset.svg';

function Details({details}){

    const feelsLike = details.feels_like
    const humidity = details.humidity
    const visibility = details.visibility
    const pressure =  ((details.pressure * 0.750064).toFixed(2)) + ' мм'
    const speedWind = details.wind_speed

    let sunriseDate = new Date(details.sunrise * 1000)
    let sunrDate = sunriseDate.getHours() + ':' + sunriseDate.getMinutes()

    let sunsetDate = new Date(details.sunset * 1000)
    let sunsDate = sunsetDate.getHours() + ':' + sunsetDate.getMinutes()

    return(
        <div className='details'>
            <span className='thisDay_details'>Подробности</span>
            <div className='details_Line'>
                <span className='sunSvg1'><SunSvg1 /></span>
                <span className='sunSvg2'><SunSvg2 /></span>
            </div>
            <div className='rowInfo'>
                <div>
                    <div className='detailsDayText'>
                        <div className='detailsInfo'>
                            <span id='detailsInfo_title'>По ощущениям</span>
                            <span id='info'>{Math.round(feelsLike)}°</span>
                        </div>

                        <div className='detailsInfo'>
                            <span id='detailsInfo_title'>Влажность</span>
                            <span id='info'>{humidity}%</span>
                        </div>

                        <div className='detailsInfo'>
                            <span id='detailsInfo_title'>Видимость</span>
                            <span id='info'>{(visibility)/1000} км</span>
                        </div>
                    </div>

                    <div className='detailsDayText'>
                        <div className='detailsInfo'>
                            <span id='detailsInfo_title'>Давление</span>
                            <span id='info'>{pressure}</span>
                        </div>

                        <div className='detailsInfo'>
                            <span id='detailsInfo_title'>Ветер</span>
                            <span id='info'><WindSpeed />{Math.round(speedWind)} м/с</span>
                        </div>
                    </div>
                </div>

                <div className='sunPosition'>
                    <div className='sunrise'>
                        <span id='detailsInfo_title'>Восход</span>
                        <div className='sunInfo'>
                            <Sunrise />
                            <span id='infoSunTime'>{sunrDate}</span>
                        </div>
                    </div>

                    <div className='sunset'>
                        <span id='detailsInfo_title'>Закат</span>
                        <div className='sunInfo'>
                        <Sunset />
                        <span id='infoSunTime'>{sunsDate}</span>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Details;


/* current: {dt: 1656841590, sunrise: 1656807223, sunset: 1656868642, temp: 23.43, feels_like: 23.03,…}
clouds: 5
dew_point: 11.16
dt: 1656841590
feels_like: 23.03
humidity: 46
pressure: 1010
sunrise: 1656807223
sunset: 1656868642
temp: 23.43
uvi: 5.43
visibility: 10000 */