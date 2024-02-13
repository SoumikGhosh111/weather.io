import React, { useState, useEffect } from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import CircularProgress  from '@mui/material/CircularProgress';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import CurrentWeatherData from '../CurrentWeatherData';
import { motion } from 'framer-motion';
import { fetchCurrentTime } from '../../../functions/fetchCurrentTime';
import "./styles.css"; 



function FiveDaysForeCast({ foreCast, loading, name }) {
  const [fiveDaydata, setFiveDayData] = useState([]);
  const [currentTime, setCurrentTime] = useState(""); 
  const [place, setPlace] = useState(""); 
  const animation = JSON.stringify(foreCast); 
  const options = {hour: "numeric", minute: "numeric", hour12: false}; 
  console.log(name, "This is FIVEDAYFORECAST.JS"); 

  useEffect(()=> { 
    setCurrentTime(fetchCurrentTime()); 
    if(name.length !== 0){ 
      setPlace(name); 
    }
  }, [])
  console.log("This is time current", currentTime); 

  useEffect(() => {
    if (!loading && foreCast !== null) {
      let delay = 0; 
      setFiveDayData(
        foreCast.list.filter((item)=> { 
          let date = new Date(item.dt * 1000).toLocaleTimeString('en-US', options); 
          // console.log(date, "this is setFiveDayData"); 
          let tempArr = date.split(":"); 
          // console.log(parseInt(tempArr[0], 10), "This is kaju bora"); 
          return parseInt(tempArr[0], 10) === currentTime; 
        })
        .map((item)=> { 
          let date = new Date(item.dt * 1000)
          const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
          const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]
          let dayOfTheWeek = daysOfWeek[date.getDay()]; 
          let month = months[date.getMonth()];  
          let day = date.getDate();  
          delay+=.1;
          return { 
            ...item, 
            dayOfTheWeek: dayOfTheWeek, 
            month: month, 
            day: day, 
            delay: delay,
          }
        })
      )
      console.log("this is forecast from five Days at Bankuris", fiveDaydata);
    }

  }, [foreCast]); 

  useEffect(() => { 
    setPlace(name); 
  }, [name]); 

  return (
    <motion.div className='five-day-div'
    key={animation}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false }}
    transition={{ type: "spring", duration: 1 }}
    >
      <h3>Five Day Wether Forecast</h3>
      {!loading && fiveDaydata.length > 0 ? (
        <motion.div className='five-days-accordian-data'>
          {fiveDaydata.map((item, indx) => (
            <motion.div
            key={animation}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ type: "spring", duration: 1, delay: item.delay * 0.1, }}
            >
              <Accordion key={indx}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{color: "var(--white)"}}/>}
                aria-controls={`panel${indx + 1}-content`}
                id={`panel${indx + 1}-header`}
                className='accordion-summery'
                sx={{background: "var(--darkgrey)", color:" var(--white)"}}
              >
               <Typography>
                  <div className='typography'>
                    <div className='img-temp'>
                      <span className='weather-img'><img src= {`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}/></span>
                      <span className='test'>{Math.floor(item.main.temp - 273)}&deg; </span>
                    </div>
                    <span className='day-month'>{item.day} {item.month}</span>
                    <span className='week-day'>{item.dayOfTheWeek}</span>
                  </div>
               </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{background: "var(--darkgrey)", color:" var(--white)"}}>
                <CurrentWeatherData weatherData={item} loading={loading} name={place} h3={false} rest={true} isName={false}/>
              </AccordionDetails>
            </Accordion>
            </motion.div>
            
          ))}
        </motion.div>
      ) : (
        <><CircularProgress/></>
      )}


    </motion.div>
  )
}

export default FiveDaysForeCast