import { Box, Card, CardActionArea, Typography } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const SingleCategory = ({ item }) => {
    return (
        <CardActionArea>
            <Card
                style={{
                    width: "100%",
                    height: "100px",
                    backgroundColor: "#a32d58",
                    backgroundImage: `url(${item?.image})`,
                    backgroundSize: "100% 100%",
                    padding: "5px",
                    color: "#F8E8EE",
                    position: "relative",
                }}
            >
                <Box
                    style={{
                        alignItems: "center",
                        textAlign: "center",
                        // display: "flex",
                        display: "grid",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                    }}
                >
                    <Link to={`category/${item?.title}/${item?.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography variant="h4">{item?.title}</Typography>
                    </Link>
                </Box>
            </Card>
        </CardActionArea>
    );
};

export default SingleCategory