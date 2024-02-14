import { Box, Grid } from '@material-ui/core'
import React from 'react'

const Headline = ({ title, subtitle }) => {
    return (
        <Grid container style={{
            justifyContent: 'center', borderBottom: '3px solid #F2BED1', marginTop: '30px',
        }}>
            <Box style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#a32d58',
                marginRight: '10px',
            }}>{title}
            </Box>

            <Box style={{
                fontWeight: 'bold',
                fontSize: '20px',
                textTransform: 'uppercase',
                color: '#5D3587',
            }}>{subtitle}
            </Box>
        </Grid>
    )
}

export default Headline