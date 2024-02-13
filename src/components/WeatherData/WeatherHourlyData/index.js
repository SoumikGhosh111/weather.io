import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded';
import WindSpeedIndicator from './WindSpeedIndicator';
import "./styles.css"

function WeatherHourlyData({ foreCast, loading, isDataArr, isWindDataArr }) {
    const [dataArr, setDataArr] = useState([]);
    const [windDataArr, setWindDataArr] = useState([]); 
    
    useEffect(() => {
        if (foreCast !== null && !loading) {
            let delay = 0; 
            setDataArr(foreCast.list.slice(0,8).map((item)=> { 
                let tempArr = new Date(item.dt * 1000).toLocaleTimeString().split(" "); 
                let timeArr = tempArr[0].split(":");
                // let time = `${timeArr[0]} ${tempArr[1]}`;
                 let time = `${timeArr[0]} ${tempArr[1] ? (tempArr[1]):("00")}`;
                delay+=0.1
                return{ 
                    ...item, 
                    time: time,
                    delay: delay, 
                }
            })); 
            setWindDataArr(foreCast.list.slice(0,8).map((item)=> { 
                let tempArr = new Date(item.dt * 1000).toLocaleTimeString().split(" "); 
                let timeArr = tempArr[0].split(":");
                // let time = `${timeArr[0]} ${tempArr[1]}`;
                 let time = `${timeArr[0]} ${tempArr[1] ? (tempArr[1]):("00")}`;
                delay+=0.1
                return{ 
                    ...item, 
                    time: time,
                    delay: delay, 
                }
            }))
            console.log(foreCast, "This is the weather ForeCast...from WeatherHourlyData");
        }
    }, [foreCast])
    let animation; 
   
    return (
        <div className="hourly-data">
           
            {!loading && dataArr.length > 0 ? (
                <>

                    {isDataArr && dataArr.map((item) => (
                        <motion.div className='hourly-data-inner-container'
                        key={`hourly-data-genl-data-${item.dt}${item.weather[0].icon}-${item.main.temp}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", duration: 1, delay: item.delay }}>
                            <div className='time'>
                                {item.time}
                            </div>
                            <div className='icon-image'>
                                <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/>
                            </div>
                            <div className='temp'>
                                {Math.floor(item.main.temp - 273)}&deg;
                            </div>
                        </motion.div>
                    ))}

                    {isWindDataArr && windDataArr.map((item)=>(
                        <motion.div className='hourly-data-inner-container'
                        key={`hourly-data-wind-data-${item.dt}${item.weather[0].icon}-${item.main.temp}`}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ type: "spring", duration: 1, delay: item.delay }}>
                            <div className='time'>
                                {item.time}
                            </div>
                            <div className='icon-arrow' style={{transform: `rotate(${item.wind.deg}deg)`}}>
                                
                                <WindSpeedIndicator />
                            </div>
                            <div className='temp'>
                                {Math.round(item.wind.speed * 3.6)} km/h
                            </div>
                        </motion.div>
                    ))}
                </>
            ) : (
                <>Loading . . . </>
            )}

        </div>
    )
}

export default WeatherHourlyData
