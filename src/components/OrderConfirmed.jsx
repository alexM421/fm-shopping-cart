import React from "react";
import Checkmark from "../svg/Checkmark";

export default function OrderConfirmed ( { cartContent, setIsOrderConfirmed }) {

    const displaySummary = () => {
            const orders = []
            for(let order in cartContent){
                console.log(cartContent[order])
                if(cartContent[order][0]!==0){
                    orders.push(
                        <div className="order-container" key={`${order}-key-summary`}>
                            <div className="order order-summary-order">
                                <img src={cartContent[order][2]} />
                                <div className="order-details">
                                    <h1 className="text-preset-4-bold">{order}</h1>
                                    <div className="text-preset-4-bold order-pricing">
                                        <p className="order-quantity">{`${cartContent[order][0]}x`}</p>
                                        <p className="order-price text-preset-4">@ ${cartContent[order][1]}</p>
                                    </div>
                                </div>
                                <p className="order-priceXquantity text-preset-4-bold">${(cartContent[order][1]*cartContent[order][0]).toFixed(2)}</p>
                            </div>
                            <hr/>
                        </div>
                    )
                }
            }

            const total = Object.values(cartContent).reduce((acc, currentValue) => acc+currentValue[0]*currentValue[1],0).toFixed(2)

        return(
            <div className="order-summary">
                <div className="order-summay-orders">
                    {orders}
                </div>
                <div className="total">
                        <p className="text-preset-4">Order Total</p>
                        <p className="text-preset-2">${total}</p>
                </div>
            </div>
        )      
    }

    return(
        <div id="order-confirmed">
            <div id="order-confirmed-text">
                <Checkmark/>
                <h1 className="text-preset-1">Order Confirmed</h1>
                <p className="text-preset-3">We hope you enjoy your food!</p>
            </div>
            {displaySummary()}
            <button className="confirm-btn" onClick={() => setIsOrderConfirmed(false)}>Start New Order</button>
        </div>
    )
}