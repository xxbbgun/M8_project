import React, { useState, useEffect } from 'react'
import styled from "styled-components";
import FlipMove from 'react-flip-move';
import TweetBox from "./TweetBox";
import Post from './Post';

import axios from 'axios';
function Feed({ className }) {
    const [tweet, setTweet] = useState([]);
    // const token = useState(JSON.parse(localStorage.getItem(`token`))[0]);
    const [token] = React.useState(JSON.parse(localStorage.getItem("token")));
    const [name] = React.useState(JSON.parse(localStorage.getItem("name")));
    console.log(token)
    useEffect(() => {
        async function getTweet(){
            const tweet = await axios.get('http://localhost:8080/timeline/getpost',
            {headers:{Authorization:`Bearer ${token}`}}
            )
            setTweet(tweet.data)
        }
        getTweet();
    },[])   
    console.log(tweet)
    return (
        <>

            <div className={className}>
                <div className=" feed">
                    <div className="feed_header">
                        <h2>Home</h2>
                    </div>
                    <TweetBox />

                    <FlipMove>
                        {tweet.map((post,index) => (
                            <Post
                                key={index}
                                text={post.text}
                                image={post.image}
                            />
                        ))}
                    </FlipMove>
                </div>

            </div>
        </>
    )
}

export default styled(Feed)`

.feed{
  flex:0.4;
  flex-direction: column;
  border-right: 1px solid #e6ecf0;
  width: 80vw;
  margin-left: 50px;
}


.feed_header{
    position: sticky;
    top:0;
    background-color: white;
    z-index:100;
    border:1px solid #e6ecf0;
    padding:15px 20px;  
}
.feed_header > h2{
    font-size: 20px;
    font-weight: 800;
}
/*Hide scrollbar */
/* .feed::-webkit-scrollbar{
    display: none;
} */
`;
