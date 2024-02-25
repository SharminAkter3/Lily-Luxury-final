import { Button, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const SliderItem = ({ item }) => {
    return (
        <Paper
            style={{
                height: '550px',
                width: '100%',
                backgroundImage: `url(${item.image})`,
                backgroundSize: '100% 550px'

            }}
        >
            <Grid
                style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50% ,-50%)',
                    color: 'white'
                }}>
                <Typography variant="h3" style={{ color: 'white', fontWeight: 'bold' }} >{item?.name}</Typography>
                <Typography variant="h6" style={{ color: 'white', fontSize: 'medium' }}>{item?.details}</Typography>
                <Button variant='contained' style={{ background: '#F2BED1', color: '#a32d58', marginTop: '8px', fontSize: 'medium' }}>
                    Explore More
                </Button>
            </Grid>
        </Paper>
    )
}

export default SliderItem