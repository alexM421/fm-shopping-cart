import React from "react";

import EmptyCart from "../svg/EmptyCart";
import RemoveItem from "../svg/RemoveItem";
import CarbonNeutral from "../svg/CarbonNeutral";

export default function Cart ( { cartContent, setCartContent, setIsOrderConfirmed }) {

    const handleRemoveItem = (name) => {
        setCartContent(oldContent => ({...oldContent, [name]: [0, oldContent[name][1], oldContent[name][2]]}))
    }


    const cartDisplay = () => {

        const orders = []

        for(let order in cartContent){
            if(cartContent[order][0]!==0){
                orders.push(
                    <div className="order-container" key={`${order}-key`}>
                        <div className="order">
                            <div className="order-details">
                                <h1 className="text-preset-4-bold">{order}</h1>
                                <div className="text-preset-4-bold order-pricing">
                                    <p className="order-quantity">{`${cartContent[order][0]}x`}</p>
                                    <p className="order-price text-preset-4">@ ${cartContent[order][1]}</p>
                                    <p className="order-priceXquantity">${(cartContent[order][1]*cartContent[order][0]).toFixed(2)}</p>
                                </div>
                            </div>
                            <RemoveItem handleRemoveItem={handleRemoveItem} name={order}/>
                        </div>
                        <hr/>
                    </div>
                )
            }
        }

        const total = Object.values(cartContent).reduce((acc, currentValue) => acc+currentValue[0]*currentValue[1],0).toFixed(2)

        if(orders.length<1){
            return(
                <div className="cart">
                    <h1 className="text-preset-2">Your Cart</h1>
                    <div className="empty-cart">
                        <EmptyCart/>
                        <p className="text-preset-4-bold">Your added item will appear here</p>
                    </div>
                </div>
            )
        }else{
            return(
            <div className="cart">
                <h1 className="text-preset-2">{`Your Cart (${orders.length})`}</h1>
                <div className="orders">
                    {orders}
                </div>
                <div className="total">
                        <p className="text-preset-4">Order Total</p>
                        <p className="text-preset-2">${total}</p>
                </div>
                <div className="carbon-free">
                    <CarbonNeutral/>
                    <p className="text-preset-4">This is a <span className="text-preset-4-bold">carbon-neutral</span> delivery</p>
                </div>
                <button className="text-preset-3 confirm-btn" onClick={() => setIsOrderConfirmed(true)}>Confirm Order</button>
            </div>
            )
        }
    }


    return cartDisplay()
}