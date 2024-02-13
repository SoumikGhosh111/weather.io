import React from 'react';
import "./styles.css";
import logoImage from "../../assets/logoImage.png"
import openWeather from "../../assets/openweather-1.webp";
import rapidApi from "../../assets/Rapod.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import { RWebShare } from 'react-web-share';


function Footer() {
    return (
        <div className='footer'>
            {/* <div className='logo-heding'>
            <div className='logo-img'>
                <img
                    src={logoImage}
                />
            </div>
            <h2>
                Weather.io
            </h2>
        </div> */}
            <div className='footer-text'>
                © 2024 Soumik Ghosh. All Rights Reserved. Powered by &nbsp; <img className='footer-img' src={openWeather} />&nbsp; <span className='hid'>OpenWeather&nbsp;</span>&&nbsp;<img className='footer-img' src={rapidApi} />&nbsp;<span className='hid'>Rapid api</span>
            </div>
            <div className='social-handles'>
                <div className=''>
                    <a className='social-handles-items' href='https://www.instagram.com/sanjughosh0_0/'><InstagramIcon /></a>
                </div>
                <div >
                    <a className='social-handles-items' href='https://www.facebook.com/profile.php?id=100010224462223'><FacebookOutlinedIcon /></a>
                </div>
                <div >
                    <a className='social-handles-items' href='mailto:soumikbuie2001@gmail.com'><AlternateEmailRoundedIcon /></a>
                </div>
                <div >
                    <a className='social-handles-items' href='https://github.com/SoumikGhosh111'> <GitHubIcon /></a>
                </div>
                <div className='social-handles-items'>
                    <RWebShare 
                        
                        data={{
                            text: "Why fear when Weather.io is here ",
                            url: "Eta amar Project Baler",
                            title: "Weather.io",
                        }}
                        onClick={() => console.log("shared successfully!")}
                    >
                        <ShareRoundedIcon/>
                    </RWebShare>
                </div>

            </div>
        </div>
    )
}

export default Footer