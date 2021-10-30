import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";
import Weather from './Weather';
function Test({ className }) {
    const [weather, setWeather] = useState();
    
    useEffect(() => {
        async function getWeather() {
            const weathers = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=ae362cc629b1a438db3b5782c3b4fff3'
            );

            setWeather(weathers.data);
        console.log(weathers.data)  
           
        }
        getWeather();
           console.log(weather)     
    }, []);

    return (
        <>
            <div className={className}>
                <div className="notification">
                    <div className="notifeed_header">
                        <h2>Notfications</h2>
                    </div>
                   
                    <Weather item={weather} />

                </div>
            </div>
        </>
    )
}

export default styled(Test)`
.notifeed_header{
    position: sticky;
    top:0;
    background-color: white;
    z-index:100;
    border:1px solid #e6ecf0;
    padding:15px 20px; 
    margin-left: 100px;
    width: 72.5vw;
    border-bottom:8px solid #e6ecf0 ;
}

@media screen and (max-width: 768px) {
    .notifeed_header{
      width: 50vw;
   }
} 

  `;
