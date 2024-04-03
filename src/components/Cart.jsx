import { useContext, useEffect, useState } from 'react'
import cartStyles from '../styles/cart.module.css'
import AppContext from '../services/AppContext'
import AddItem from './AddItem'
import { useNavigate } from 'react-router-dom'
import AuthContext from '../services/AuthContext'

const Cart = () => {
    const [state, setState] = useContext(AppContext)
    const [isLoggedIn, setLoggedIn] = useContext(AuthContext)
    const navigate = useNavigate();
    const [mrp,setMrp] = useState(0)
    const [discount,setDiscount] = useState(0)
    const [total,setTotal] = useState(0)

    useEffect(()=>{
        let mrp=0;
        let disc=0;
        let total=0;
        for(let item of state.cart){
            mrp=mrp+item.quantity * item.price;
            disc = disc + item.quantity * (item.was - item.price)
        }
        total = mrp - disc;
        setMrp(mrp)
        setTotal(total)
        setDiscount(disc)
    },[state.cart])

    const order = () =>{
        if(isLoggedIn){
            let products = [...state.products]
        for(let prod of products){
            prod.quantity = 0;
        }
        setState({products, cart: []})
        navigate('/final')
        }else{
            navigate('/login')
        }
    }

    return (
        <div className={cartStyles.cartContainer}>
            
            <div className={cartStyles.cartWrapper}></div>
            <div className={cartStyles.cartDetails}>
                {state.cart.length > 0 ? <>
                    {state.cart.map((item) => (
                        <div className={cartStyles.cart} key={item.id}>
                            <div className={cartStyles.cartLeft}>
                                <img src={item.pic} alt='' />
                            </div>
                            <div className={cartStyles.cartMiddle}>
                                <div className={cartStyles.name}>{item.name}</div>
                                <div className={cartStyles.weight}>{item.weight}</div>
                                <div className={cartStyles.price}>
                                    <div className={cartStyles.current}>₹{item.price}</div>
                                    {item.was !== item.price ? (<div className={cartStyles.was}>₹{item.was}</div>) : null}
                                    <div className={cartStyles.discount}>
                                        ₹{item.was - item.price}
                                    </div>
                                </div>
                            </div>
                            <div className={cartStyles.cartRight}>
                                <AddItem item={item} />
                            </div>
                        </div>
                    ))}

                    <div className={cartStyles.btnContainer}>
                        <div className={cartStyles.orderBtn} onClick={order}>place Order </div>
                    </div>
                </> : <div className={cartStyles.noItem}>Ooops, your cart feels so light</div>}

            </div>

            {state.cart.length > 0 ? <>
                <div className={cartStyles.cartSummary}>
                    <div className={cartStyles.subHeading}>Summary</div>
                    <div className={cartStyles.summary}>
                        {state.cart.length === 1 ? 
                        (<div className={cartStyles.summaryLabel}>MRP ({state.cart.length} item)</div>) :
                        <div className={cartStyles.summaryLabel}>MRP ({state.cart.length} items)</div>
                        }
                        <div className={cartStyles.summaryLabel}>₹{mrp}</div>
                    </div>
                    <div className={cartStyles.summary}>
                        <div className={cartStyles.summaryLabel}>Poduct Discount</div>
                        <div className={`${cartStyles.summaryLabel} ${cartStyles.disc}`}>-₹{discount}</div>
                    </div>
                    <div className={`${cartStyles.total} ${cartStyles.summary}`}>
                        <div className={`${cartStyles.summaryLabel} `}>Total Amount</div>
                        <div className={cartStyles.summaryLabel}>₹{total}</div>
                    </div>
                </div>
            </> : ''}

        </div>
    )
}

export default Cart
