import React from 'react'
import Banner from './Banner'
import Cards from './Cards'
import Popular from './Popular'

const Home = () => {
  return (
    <>
      <Banner />
      <Cards />
      <Popular title = "Popular Fruits"/>
      <Popular title ='Popular Vegetables' />
    </>
  )
}

export default Home
