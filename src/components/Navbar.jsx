import { AppBar, Grid, IconButton, InputBase, Paper, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'



const Navbar = () => {
    const [text, setText] = useState('');
    const navigate = useNavigate();
    const search = () => {
        navigate(`/query/q-${text}`);
    }


    return (
        <AppBar position='sticky' style={{ backgroundColor: '#F8E8EE', padding: '7px' }}>
            <Toolbar>

                <Grid container>

                    <Link to='/' style={{ textDecoration: 'none' }} >
                        <Typography variant='h4' style={{ color: '#a32d58', fontWeight: 'bold' }}>Lily Luxury</Typography>
                    </Link>

                    <Paper style={{ margin: '0 0 0 350px', borderRadius: '50px', }}>
                        <InputBase
                            value={text}
                            placeholder="Search Now..."
                            style={{ padding: '8px', width: '300px', marginLeft: '20px', marginRight: '20px' }}
                            onChange={(e) => setText(e.target.value)}
                        />
                        <IconButton
                            disabled={text.length <= 0 ? true : false}
                            onClick={search}
                        >
                            <SearchIcon />
                        </IconButton>
                    </Paper>

                </Grid>


            </Toolbar >



        </AppBar >
    )
}

export default Navbar