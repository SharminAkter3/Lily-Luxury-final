import React from 'react'
import { useParams } from 'react-router-dom'

const SearchResultPage = () => {
    const { q } = useParams();
    return (
        <div>
            <h1> search result </h1>
            <h1> {q}</h1>
        </div>
    )
}

export default SearchResultPage