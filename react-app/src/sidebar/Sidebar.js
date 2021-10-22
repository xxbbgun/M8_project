import React from 'react'
import styled from "styled-components";
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
function Sidebar({ className }) {
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");//ลบค่าtokenในlocalStorage
        localStorage.removeItem("name");
      }
    return (
        <div className={className}>
            <div className="sidebar">
                <div className="sidebar_logo">
                    <FaceRetouchingNaturalIcon className="sidebar_tweetIcon" />
                <h3 className="sidebar_name" >Dagona</h3>
                </div>
                
                <Link to="/" className="link"><SidebarOption active Icon={HomeIcon} text="Home" /></Link>
                <Link to="/explore" className="link"><SidebarOption Icon={SearchIcon} text="Explore" /></Link>
                <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
                <SidebarOption Icon={MailOutlineIcon} text="Messages" />
                <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
                <SidebarOption Icon={ListAltIcon} text="Lists" />
                <SidebarOption Icon={PersonOutlineIcon} text="Profile" />
                <SidebarOption Icon={MoreHorizIcon} text="More" />

                <Button variant="outlined" className="sidebar_tweet" fullWidth onClick={logout}>Log out</Button>

            </div>
        </div>
    )
}

export default styled(Sidebar)`
.sidebar{
    border-right: 1px solid #e6ecf0;
    flex: 0.3;
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    width: 15%;
    
}

.sidebar_logo{
    display: flex;
}
.link{
    text-decoration: none;
    color: black;
}
.sidebar_tweetIcon{
    color: #50b7f5;
    font-size: 30px;
    margin-left: 20px;
    margin-right: 20px;
}


.sidebar_tweet{
    background-color: #50b7f5 ;
    border:none;
    color:white;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
}
.sidebar_tweet:hover{
    background-color: #50b7f5 ;
    border:none;
    color:white;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    height: 50px;
    margin-top: 20px;
}
`;
