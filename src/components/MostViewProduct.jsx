import axios from 'axios';
import { domain } from "../env";
import React, { useEffect, useState } from 'react'
import { Grid } from '@material-ui/core';
import Headline from '../common/Headline';
import SingleProduct from '../common/SingleProduct';

const MostViewProduct = () => {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        const getmostviewsproducts = async () => {
            await axios({
                url: `${domain}/api/most_views_flower/`,
                method: 'GET'
            }).then(response => {
                setProducts(response.data)
                // console.log("MostViewProduct===", response.data);
            })
        }
        getmostviewsproducts()

    }, [])
    return (
        <>
            <Grid container spacing={2} style={{ padding: '10px', marginTop: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', }}>
                <Headline title="Most Views" subtitle="Flowers" />
                {
                    products?.map((item, i) => <Grid key={i} md={2} sm={4} item>
                        <SingleProduct product={item?.flower} />
                    </Grid>)
                }
            </Grid>
        </>
    )
}

export default MostViewProduct