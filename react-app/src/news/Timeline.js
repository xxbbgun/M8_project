import React, { useState, useEffect } from 'react'
import News from './News';
import axios from 'axios';
import { Row } from "react-bootstrap";
import styled from "styled-components";
function Timeline() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const products = await axios.get(
                'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qrj4aha7u2jMXKArXAGLsbQDXJE6qpVP'
            );
            console.log(products);
            setProducts(products.data.results);
        }

        getProducts();
    }, []);
    
    return (


        <Row className="card-container">
            {products.map((value,index) => {
                return <News key={index} item={value} />;
            })}
        </Row>

    )
}

export default styled(Timeline)`
.card-container {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
  }`;
