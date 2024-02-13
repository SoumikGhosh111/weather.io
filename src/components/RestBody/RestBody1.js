import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
import WbTwilightRoundedIcon from '@mui/icons-material/WbTwilightRounded';
import GrainRoundedIcon from '@mui/icons-material/GrainRounded';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { getCardinalDirection } from '../../functions/getCardinalDirection';
import { airQualityChecker } from '../../functions/airQualityChecker';
import { redableTimeFormat } from '../../functions/redableTimeFormat';
import { formatVisibility } from '../../functions/formatVisibility';
import { motion } from 'framer-motion';
import "./styles.css";

function RestBody1({ weatherData, airQuality, loading }) {
    const animate = JSON.stringify(weatherData); 

    const [windDirec, setWindDirec] = useState("");
    const [categoryOfAir, setCategory] = useState({});
    const [sunRise, setSunRise] = useState("");
    const [sunSet, setSunSet] = useState("");
    const [visibility, setVisibility] = useState([]);

    useEffect(() => {
        if (weatherData !== null) {
            setWindDirec(getCardinalDirection(weatherData.wind.deg));
            setSunRise(redableTimeFormat(weatherData.sys.sunrise));
            setSunSet(redableTimeFormat(weatherData.sys.sunset));
            setVisibility(formatVisibility(weatherData.visibility));
        }
        if (airQuality !== null) {
            setCategory(airQualityChecker(airQuality.list[0].main.aqi));
        }
    }, [weatherData, airQuality])
    return (
        <motion.div className='rest-body-1-wrapper'
            key={animate}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 1}}
        >
           <div className='rest-body-1-h3'>
           <h3>Today's Highlight</h3>
           </div>
            <div className='rest-body-1'>
                {!loading && weatherData !== null && airQuality !== null ? (
                    <>
                        <motion.div className='rest-body1-items'
                             key={animate}
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false }}
                             transition={{ type: "spring", duration: 1, delay: 0.1 }}
                        >
                            <span><WbSunnyOutlinedIcon /> Sunrise</span>
                            <span>{sunRise}</span>
                        </motion.div>
                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                             key={animate}
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false }}
                             transition={{ type: "spring", duration: 1, delay: 0.2 }}
                        >
                            <span><WbTwilightRoundedIcon /> Sunset</span>
                            <span>{sunSet}</span>
                        </motion.div>
                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                             key={animate}
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false }}
                             transition={{ type: "spring", duration: 1, delay: 0.3 }}
                        >
                            <span><AirRoundedIcon /> Wind</span>
                            <span>{`${Math.round(weatherData.wind.speed * 3.6)}Km/hr ${windDirec}`}</span>
                        </motion.div>
                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                             key={animate}
                             initial={{ opacity: 0, y: 50 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: false }}
                             transition={{ type: "spring", duration: 1, delay: 0.4 }}
                        >
                            <span><GrainRoundedIcon /> AQI</span>
                            <span><span className='aqi' style={{ background: categoryOfAir.clr, boxShadow: `0px 0px 10px 0.5px ${categoryOfAir.clr}` }}>{categoryOfAir.cat}</span></span>
                        </motion.div>
                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                            key={animate}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", duration: 1, delay: 0.5 }}
                        >
                            <span><WaterDropOutlinedIcon /> Humidity</span>
                            <span>{weatherData.main.humidity} %</span>
                        </motion.div>

                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                            key={animate}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", duration: 1, delay: 0.6 }}
                        >
                            <span><WavesOutlinedIcon /> Pressure</span>
                            <span>{weatherData.main.pressure} hpa</span>
                        </motion.div>

                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                            key={animate}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", duration: 1, delay: 0.7 }}
                        >
                            <span><DeviceThermostatOutlinedIcon /> Feels like</span>
                            <span>{Math.floor(weatherData.main.feels_like - 273)}&deg;c</span>
                        </motion.div>

                        <div className='hor-lin w-60s'></div>

                        <motion.div className='rest-body1-items'
                            key={animate}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ type: "spring", duration: 1, delay: 0.8 }}
                        >
                            <span><VisibilityOutlinedIcon /> Visibility</span>
                            <span>{`${visibility[0]} ${visibility[1]}`}</span>
                        </motion.div>


                    </>
                ) : (
                    <CircularProgress />
                )}
            </div>
        </motion.div>
    )
}

export default RestBody1