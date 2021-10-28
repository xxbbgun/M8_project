import React from 'react'


function SidebarOption({ Icon }) {//prop pass icon
    return (
        <div className={`sidebar`}>
            <Icon />
            <h2></h2>
        </div>

    )
}

export default SidebarOption;