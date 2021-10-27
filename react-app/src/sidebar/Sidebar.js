import React from 'react'
import styled from "styled-components";
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
import { Link ,useHistory,NavLink} from "react-router-dom";
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';

function Sidebar({ className }) {
    const history = useHistory();
    const logout = (event) => {
        event.preventDefault();
        localStorage.removeItem("token");//ลบค่าtokenในlocalStorage
        localStorage.removeItem("name");
        history.push("/sign-in")
      }
    return (
        <div className={className}>
            <div className="sidebar">
                <div className="sidebar_logo">
                    <FaceRetouchingNaturalIcon className="sidebar_tweetIcon" />
                <h3 className="sidebar_name" >Dagona</h3>
                </div>
                <Link to="/home" className="link"><SidebarOption  Icon={HomeIcon}/><h3>Home</h3></Link>
                <Link to="/explore" className="link"><SidebarOption  Icon={SearchIcon} /><h3>Explore</h3></Link>
                <Link to  className="link"> <SidebarOption Icon={NotificationsNoneIcon}/><h3>Notifications</h3></Link>
                <Link to  className="link"><SidebarOption Icon={MailOutlineIcon}/><h3>Messages</h3></Link>
                <Link to  className="link"><SidebarOption Icon={BookmarkBorderIcon}/><h3>Bookmarks</h3></Link>
                <Link to className="link"><SidebarOption Icon={ListAltIcon}/><h3>Lists</h3></Link>
                <Link to className="link"><SidebarOption Icon={PersonOutlineIcon} /><h3>Profile</h3></Link>
                <Link to className="link"><SidebarOption Icon={MoreHorizIcon}/><h3>More</h3></Link>
                <Button variant="outlined" className="sidebar_tweet" fullWidth onClick={logout}>Log out</Button>
            </div>
        </div>
    )
}

export default styled(Sidebar)`
.sidebar{
    flex: 0.3;
    margin-top: 20px;
    padding-right: 20px;
    padding-left: 20px;
    width: 10vw;

}

.sidebar_logo{
    display: flex;
}
.link{
    text-decoration: none;
    color: black;
    border: none;
    font-weight: 900;
    text-transform: inherit;
    border-radius: 30px;
    height: 50px;
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    transition: 0.25s;
    padding-bottom: 15px;

}
.link:hover , .link:focus{
    color:#50b7f5;
    transition: 0.25s;
    text-decoration: none;
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
@media screen and (max-width: 320px) {
    h3{
   display:none;
}
}
`;
