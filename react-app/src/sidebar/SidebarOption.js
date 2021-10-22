import React from 'react'
import styled from "styled-components";

function SidebarOption({ active,text, Icon, className }) {//prop pass icon
    return (
        <div className={className}>
            <div className={`sidebarOption ${active && 'sidebarOption_active'}`}>
                <Icon />
                <h2>{text}</h2>
            </div>
        </div>
    )

}

export default styled(SidebarOption)`
.sidebarOption{
    display: flex;
    align-items: center;
    cursor: pointer;
}

.sidebarOption:hover {
   background-color: #e8f5fe;
   border-radius: 30px;
   color:#50b7f5;
   transition: color 100ms ease-out;
}

.sidebarOption > .MuiSvgIcon-root {
    padding: 20px;
}

.sidebarOption > h2 {
    font-size: 20px;
    font-weight: 800;
    margin-right: 20px;
}

.sidebarOption_active{
    color:#50b7f5;
}

`;