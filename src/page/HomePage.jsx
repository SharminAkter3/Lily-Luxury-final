import { Container } from '@material-ui/core'
import React from 'react'
import Sliders from '../components/Slider'
import TrandingProducts from '../components/TrandingProducts'
import CategorysName from '../components/CategorysName'
import MostViewProduct from '../components/MostViewProduct'
import CategoryProduct from '../components/CategoryProduct'

const HomePage = () => {
    return (
        <>
            <Sliders></Sliders>
            <Container>
                <TrandingProducts></TrandingProducts>
                <CategorysName></CategorysName>
                <MostViewProduct></MostViewProduct>
                <CategoryProduct></CategoryProduct>
            </Container>
        </>
    )
}

export default HomePage