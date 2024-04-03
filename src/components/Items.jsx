import React, { useContext, useEffect, useState } from 'react'
import itemStyles from '../styles/items.module.css'
import popularStyles from '../styles/popular.module.css'
import { useParams } from 'react-router-dom'
import AppContext from '../services/AppContext'
import AddItem from './AddItem'

const Items = () => {

    const [state, setState] = useContext(AppContext)
    const [items, setItems] = useState([]);
    const params = useParams();
    // console.log(paramn)
    const type = params['type'];


    useEffect(() => {
        const tempItems = [];

        for (let itemX of state.products) {
            if (itemX.type === type) {
                tempItems.push(itemX);
            }
        }
        setItems(tempItems);
    }, [type, state.products])

    return (
        <div className={itemStyles.itemContainer}>
            <div className={itemStyles.heading}> All {type}</div>
            <div className={popularStyles.items}>
                <div style={{display: "flex", flexWrap: "wrap", gap:"1.5rem", justifyContent:"center"}}>
                {items.map(item => {
                        return (
                            <div className={popularStyles.item} key={item.id}>
                                <div className={popularStyles.picContainer}>
                                    <img src={item.pic} alt='' />
                                </div>
                                <div className={popularStyles.dataContainer}>
                                    <div className={popularStyles.name}>{item.name}</div>
                                    <div className={popularStyles.weight}>{item.weight}</div>
                                    <div className={popularStyles.price}>
                                        <div className={popularStyles.current}>₹{item.price}</div>
                                        {item.was !== item.price ? (<div className={popularStyles.was}>₹{item.was}</div>) : null}
                                    </div>
                                    <div className={popularStyles.cta}><AddItem item={item} /></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>

    )
}

export default Items
