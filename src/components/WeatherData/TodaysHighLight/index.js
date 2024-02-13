import React, { useEffect, useState } from 'react'
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import WavesOutlinedIcon from '@mui/icons-material/WavesOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import { airQualityChecker } from '../../../functions/airQualityChecker';
import { redableTimeFormat } from '../../../functions/redableTimeFormat';
import { formatVisibility } from '../../../functions/formatVisibility';
import { motion } from 'framer-motion';
import "./styles.css";

function TodaysHighLight({ airQuality, loading, weatherData }) {
    // console.log(weatherData, "this is today highlight weather Data");
    // console.log(loading, "this is roday highlight");
    // console.log(airQuality, "this is roday highlight");
    const [sunRise, setSunRise] = useState("");
    const [sunSet, setSunSet] = useState("");
    const [visibility, setVisibility] = useState([]);
    const [categoryOfAir, setCategory] = useState({});
    const animation1 = JSON.stringify(weatherData); 
    const animation2 = JSON.stringify(weatherData); 
    const forNormWidth = {
        fontSize: "33px",
    }

    useEffect(() => {
        if (weatherData !== null) {
            setSunRise(redableTimeFormat(weatherData.sys.sunrise));
            setSunSet(redableTimeFormat(weatherData.sys.sunset));
        }
        if (weatherData !== null) {
            setVisibility(formatVisibility(weatherData.visibility));
            console.log(visibility, "this is visibility");
        }
        if (airQuality !== null) {
            setCategory(airQualityChecker(airQuality.list[0].main.aqi));
        }
        console.log(weatherData, "THIS IS TORAY HIGHLIGHT")
    }, [weatherData, airQuality])

    return (
        <motion.div className='today-comp'
            key={animation1}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 1 }}

        >
            <h3>Today's highlights</h3>
            {!loading && weatherData !== null && airQuality !== null ? (
                <>

                    <div className='highlights-for-today'>

                        <div className='air-sun-rise-set'>
                            <motion.div className='air-qual-index'
                                // key={animation2}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                <motion.div className='category'
                                    //  key={animation2}
                                     initial={{ opacity: 0, y: 50 }}
                                     whileInView={{ opacity: 1, y: 0 }}
                                     viewport={{ once: false }}
                                     transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                >
                                    <h4>Air Quality Index</h4>
                                    {/* box-shadow: 0px 0px 10px 1px white; */}
                                    <span style={{ background: categoryOfAir.clr, boxShadow: `0px 0px 10px 0.5px ${categoryOfAir.clr}` }}>{categoryOfAir.cat}</span>
                                </motion.div>
                                <div className='air-qual'>
                                    <AirRoundedIcon sx={forNormWidth} />
                                    <motion.div className='PM25'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                                    >
                                        <span className='text'>PM25</span>
                                        <span>{airQuality.list[0].components.pm2_5}</span>
                                    </motion.div>
                                    <motion.div className='SO2'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    >
                                        <span className='text'>SO2</span>
                                        <span>{airQuality.list[0].components.so2}</span>
                                    </motion.div>
                                    <motion.div className='NO2'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.5 }}
                                    >
                                        <span className='text'>NO2</span>
                                        <span>{airQuality.list[0].components.no2}</span>
                                    </motion.div>
                                    <motion.div className='O3'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.6 }}
                                    >
                                        <span className='text'>O3</span>
                                        <span>{airQuality.list[0].components.o3}</span>
                                    </motion.div>
                                </div>
                            </motion.div>
                            <motion.div className='sun'
                                // key={animation1}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                <h4>Sunrise & Sunset</h4>
                                <motion.div className='rise-set'
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: false }}
                                    transition={{ type: "spring", duration: 1, delay: 0.2 }}
                                >
                                    <motion.div className='sun-rise'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.3 }}
                                    >
                                        <LightModeOutlinedIcon sx={forNormWidth} />
                                        <span className='sun-rise-span'><span className='text'>Sun rise</span>{sunRise}</span>
                                    </motion.div>
                                    <motion.div className='sun-set'
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    >
                                        <DarkModeOutlinedIcon sx={forNormWidth} />
                                        <span className='sun-set-span'><span className='text'>Sun set</span>{sunSet}</span>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </div>
                        <div className='humidity-press-visibility-feels'>
                            <motion.div className='humidity'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                Humidity
                                <div className='data'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    ><WaterDropOutlinedIcon sx={forNormWidth} /></motion.div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.6 }}
                                    >{weatherData.main.humidity} <span className='text-1'>%</span></motion.span>
                                </div>
                            </motion.div>
                            <motion.div className='pressure'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                Pressure
                                <div className='data'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    >
                                        <WavesOutlinedIcon sx={forNormWidth} />
                                    </motion.div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.6 }}
                                    >{weatherData.main.pressure} <span className='text-1'>hPa</span></motion.span>
                                </div>
                            </motion.div>
                            <motion.div className='visibility'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                Visibility
                                <div className='data'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    >
                                        <VisibilityOutlinedIcon sx={forNormWidth} />
                                    </motion.div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.6 }}
                                    >{visibility[0]} <span className='text-1'>{visibility[1]}</span></motion.span>
                                    {console.log(visibility)}
                                </div>
                            </motion.div>
                            <motion.div className='feels-like'
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: false }}
                                transition={{ type: "spring", duration: 1, delay: 0.2 }}
                            >
                                Feels Like
                                <div className='data'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.4 }}
                                    >
                                        <DeviceThermostatOutlinedIcon sx={forNormWidth} />
                                    </motion.div>
                                    <motion.span
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: false }}
                                        transition={{ type: "spring", duration: 1, delay: 0.6 }}
                                    >{Math.floor(weatherData.main.feels_like - 273)}<span className='text-1'>&deg;c</span></motion.span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </>
            ) : (
                <CircularProgress />
            )}


        </motion.div>
    )
}

export default TodaysHighLight;