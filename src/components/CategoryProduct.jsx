import { Box, Grid } from "@material-ui/core";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { domain } from "../env";
import Headline from "../common/Headline";
import AllProducts from "../common/AllProducts";

const CategoryProduct = () => {
    const [categoryProducts, setCategoryProducts] = useState(null);
    useEffect(() => {
        const getCategoryProducts = async () => {
            await axios({
                url: `${domain}/api/categoryproducts/`,
                method: "GET",
            })
                .then((response) => {
                    // console.log(response.data);
                    setCategoryProducts(response.data);
                })
                .catch((error) => {
                    console.log("CategoryProduct", error);
                });
        };
        getCategoryProducts();
    }, []);
    return (
        <Grid container direction="column">
            {categoryProducts?.map((item, i) => (
                <Box key={i} container="div">
                    <>
                        <Headline title={item?.title} subtitle="Types" />
                        <AllProducts products={item?.flowers} categorytitle={item?.title} categoryid={item?.id} />
                    </>
                </Box>
            ))}
        </Grid>
    );
};

export default CategoryProduct;