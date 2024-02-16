import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { domain } from '../env';
import { Container, Grid, Typography } from '@material-ui/core';
import AllProducts from '../common/AllProducts';

const SingleCategoryProducts = () => {
    const [category, setCategory] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        const getProducts = async () => {
            await axios({
                url: `${domain}/api/singlecategories/${id}/`,
                method: 'GET',
            }).then((response) => {
                console.log(response.data);
                setCategory(response.data[0])
            });
        };
        getProducts()
    }, [id])
    return (
        <Container>
            <Grid container direction='column' alignItems='center'>
                <Typography variant='h3'>{category?.title}</Typography>
                <Typography variant='p'>{category?.details}</Typography>
                <img style={{ width: '100%', padding: '30px' }} alt={category?.title} src={category?.image}></img>

                <AllProducts products={category?.flowers} showall={true} />
            </Grid>
        </Container>
    )
}

export default SingleCategoryProducts