import React from 'react';
import {NavLink, Outlet} from 'react-router-dom'
import './Navbar.css'

import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import Badge from '@mui/material/Badge';

const Report = () => {
    const changeStyle = ({ isActive }) => {
        return{
            color:isActive?'yellow':'white',
            textDecoration:isActive?'none':'none',
            fontWidth:isActive?'bold':'normal'
            
        }
    };
    return (
        <div>
            <nav>

                <ul>
                   
                    <li id='event'><NavLink to = "/Admin/Report/Eventpage"style={changeStyle} >Events</NavLink></li>
                    <li id='student'><NavLink to = "/Admin/Report/Student"style={changeStyle} >Students</NavLink></li>
                    <li id='faculty'><NavLink to = "/Admin/Report/Faculty"style={changeStyle} >Faculty</NavLink></li>
                  
                             <li id='message'><NavLink to="/Admin/Report/message" style={changeStyle}><Badge badgeContent={4} color="secondary">
  <EmailRoundedIcon color="action" fontSize='6x' />
</Badge></NavLink></li>
                    
                </ul>  
            </nav>
            <Outlet/>
        </div>
    );
};

export default Report;