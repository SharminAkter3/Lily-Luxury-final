import { AppBar, Toolbar, Typography } from '@material-ui/core'
import React from 'react'

const Navbar = () => {
    return (
        <AppBar position='sticky' style={{ backgroundColor: '#F8E8EE', padding: '7px' }}>
            <Toolbar>
                <Typography variant='h4' style={{ color: '#a32d58', fontWeight: 'bold' }}>Lily Luxury</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar