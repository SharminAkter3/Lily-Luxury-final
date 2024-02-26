import { Button, Grid, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react'
import { domain } from '../env'


const AuthPage = () => {
    const [registernow, setRegisternow] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const loginnow = async () => {
        await axios({
            url: `${domain}/api/apilogin/`,
            method: 'POST',
            data: {
                username: email,
                password: password,

            }
        }).then(response => {
            let data = response.data
            if (data['token']) {
                console.log(data['token']);
                window.localStorage.setItem('token', data['token']);
                window.location.href = '/';
            } else {
                alert("Somthing is Wrong !! Try Again !")
            }
        }).catch(_ => {
            alert("Somthing is Wrong !! Try Again !")
        })
    }

    const register = async () => {
        if (password === password2) {
            await axios({
                url: `${domain}/api/register/`,
                method: 'POST',
                data: {
                    'email': email,
                    'password': password,

                }
            }).then(response => {
                console.log('AuthPage====', response.data);
                if (response.data['error'] === false) {
                    setRegisternow(false)
                }
                else {
                    alert("Somthing is Wrong Try Again !!")

                }
            })
        }
        else {
            alert("Password Doesn't Matched !!")
        }
    }

    return (
        <Grid container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{
                minHeight: "80vh", width: '50%', padding: '20px', margin: "auto", marginTop: '30px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            <Typography variant='h4' style={{ color: "#5D3587", fontWeight: "bold", marginBottom: "10px" }}>{registernow ? "Register Now!!" : "Please Login!!"}</Typography>

            <Grid item xs={12} md={8} sm={8}>
                <TextField
                    style={{ width: "100%", margin: "10px 0", paddingTop: '10px' }}
                    variant="outlined"
                    label="Email"
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    style={{ width: "100%", margin: "10px 0", paddingTop: '10px' }}
                    variant="outlined"
                    label="Password"
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}

                />
                {
                    registernow &&
                    <TextField
                        style={{ width: "100%", margin: "10px 0", paddingTop: '10px' }}
                        variant="outlined"
                        label="Confirm Password"
                        type='password'
                        onChange={(e) => setPassword2(e.target.value)}
                    />
                }
                {
                    registernow ?
                        <>
                            <Button onClick={register} variant='contained' color='primary'>
                                Register
                            </Button>
                            <Button onClick={() => setRegisternow(false)}>
                                Have an account? Login Now.
                            </Button>
                        </>
                        :
                        <>
                            <Button onClick={loginnow} variant='contained' color='primary'>
                                Login
                            </Button>
                            <Button onClick={() => setRegisternow(true)}>
                                No account? Register Now.
                            </Button>
                        </>
                }
            </Grid>


        </Grid>
    )
}

export default AuthPage