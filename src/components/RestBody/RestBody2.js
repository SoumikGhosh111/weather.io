import React from 'react';
import "./styles.css";
import WeatherHourlyData from '../WeatherData/WeatherHourlyData'

function RestBody2({ foreCast, loading }) {
  return (
    // <div className='rest-body-2'>
      <div className='rest-body-2-weather-hourly-data'>
      <div className='h3-div'><h3>Hourly Data</h3></div>
        <><WeatherHourlyData foreCast={foreCast} loading={loading} isDataArr={true} isWindDataArr={false}/></>
        <><WeatherHourlyData foreCast={foreCast} loading={loading} isDataArr={false} isWindDataArr={true}/></>
      </div>

  )
}

export default RestBody2