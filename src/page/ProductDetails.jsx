import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import VisibilityIcon from '@material-ui/icons/Visibility'
import SendIcon from '@material-ui/icons/Send'
import { domain } from '../env';
import { Box, Button, Card, Container, Grid, IconButton, TextField, Typography } from '@material-ui/core';
import SingleReview from '../common/SingleReview';

const ProductDetails = () => {
    const [flower, setFlower] = useState(null);
    const { id } = useParams()
    useEffect(() => {
        const getproductdetailse = async () => {
            await axios({
                url: `${domain}/api/singleflower/${id}/`,
                method: 'GET'
            }).then(response => {
                // console.log(response.data[0]);
                setFlower(response.data[0])
            })
        }
        getproductdetailse()
    }, [])

    useEffect(() => {
        const addproductview = async () => {
            await axios({
                url: `${domain}/api/addflowerview/`,
                method: 'POST',
                data: {
                    'id': id
                }
            }).then(response => {
                console.log("ProductDetails", response.data);
            })
        }
        addproductview()
    }, [])

    return (
        <Container style={{
            padding: '30px',
        }} >
            <Card>
                <Grid container >
                    <Grid item xs={12} sm={12} md={5} lg={5} >
                        <img style={{
                            width: '100%',
                            height: 'auto',
                        }} src={flower?.image} alt={flower?.title} />
                    </Grid>
                    <Grid item xs={12} sm={12} md={7} lg={7} >
                        <Grid container style={{ marginLeft: '30px', color: '#5D3587' }}>
                            <Grid item xs={12} md={6} lg={6} >
                                <Typography variant='h4' >{flower?.title}</Typography>
                                <Box>
                                    {

                                        flower?.category?.map((item, i) => <Button style={{ color: '#F2BED1' }} key={i}>{item?.title}</Button>)
                                    }
                                </Box>

                                <Box>
                                    {
                                        flower?.discount > 0 && <Box style={{
                                            fontSize: '40px'
                                        }} >{flower?.discount}% OFF</Box>
                                    }
                                </Box>
                                <Box>
                                    {
                                        flower?.oldprice && <Box style={{
                                            fontSize: '40px',
                                            color: 'red',
                                            textDecoration: 'line-through',
                                            marginRight: '10px'
                                        }} component='span' >{flower?.oldprice} TK</Box>
                                    }
                                    <Box style={{
                                        fontSize: '40px',
                                        color: 'black'
                                    }} component='span' >{flower?.price} TK</Box>
                                    <Box style={{ margin: '10px 0px' }}>

                                        <Button size='large' variant='outlined' >Add To Cart</Button>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} >
                                <Card style={{
                                    padding: '10px',
                                    margin: '15px 0px',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }} >
                                    <Button
                                        endIcon={
                                            <VisibilityIcon />
                                        }
                                        color='primary' size="large" >{flower?.view}</Button>
                                </Card>
                            </Grid>
                            <Typography>{flower?.details}</Typography>

                        </Grid>
                        <Typography variant='h3' align='center' style={{ color: '#a32d58', marginTop: '20px' }} >Review</Typography>
                        <Box p={3}>
                            <TextField
                                label='Add Review..'
                                style={{ width: '90%', marginLeft: '30px', }}
                                variant='outlined'
                                InputProps={{
                                    endAdornment: (
                                        <IconButton>
                                            <SendIcon />
                                        </IconButton>
                                    )
                                }}
                            />
                            {
                                flower?.review?.map((item, i) => <SingleReview key={i} item={item} />)
                            }
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Container>

    )
}

export default ProductDetails