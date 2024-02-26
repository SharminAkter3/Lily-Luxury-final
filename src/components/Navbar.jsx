import { AppBar, Badge, Button, Card, ClickAwayListener, Grid, IconButton, InputBase, MenuItem, Paper, Toolbar, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded'




const Navbar = () => {
    const [text, setText] = useState('');
    const [showMenu, setShowMenu] = useState(false);
    const navigate = useNavigate();
    const search = () => {
        navigate(`/query/${text}`);
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

                {/* <Button color='inherit' onClick={() => { history.push('/login') }} >Login</Button>  */}
                <Button color='inherit' style={{ backgroundColor: 'white', color: '#a32d58', padding: '5px', fontWeight: 'bold' }} onClick={() => { navigate('/login') }}>Login</Button>



                <IconButton color="inherit" style={{ backgroundColor: '#a32d58', color: 'white', marginLeft: '10px', padding: '5px' }}>
                    <Badge badgeContent="3" color="secondary">
                        <ShoppingCartIcon />
                    </Badge>
                </IconButton>



                <IconButton onClick={() => setShowMenu(true)} color="inherit" style={{ backgroundColor: '#a32d58', color: 'white', marginLeft: '10px', padding: '5px' }}>
                    <AccountCircleRoundedIcon />
                </IconButton>

                {
                    showMenu &&
                    <ClickAwayListener onClickAway={() => setShowMenu(false)}>
                        <Card style={{
                            position: 'fixed',
                            top: '60px',
                            right: '10px'
                        }}>
                            <MenuItem style={{ color: '#a32d58', fontWeight: 'bold' }}>Profile</MenuItem>
                            <MenuItem style={{ color: '#a32d58', fontWeight: 'bold' }}>Logout</MenuItem>
                        </Card>
                    </ClickAwayListener>
                }

            </Toolbar >



        </AppBar >
    )
}

export default Navbar