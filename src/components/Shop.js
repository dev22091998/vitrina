import { useState, useEffect } from "react"
import { API_KEY, API_URL } from "../config"
import GoodList from "./GoodList";
import Loader from "./Loader";
import Cart from './Cart';

export default function Shop(){
    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(true);
    const [order, serOrder] = useState([]);

    useEffect(()=>{
        fetch(API_URL, {
            headers: {
                Authorization: API_KEY,
            },
        })
    .then((response) => response.json())
    .then((data) => {
        data.featured && setGoods(data.featured);
        setLoading(false);
    })
}, []);

    return(
        <div className="container content">
            <Cart quantity={order.length}/>
            {loading ? <Loader/> : <GoodList goods={goods}/>}
        </div>
    )
}