import React from 'react'


function SidebarOption({ text, Icon, }) {//prop pass icon
    return (
        <div className={`sidebar`}>
            <Icon />
            <h2>{text}</h2>
        </div>

    )
}

export default SidebarOption;