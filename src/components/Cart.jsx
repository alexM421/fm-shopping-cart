import React from "react";

import EmptyCart from "../svg/EmptyCart";

export default function Cart () {

    return(
        <div className="cart">
            <h1 className="text-preset-2">Your Cart</h1>
            <div className="empty-cart">
                <EmptyCart/>
                <p className="text-preset-4-bold">Your added item will appear here</p>
            </div>
        </div>

    )
}