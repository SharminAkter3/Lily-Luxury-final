import { Button, Grid, Typography } from "@material-ui/core";
import React from "react";
import SingleProduct from "./SingleProduct";
import DoubleArrowSharpIcon from "@material-ui/icons/DoubleArrowSharp";
import { Link } from "react-router-dom";

const AllProducts = ({ products, showall = false, categorytitle, categoryid }) => {
    return (
        <Grid style={{ padding: '10px', marginTop: '20px', marginBottom: '20px', borderRadius: '10px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)', }}
            container
            spacing={2}
        >
            {products?.map((item, i) => (
                <>
                    {showall ? (
                        <Grid key={i} item md={2} sm={4}>
                            <SingleProduct product={item} />
                        </Grid>
                    ) : (
                        <>
                            {i <= 10 && (
                                <Grid key={i} item md={2} sm={4}>
                                    <SingleProduct product={item} />
                                </Grid>
                            )}
                        </>
                    )}
                </>
            ))}
            {products?.length > 11 && !showall && (
                <Grid
                    item
                    md={2}
                    sm={4}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link to={`category/${categorytitle}/${categoryid}`}>
                        <Button>
                            <Typography>See More</Typography>
                            <DoubleArrowSharpIcon />
                        </Button>
                    </Link>
                </Grid>
            )
            }
        </Grid >
    );
};


export default AllProducts;