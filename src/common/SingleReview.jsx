import { Avatar, Card, CardHeader } from '@material-ui/core'
import React from 'react'

const SingleReview = ({ item }) => {
    return (
        <Card style={{ marginLeft: '30px' }}>
            <CardHeader
                avatar={
                    <Avatar style={{ backgroundColor: 'blue' }}>
                        {item?.customer?.username?.[0]}
                    </Avatar>
                }
                title={item?.title}
                subheader={item?.customer?.username}
            />
        </Card>
    )
}

export default SingleReview