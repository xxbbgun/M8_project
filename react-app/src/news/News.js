import React from 'react'
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function News({ item, className }) {

    return (
        <div className={className}>
            <div className="news">
                <div className="news_avartar">
                    <Avatar src="https://pbs.twimg.com/profile_images/1098244578472280064/gjkVMelR_400x400.png" />
                </div>
                <div className="news_body">
                    <div className="news_header">
                        <div className="news_headerText">
                            <h3>New York Times
                                <span className="news_headerSpecial">
                                    <VerifiedIcon className="news_badge" />@nytimes
                                </span>
                            </h3>
                        </div>
                        <div className="news_headerDescription">
                            <p>{item.title}</p>
                            <p>{item.abstract}</p>
                        </div>
                    </div>
                
                    <img src={item.multimedia[0].url}  alt={item.title}/>
                    <div className="news_footer">
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

export default styled(News)`
.news{
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e6ecf0;
  border-left:1px solid #e6ecf0;
  border-right:1px solid #e6ecf0;
  padding-bottom: 10px;
  width:75vw;
  margin-left: 100px;
}
.news_body{
    flex:1;
    padding: 10px;
}
.news_body > img {
    border-radius: 20px;
    width: 70%;
}
.news_footer{
    display: flex;
    justify-content: space-between;
    margin-top:10px;
}
.news_headerDescription{
    margin-bottom: 10px;
    font-size: 15px;
}
.news_headerText > h3 {
    font-size: 15px;
    margin-bottom: 5px;
}
.news_badge{
    font-size: 14px;
    color: #50b7f5;
}
.news_headerSpecial {
    font-weight: 600;
    font-size: 12px;
    color: gray;
}
.news_avartar{
    padding: 20px;
}
}
@media screen and (max-width: 768px) {
    .news{
        border-left: 1px solid #e6ecf0;
        border-right: 1px solid #e6ecf0;
        width:60vw;
        margin-left: 100px;
    }
    .newsfeed_header{
    position: sticky;
    top:0;
    background-color: white;
    z-index:100;
    border:1px solid #e6ecf0;
    padding:15px 20px; 
    margin-left: 100px;
    margin-top: 0;  
    border-bottom:1px solid #e6ecf0;
}
@media screen and (max-width: 385px) {
   .news{
    border-left: 1px solid #e6ecf0;
    border-right: 1px solid #e6ecf0;
    width:60vw;
    margin-left: 50px;
    }
  .news_headerText > h3 {
    font-size: 16px;
   }
}
`;

