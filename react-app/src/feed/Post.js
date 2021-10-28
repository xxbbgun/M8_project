import React from 'react'
import styled from "styled-components";
import { Avatar } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ className,text, image}) {
    const [name] = React.useState(JSON.parse(localStorage.getItem("name")));
    return (
        <div className={className}>
            <div className="post">
                <div className="post_avartar">
                    <Avatar src="https://www.nicepng.com/png/full/202-2024580_png-file-profile-icon-vector-png.png" />
                </div>
                <div className="post_body">
                    <div className="post_header">
                        <div className="post_headerText">
                            <h3>{name}
                                <span className="post_headerSpecial">
                                    <VerifiedIcon className="post_badge" />@{name}
                                </span>
                            </h3>
                        </div>
                        <div className="post_headerDescription">
                            <p>{text}</p>
                        </div>
                    </div>
                    <img className="post_image" src={image} />
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

export default styled(Post)`

.post{
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid #e6ecf0;
  padding-bottom: 10px;


}
.post_body{
    flex:1;
    padding: 10px;
}

img.post_image{
    width: 50%;
 
}

.post_footer{
    display: flex;
    justify-content: space-between;
    margin-right: 10px;
    margin-top:10px;
}
.post_headerDescription{
    margin-bottom: 10px;
    font-size: 15px;
}
.post_headerText > h3 {
    font-size: 18px;
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
.post_avartar{
    padding: 20px;
}
`;
