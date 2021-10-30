import React, { useState, useEffect,Fragment } from 'react';
import styled from "styled-components";
import News from './News';
import axios from 'axios';
import { Row } from "react-bootstrap";

function Timeline({ className }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getProducts() {
            const product = await axios.get(
                'https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=qrj4aha7u2jMXKArXAGLsbQDXJE6qpVP'
            );
           
            setProducts(product.data.results);
        }

        getProducts();
    }, []);

    return (
        <>
            <div className={className}>
                <div className="newsfeed_header">
                    <h2>News</h2>
                </div>

                <Row className="card-container">
                    {products.map((value, index) => {
                        if(!value.multimedia){
                            return <Fragment key={index}></Fragment>
                        }
                        return <News key={index} item={value} />;
                    })}
                </Row>
            </div>
        </>

    )
}

export default styled(Timeline)`
.newsfeed_header{
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
.feed_header{
    position: sticky;
    top:0;
    background-color: white;
    z-index:100;
    border:1px solid #e6ecf0;
    padding:15px 20px;  
    
}
.card-container {
    margin-top: 25px;
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
}
@media screen and (max-width: 768px) {
    .newsfeed_header{
        width: 55vw;
    }
@media screen and (max-width: 385px) {
    .newsfeed_header{
        width: 50vw;
        margin-left: 50px;
        margin-bottom: 0px;
    }
 }
}
  `;
