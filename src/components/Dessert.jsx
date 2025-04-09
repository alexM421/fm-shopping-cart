import React from "react";

import AddToCart from "../svg/AddToCart";
import DecrementQuantity from "../svg/DecrementQuantity";
import IncrementQuantity from "../svg/IncrementQuantity";

export default function Dessert ( { image, name, price, category, cartContent, setCartContent } ) {


    const handleIncrement = () => {
        setCartContent(prevObj => ({...prevObj, [name]: [prevObj[name][0]+1,price, prevObj[name][2]]}))
    }

    const handleDecrement = () => {
        setCartContent(prevObj =>  ({...prevObj, [name]: [prevObj[name][0]-1, price, prevObj[name][2]]}))
    }

    const buttonDisplay = () => {

        let btn = ""

        if(cartContent[name][0]){
            btn = (
                <button className="text-preset-4-bold increment-btn">
                    <DecrementQuantity handleDecrement={handleDecrement}/>
                    <p>{cartContent[name][0]}</p>
                    <IncrementQuantity handleIncrement={handleIncrement}/>
                </button>
            )
        }else{
            btn =(
                <button 
                className="text-preset-4-bold add-to-cart-btn"
                onClick={handleIncrement}
                >
                    <AddToCart style={{color:"#C7330F"}}/>
                    Add to Cart
                </button>
            )
        } 
        return btn
    }
    
    return(
        <div className="dessert">
            <div className="dessert-img">
                <img src={image}/>
                {buttonDisplay()}
            </div>
            <div className="dessert-desc">
                <p className="text-preset-4">{category}</p>
                <h1 className="text-preset-3">{name}</h1>
                <p className="text-preset-3">${price}</p>
            </div>
        </div>
    )
}