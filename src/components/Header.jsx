import React, { useContext } from 'react';
import headerStyles from '../styles/header.module.css';
import cartImg from '../images/Cart.png'
import AppContext from '../services/AppContext';

const Header = () => {
  const [state,setState] = useContext(AppContext);
  return (
    <div className={headerStyles.headerContainer}>
        <div className={headerStyles.logo}>FreshKaet</div>
        <div className={headerStyles.nav}>
            <div className={headerStyles.navItem}>Fruits</div>
            <div className={headerStyles.navItem}>Vegetable</div>
        </div>
        <div className={headerStyles.cart}>
            <img src={cartImg} alt='' />
            {state.cart.length > 0 ? (
              <div className={headerStyles.count}>{state.cart.length}</div>
            ) :null}
            <span>Cart</span>
        </div>
        <div className={headerStyles.login}>Login</div>
    </div>
  )
}

export default Header
