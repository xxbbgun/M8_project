import React,{ useState,useEffect } from 'react';
import styled from "styled-components";
import { Avatar, Button } from '@mui/material';
import axios from 'axios';

function TweetBox({ className }) {
    const [token] = React.useState(JSON.parse(localStorage.getItem("token")));
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8080/timeline/post',{
            text: tweetMessage,
            image: tweetImage,
            
        },  {headers:{Authorization:`Bearer ${token}`}}
        ).then((response) => {
            
            setTweetMessage("");
            setTweetImage("");
        })
      }
      useEffect(() => {
        axios.get('http://localhost:8080/timeline/post'
        ).then((response) => {
            
          console.log(response)
        })
    
      }, [])

    return (
        <div className={className}>
            <div className="tweetBox">
                <form>
                    <div className="tweetBox_input">
                        <Avatar src="https://www.nicepng.com/png/full/202-2024580_png-file-profile-icon-vector-png.png" />
                        <input
                            onChange={(event) => setTweetMessage(event.target.value)}
                            value={tweetMessage}
                            placeholder="What's happening?"
                            type="text"
                        />
                    </div>
                    <input
                        value={tweetImage}
                        onChange={(event) => setTweetImage(event.target.value)}
                        className="tweetBox_inputImage"
                        placeholder="Enter image URL"
                        type="text"
                    />
                    <Button
                        onClick={sendTweet}
                        type="submit"
                        className="tweetBox_button">
                        Tweet
                    </Button>
                </form>
            </div>
        </div>
    )
}

export default styled(TweetBox)`
.tweetBox{
    padding-bottom: 10px;
    border-bottom:8px solid #e6ecf0 ;
    padding-right: 10px;
}
.tweet_text{
    width: 100%;
    height: 50px;
    display: block;
    border:none;
}
.tweetBox > form{
    display: flex;
    flex-direction: column;
}
.tweetBox_input{
    padding:20px;
    display: flex;
}
.tweetBox_input>input{
    flex: 1;
    margin-left: 20px;
    font-size: 20px;
    border: none;
}
.tweetBox_inputImage{
    border: none;
    padding: 10px;
}
.tweetBox_button{
    background-color: #50b7f5 ;
    border:none;
    color:white;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    width: 80px;
    height: 40px;
    margin-top: 20px;
    margin-left: auto;
    margin-right: 10px;
}
.tweetBox_button:hover{
    background-color: #50b7f5 ;
    border:none;
    color:white;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    width: 80px;
    height: 40px;
    margin-top: 20px;
    margin-left: auto;
}
`;
