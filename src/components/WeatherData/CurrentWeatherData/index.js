import React, { useState, useEffect } from 'react';
import { WEATHER_CURRENT_DATA_API, OPTIONS_CURRENT_DATA } from '../../../functions/weatherCurrentApi';
import { readableDateFormat } from '../../../functions/readableDateFormat';
import { getCardinalDirection } from '../../../functions/getCardinalDirection';
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import AirRoundedIcon from '@mui/icons-material/AirRounded';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import { motion } from 'framer-motion';
import "./styles.css"

function CurrentWeatherData({ weatherData, loading, name, h3, rest, isName }) {
  console.log(name);
  const [date, setDate] = useState("");
  const [place, setPlace] = useState("");
  const [windDirec, setWindDirec] = useState("");
  const animation = JSON.stringify(weatherData);
  useEffect(() => {
    if (!loading && weatherData !== null) {
      setDate(readableDateFormat(weatherData.dt));
      if (name === "empty" && weatherData.name) {
        setPlace(weatherData.name);
      } else {
        setPlace(name);
      }
      setWindDirec(getCardinalDirection(weatherData.wind.deg));
    }

    console.log(weatherData, "CuuentWeather dATA");
  }, [weatherData, name])

  return (
    <motion.div className='current-weather-div'
      key={animation}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ type: "spring", duration: 1 }}
    >
      {!loading && weatherData !== null ? (
        <>
          {h3 && (
            <motion.h3
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1 }}
            >Now</motion.h3>
          )}

          <div className='temp-img'>
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              {Math.floor(weatherData.main.temp - 273)}&deg;c
            </motion.h1>
            <motion.img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.4 }}
            />
          </div>
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 1, delay: 0.6 }}
            className='weather-desc'
          >
            {weatherData.weather[0].description}
          </motion.span>
          <div className='hor-lin'></div>

          <motion.span className='date'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 1, delay: 0.8 }}
          ><CalendarTodayRoundedIcon /> {date}</motion.span>
          {isName && (
            <motion.span className='loc'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 1 }}
            ><LocationOnOutlinedIcon /> {place}</motion.span>
          )}
          {rest && (
            <>
              <motion.span className='loc'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}
              ><AirRoundedIcon />Wind Speed  {Math.round(weatherData.wind.speed * 3.6)} Km/hr</motion.span>
              <motion.span className='loc'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}
              ><WaterDropOutlinedIcon />Humid  {weatherData.main.humidity} %</motion.span>
              <motion.span className='loc'
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}
              ><ExploreOutlinedIcon />Wind Direction  {windDirec}</motion.span>
            </>
          )}
        </>
      ) : (
        <><CircularProgress /></>
      )
      }
    </motion.div>
  )
}

export default CurrentWeatherData; 