import React from "react";

import AddToCart from "../svg/AddToCart";

export default function Dessert ( { image, name, price, category } ) {

    return(
        <div className="dessert">
            <div className="dessert-img">
                <img src={image}/>
                <button className="text-preset-4-bold">
                    <AddToCart style={{color:"#C7330F"}}/>
                    Add to Cart
                </button>
            </div>
            <div className="dessert-desc">
                <p className="text-preset-4">{category}</p>
                <h1 className="text-preset-3">{name}</h1>
                <p className="text-preset-3">${price}</p>
            </div>
        </div>
    )
}