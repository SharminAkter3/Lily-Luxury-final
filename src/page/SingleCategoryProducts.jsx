import React from 'react'
import { useParams } from 'react-router-dom'

const SingleCategoryProducts = () => {
    const { id } = useParams();
    return (
        <div>
            <h1>Single category Products</h1>
            <h1>{id}</h1>
        </div>
    )
}

export default SingleCategoryProducts