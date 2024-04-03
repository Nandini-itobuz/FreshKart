import React from 'react'
import bannerStyles from '../styles/banner.module.css'
import { Carousel } from 'react-responsive-carousel';
import vegImg from '../images/Vegetables.png'
import appleImg from '../images/Apple.png'
import fruitImg from '../images/Mango.png'
import beansImg from '../images/Beans.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <>
            <Carousel autoPlay={true} interval={1000} infiniteLoop={true} showThumbs={false} >
                <div>
                    <img src={vegImg} />
                    <div className={bannerStyles.heading}> Get Potatoes free </div>
                    <div className={bannerStyles.desc}>Buy Vegetables and get potatoes free, Conditiosn apply</div>
                    <div className={bannerStyles.cta}>
                        <Link to='/items/fruits'>Shop</Link>
                    </div>
                </div>
                <div>
                    <img src={appleImg} />
                    <div className={bannerStyles.heading}> Get Potatoes free </div>
                    <div className={bannerStyles.desc}>Buy Vegetables and get potatoes free, Conditiosn apply</div>
                    <div className={bannerStyles.cta}>
                    <Link to='/items/fruits'>Shop</Link>
                    </div>
                </div>
                <div>
                    <img src={fruitImg} />
                    <div className={bannerStyles.heading}> Get Potatoes free </div>
                    <div className={bannerStyles.desc}>Buy Vegetables and get potatoes free, Conditiosn apply</div>
                    <div className={bannerStyles.cta}>
                    <Link to='/items/vegetables'>Shop</Link>
                    </div>
                </div>
                <div>
                    <img src={beansImg} />
                    <div className={bannerStyles.heading}> Get Potatoes free </div>
                    <div className={bannerStyles.desc}>Buy Vegetables and get potatoes free, Conditiosn apply</div>
                    <div className={bannerStyles.cta}>
                    <Link to='/items/vegetables'>Shop</Link>
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Banner
