import React, { useContext, useEffect, useState } from 'react'
import Banner from './Banner'
import Cards from './Cards'
import Popular from './Popular'
import axios from "axios";
import AppContext from '../services/AppContext';

const Home = () => {

    const [state, setState] = useContext(AppContext)
    const [fruits, setFruits] = useState([])
    const [vegetables, setVegetables] = useState([])

    const fetchProducts = () => {
        axios.get('http://localhost:5000/freshkart').then((res) => {
            let products = res.data.data;
            for(let product of products){
                product.quantity = 0
            }

            catagorizeProduct(products);
            setState(...state, products);
        })

    };

    const catagorizeProduct = (products) => {
        let tempFruits = []
        let tempVegetables = []
        for (let product of products) {
            if (product.type === 'fruits' && product.popular === 1) {
                tempFruits.push(product);
            }
            if (product.type === 'vegetables' && product.popular === 1) {
                tempVegetables.push(product);
            }
        }
        setFruits(tempFruits)
        setVegetables(tempVegetables)
    }

    useEffect(() => {
        if (state.products.length === 0) { fetchProducts(); }
        else { catagorizeProduct() }
    }, [])

    return (
        <>
            <Banner />
            <Cards />
            <Popular title="Popular Fruits" items={fruits} />
            <Popular title='Popular Vegetables' items={vegetables} />
        </>
    )
}

export default Home
