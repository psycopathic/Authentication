import React from 'react'
import './header.css'
import Avatar from '@mui/material/Avatar';

function Header() {
  return (
    <header>
        <nav>
            <h1>Hp Cloud</h1>
            <Avatar style = {{backgroundColor: '#2d3748'}}>A</Avatar>
        </nav>
    </header>
  )
}

export default Header