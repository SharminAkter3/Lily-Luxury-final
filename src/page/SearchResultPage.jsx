import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Headline from '../common/Headline';
import AllProducts from '../common/AllProducts';
import SingleCategory from '../common/SingleCategory';
import { domain } from '../env';
import { Container, Grid, Typography } from '@material-ui/core';

const SearchResultPage = () => {
    const { q } = useParams();
    const [result, setResult] = useState(null);
    useEffect(() => {
        const getSearch = async () => {
            await axios({
                url: `${domain}/api/search/${q}/`,
                method: "GET"
            }).then(response => {
                console.log('SearchResultPage===', response.data);
                setResult(response.data);
            })
        }
        getSearch()
    }, [q])
    return (
        <Container>
            <Typography variant='h5' style={{ marginTop: '10px', color: '#5D3587', fontWeight: "bold", padding: '10px' }}>Search Result For: "{q}"</Typography>
            <Grid container direction='column'>
                {
                    result?.category?.length !== 0 && <Grid container
                        direction='row'
                        justify='center'
                        alignItem='center'
                        spacing={2}
                    >
                        <Headline title="Categoris" />
                        {
                            result?.category?.map((item, i) => <Grid xs={6} sm={3} md={2} lg={2} item>
                                <SingleCategory key={i} item={item} />
                            </Grid>)
                        }
                    </Grid>
                }
                {
                    result?.flowers?.length !== 0 && <Grid container
                        direction='row'
                        justify='center'
                        alignItem='center'
                        spacing={2}
                    >
                        <Headline title="Flowers" />
                        <AllProducts products={result?.flowers} showall={true} />
                    </Grid>
                }
            </Grid>
        </Container>
    )
}

export default SearchResultPage