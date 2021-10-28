import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Covid from './Covid';
import Weather from './Weather';
function Notifications() {
    const [covid, setCovid] = useState([]);
    const [weather, setWeather] = useState([]);

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
            const weathers = await axios.get(
                'https://api.openweathermap.org/data/2.5/weather?q=Thailand&appid=ae362cc629b1a438db3b5782c3b4fff3'
            );
            
            setWeather(weathers.data);
        }
        getWeather();
        
    }, []);

    return (
        <>

            <Row className="card-container">
                {covid.map((value, index) => {
                    return <Covid key={index} item={value} />;
                })}
                <Weather item={weather} />;
            </Row>
        </>
    )
}

export default styled(Notifications)`
.card-container {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }`;
