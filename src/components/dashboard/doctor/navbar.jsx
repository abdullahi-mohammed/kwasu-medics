import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='bg-[#D9DFF4]'>
            <div>
                <NavLink><img src="" alt="" /><p>Overview</p></NavLink>
                <NavLink><img src="" alt="" /><p>Diagnostics</p></NavLink>
                <NavLink><img src="" alt="" /><p>Appointment</p></NavLink>
                <NavLink><img src="" alt="" /><p>Billing</p></NavLink>
                <NavLink><img src="" alt="" /><p>Medic Bot</p></NavLink>
            </div>
            <NavLink><img src="" alt="" /><p>Settings</p></NavLink>
            <NavLink><img src="" alt="" /><p>Log Out</p></NavLink>
        </div>
    )
}

export default Navbar
