import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styled from "styled-components";
import Covid from './Covid';
import Weather from './Weather';
function Notifications({ className }) {
    const [covid, setCovid] = useState([]);
    const [weather, setWeather] = useState();

    useEffect(() => {
        async function getCovid() {
            const covids = await axios.get(
                'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
            );
            setCovid(covids.data);
        }
        getCovid();
    }, []);


    useEffect(() => {
        async function getWeather() {
            const { data } = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=28903f17048bc501423e1705810eba9f'
            );

            setWeather(data);
        }
        getWeather();
    }, []);

    return (
        <>
            <div className={className}>
                <div className="notification">
                    <div className="notifeed_header">
                        <h2>Notfications</h2>
                    </div>
                    {covid.map((value, index) => {
                        return <Covid key={index} item={value} />;
                    })}
                    {weather ? (
                         <Weather item={weather} /> 
                    ) : (
                        <div>loading</div>
                    )}


                </div>
            </div>
        </>
    )
}

export default styled(Notifications)`
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
