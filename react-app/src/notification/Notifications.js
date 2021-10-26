import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Row } from "react-bootstrap";
import styled from "styled-components";
import Covid from './Covid';
function Notifications() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                'https://covid19.ddc.moph.go.th/api/Cases/today-cases-all'
            );
            console.log(products);
            setProducts(products.data);
        }

        getProducts();
    }, []);
    
    return (


        <Row className="card-container">
            {products.map((value,index) => {
                return <Covid key={index} item={value} />;
            })}
        </Row>

    )
}

export default styled(Notifications)`
.card-container {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }`;
