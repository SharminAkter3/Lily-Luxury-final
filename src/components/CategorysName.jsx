import React, { useEffect, useState } from 'react'
import Headline from '../common/Headline'
import axios from 'axios';
import { domain } from '../env';
import { Grid } from '@material-ui/core';
import SingleCategory from '../common/SingleCategory';

const CategorysName = () => {
    const [categorynames, setCategorynames] = useState(null);
    useEffect(() => {
        const getCategoris = async () => {
            await axios({
                url: `${domain}/api/categories/`,
                method: "GET",
            })
                .then((response) => {
                    console.log(response.data);
                    setCategorynames(response.data);
                })
                .catch((error) => {
                    console.log("Category Name ", error);
                });
        };
        getCategoris();
    }, []);
    return (
        <Grid container spacing={3} style={{ padding: '10px', marginTop: '20px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', }}>

            <Headline title="All" subtitle="Categories" />

            {categorynames?.map((item, i) => (
                <Grid style={{
                    color: 'white',
                    marginRight: '10px',
                    marginLeft: '25px',
                }} key={i} item xs={6} sm={3} md={2} lg={2}>
                    <SingleCategory item={item} />
                </Grid>
            ))}

        </Grid>
    );
};


export default CategorysName