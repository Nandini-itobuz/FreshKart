import React from 'react'
import cardStyles from '../styles/cards.module.css'
import fruitImg from '../images/Mango.png'
import vegiesImg from '../images/Veggies.png'
import  bananaImg from '../images/Banana.png'

const Cards = () => {
  return (
    <>
      <div className={cardStyles.cardsContainer}>
        <div className={`${cardStyles.card} ${cardStyles.pink}`}>
            <div className={cardStyles.caption}>
                Season's fresh crispy always!
            </div>
            <img  className={cardStyles.mango} src={fruitImg} />
        </div>
        <div className={`${cardStyles.card} ${cardStyles.orange}`}>
            <div className={cardStyles.caption}>
                Season's fresh crispy always!
            </div>
            <img  className={cardStyles.mango} src={vegiesImg} />
        </div>
        <div className={`${cardStyles.card} ${cardStyles.blue}`}>
            <div className={cardStyles.caption}>
                Season's fresh crispy always!
            </div>
            <img  className={cardStyles.mango} src={bananaImg} />
        </div>
      </div>
      
    </>
  )
}

export default Cards
