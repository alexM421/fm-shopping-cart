import * as React from "react"
const DecrementQuantity = ( props ) => (
  <div className="quantity-modifier" onClick={ props.handleDecrement }>
      <svg
    xmlns="http://www.w3.org/2000/svg"
    width={10}
    height={2}
    fill="none"
 
  >
    <path fill="currentColor" d="M0 .375h10v1.25H0V.375Z" />
    </svg>
  </div>

)
export default DecrementQuantity
