import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'



const Navbar = () => {
    return (
        <AppBar position='sticky' style={{ backgroundColor: '#F8E8EE', padding: '7px' }}>
            <Toolbar>
                <Link to='/' style={{ textDecoration: 'none' }} >
                    <Typography variant='h4' style={{ color: '#a32d58', fontWeight: 'bold' }}>Lily Luxury</Typography>
                </Link>
            </Toolbar >
        </AppBar >
    )
}

export default Navbar