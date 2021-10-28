import React from 'react'


function SidebarOption({ Icon }) {//prop pass icon
    return (
        <div className={`sidebar`}>
            <Icon />
        </div>

    )
}

export default SidebarOption;