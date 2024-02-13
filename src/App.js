import { useEffect, useState } from 'react';
import Header from './components/Header';
import WeatherData from './components/WeatherData';
import './App.css';
import Footer from './components/Footer';

function App() {
  const [searchObj, setSearchObj] = useState({}); 
  const [isWeatherDataRendered, setWeatherDataRendered] = useState(false); 
  const onSearchChange =(data)=> { 
    setSearchObj(data)
    console.log(data, "this is current location from App.js"); 
  }

 setTimeout(()=> { 
  setWeatherDataRendered(true); 
 }, 3000 ); 
  return (
    <div>
      <Header setSearchObj = {onSearchChange}/> 
       <WeatherData searchObj = {searchObj}/>
      {isWeatherDataRendered && (<Footer />)}
    </div>
  );
}

export default App;
