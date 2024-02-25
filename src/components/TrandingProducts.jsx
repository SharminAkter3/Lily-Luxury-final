import axios from 'axios'
import { domain } from "../env";
import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import Headline from '../common/Headline';
import SingleProduct from '../common/SingleProduct';

const TrandingProducts = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const getTrandingProducts = async () => {
            await axios({
                url: `${domain}/api/trandingflower/`,
                method: 'GET'
            }).then(response => {
                setProducts(response.data)
                console.log('TrandingFlower===', response.data);
            }).catch(e => {
                console.log('TrandingFlower==', e);
            })
        }
        getTrandingProducts()
    }, [])
    return (
        <Grid container spacing={2}   >
            <Headline title="Trending" subtitle="Flowers" />
            {
                products?.map((item, i) => <Grid key={i} md={2} sm={4} item>
                    <SingleProduct product={item?.flowers} />
                </Grid>)
            }
        </Grid>
    )
}

export default TrandingProducts