import React from 'react';
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Weather({className},item) {
    return (
        <div className={className}>

        <div className="news">
            <div className="news_avartar">
                <Avatar src="http://p1.ifengimg.com/a/2017_39/f3be35858e72c66_size149_w500_h370.png" />
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_headerText">
                        <h3>Covid-19 Update
                            <span className="post_headerSpecial">
                                <VerifiedIcon className="post_badge" />@Covid_19
                            </span>
                        </h3>
                    </div>
                
                        <div className="post_headerDescription">
                            <h4>Country :</h4>
                            <p>{item.name}</p>
                        </div>

                        <div className="post_headerDescription">
                            <h4>Description :</h4>
                            <p>{item.weather.description}</p>
                        </div>
                 
                </div>
                {/* <img src={item.multimedia[0].url} /> */}
                <div className="post_footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    </div>


    )
}

export default styled(Weather)`
.news{
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 10px;

}
.post_body{
    flex:1;
    padding: 10px;
}
.post_body > img {
    border-radius: 20px;
    width: 70%;
}
.post_footer{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.post_headerDescription{
    margin-bottom: 10px;
    font-size: 15px;
    display: flex;

}
.post_headerDescription > p{
    margin-left: 5px;
    margin-top: 20px;
}

.post_headerText > h3 {
    font-size: 15px;
    margin-bottom: 5px;
}
.post_badge{
    font-size: 14px;
    color: #50b7f5;
}
.post_headerSpecial {
    font-weight: 600;
    font-size: 12px;
    color: gray;
}
.news_avartar{
    padding: 20px;
}
`;