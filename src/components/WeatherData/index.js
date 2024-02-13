import React, { useState, useEffect } from 'react';
import CurrentWeatherData from './CurrentWeatherData';
import FiveDaysForeCast from './FiveDaysForeCast';
import TodaysHighLight from './TodaysHighLight';
import WeatherHourlyData from './WeatherHourlyData';
import RestBody1 from '../RestBody/RestBody1';
import RestBody2 from '../RestBody/RestBody2';
import { WEATHER_CURRENT_DATA_API, OPTIONS_API_KEY } from '../../functions/weatherCurrentApi';
import { FiveDaysForeCast_API_URL, FiveDaysForeCast_API_KEY } from '../../functions/fiveDaysForeCast';
import { AIR_QUALITY_API_KEY, AIR_QUALITY_API_URL } from '../../functions/airQualityApi';
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';
import "./styles.css";

function WeatherData({ searchObj }) {
  let localyStoredObj = {}; 
  localyStoredObj = JSON.parse(localStorage.getItem("searchObj")); 
  const [weatherData, setWeatherData] = useState(null);
  const [forecast, setForeCast] = useState(null);
  const [airQuality, setAirQuality] = useState(null);
  const [loading1, setLoading1] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(true);
  const [lat, setLat] = useState(22.5726);
  const [long, setLong] = useState(88.3639);
  const [name, setName] = useState("empty");

  console.log(localyStoredObj, "This is the WEATHER SEARCH OBJ"); 

  useEffect(() => {
    if (searchObj.hasOwnProperty("label") && searchObj.hasOwnProperty("value")) {
      setName(searchObj.label);
      setLat(searchObj.value.lat);
      setLong(searchObj.value.long);
      getData();
      getFiveDaysData();
      getAirQualityData();
      // localStorage.setItem("searchObj", JSON.stringify(searchObj)); 
    }
  }, [searchObj, lat, long]);

  useEffect(() => {
    getData();
    getFiveDaysData();
    getAirQualityData();
  }, []);

  const getData = async () => {
    try {
      const res = await fetch(`${WEATHER_CURRENT_DATA_API}?lat=${lat}&lon=${long}&appid=${OPTIONS_API_KEY}`);
      const result = await res.json();
      console.log("This is form CurrentWeather comp", result);

      setWeatherData(result);
      setLoading1(false);
    }
    catch (e) {
      console.log(e, "This is the error");
      setLoading1(true);
      alert(e.message);
    }
  }

  // console.log(weatherData, "This is weahter data in weather comp"); 

  const getFiveDaysData = async () => {
    try {
      const response = await fetch(`${FiveDaysForeCast_API_URL}?lat=${lat}&lon=${long}&appid=${FiveDaysForeCast_API_KEY}`);
      // console.log(response, "FiveDays response"); 

      const result = await response.json();
      console.log("this is from five days result ", result);
      setForeCast(result);
      setLoading2(false);
    }
    catch (e) {
      console.log(e);
      setLoading2(true);
      alert(e.message);
    }
  }
  const getAirQualityData = async () => {
    try {
      const res = await fetch(`${AIR_QUALITY_API_URL}lat=${lat}&lon=${long}&appid=${AIR_QUALITY_API_KEY}`)
      const result = await res.json();
      console.log(result);
      setAirQuality(result);
      setLoading3(false);
    }
    catch (e) {
      console.log(e);
      setLoading3(true);
      alert(e.message);
    }
  }


  return (
    <>
      <div className='weather-comp'>
        {loading1 && loading2 && loading3 ? (
          <><CircularProgress sx={{ color: "white" }} /></>
        ) : (
          <>
            <motion.div className='current-fore'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              <CurrentWeatherData weatherData={weatherData} loading={loading1} name={name} h3={true} rest={false} isName={true} />
              <FiveDaysForeCast foreCast={forecast} loading={loading2} name={name} />
            </motion.div>
            <motion.div className='higlight-hourly'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              <div className='highlight-time-data'>
                <TodaysHighLight airQuality={airQuality} loading={loading3} weatherData={weatherData} />
              </div>
              <div className='hourly-time-data'>
                <h3>Hourly Data</h3>
                <WeatherHourlyData foreCast={forecast} loading={loading2} isDataArr={true} isWindDataArr={true} />
              </div>
            </motion.div>
          </>
        )}

      </div>
      <div className='weather-comp-mob-view'>
        
        {loading1 && loading2 && loading3 ? (
          <><CircularProgress sx={{ color: "white" }} /></>
        ) : (
          <>
            <motion.div className='current-fore'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              <CurrentWeatherData weatherData={weatherData} loading={loading1} name={name} h3={true} rest={false} isName={true} />
              <FiveDaysForeCast foreCast={forecast} loading={loading2} name={name} />
            </motion.div>
            <motion.div className='rest-body'
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ type: "spring", duration: 1, delay: 0.2 }}
            >
              <>
                  <RestBody1 weatherData={weatherData} airQuality={airQuality} loading={loading1}/>
                  <RestBody2 foreCast={forecast} loading={loading2}/>
              </>
            </motion.div>
          </>
        )}
      </div>
    </>

  )
}

export default WeatherData;
