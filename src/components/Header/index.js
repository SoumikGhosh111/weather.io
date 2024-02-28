import React, {useState, useEffect} from 'react'
import logoImage from "../../assets/logoImage.png"
import "./styles.css"; 
import MyLocationRoundedIcon from '@mui/icons-material/MyLocationRounded';
import SearchComp from './Search';
import "./styles.css"; 

// searchObj = { 
//     value{ 
//         lat: , 
//         long: ,
//     }, 
//     label: ,
// }



function Header({setSearchObj}) {
    // const [position, setPoition] = useState(null); 
    const [error, setError] = useState(""); 
    // const [pos, setPos] = useState(null) ; 
    const onSearchChange = (inputData) => { 
        setSearchObj(inputData); 
    }
  
    const handleSuccess = (position) => { 
        setSearchObj({ 
            label: "empty", 
            value: { 
                lat: position.coords.latitude,
                long: position.coords.longitude,
            }
        })
        console.log(position); 
       
    }
    const handleError = (error) => { 
        setError(`Error Code: ${error.code} - ${error.message}`);
        alert(`Error Code: ${error.code} - ${error.message}`)
    }
    const handleClick = () => { 
        if(!navigator.geolocation){ 
            setError(`Error Code: ${error.code} - ${error.message}`); 
            alert(`Error Code: ${error.code} - ${error.message}`)
        }else{ 
            navigator.geolocation.getCurrentPosition(handleSuccess, handleError); 
        }
    }

    // console.log(pos, "tHIS IS HEADER"); 
    console.log(error, "THIS IS ERROR IN THE HEADER"); 

  return (
    <div className='header-comp'> 
        <div className='logo-heding'>
            <div className='logo-img'>
                <img
                    src={logoImage}
                />
            </div>
            <h2>
                Weather.io
            </h2>
        </div>

        <div className='search-div'>
            <SearchComp onSearchChange = {onSearchChange}/>
        </div>

        <div className='button-div'>
            <button onClick={handleClick}>
                <MyLocationRoundedIcon/>
                <span className='button-div-text'>Current Location</span>
            </button>
        </div>
    </div>
  )
}

export default Header; 