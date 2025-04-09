import React from 'react'

import './App.css'

import Dessert from './components/Dessert'
import data from "./data.json"
import Cart from './components/Cart'
import OrderConfirmed from './components/OrderConfirmed'

function App() {

  const [desserts, setDesserts] = React.useState([])
  const [cartContent, setCartContent] = React.useState({})
  const [isOrderConfirmed, setIsOrderConfirmed] = React.useState(false)

  const printDesserts = () => {

    const dessertsArr = []
    const cartContentObj = cartContent
    let keyCount = 0;

    for(let dessert of data){

      keyCount++

      dessertsArr.push(
        <Dessert 
        image={dessert.image.desktop}
        name={dessert.name}
        category={dessert.category}
        price={dessert.price.toFixed(2)}
        key={keyCount}
        cartContent={cartContent}
        setCartContent={setCartContent}
        />
      )

      if(!cartContent[dessert.name]){
        cartContentObj[dessert.name] = [0, dessert.price.toFixed(2),dessert.image.thumbnail];
      }
    }

    setCartContent(cartContentObj)
    setDesserts(dessertsArr)
  }

  React.useEffect(() => {
    printDesserts()
  },[cartContent])

  return (
    <div id="app">
      <div id="app-container" className={isOrderConfirmed? "confirming-order":""}>
        <div id="desserts-main">
          <h1 className='text-preset-1'>Desserts</h1>
          <div id="desserts-container">
              {desserts}
          </div>
        </div>
        <Cart cartContent={cartContent} setCartContent={setCartContent} setIsOrderConfirmed={setIsOrderConfirmed}/>
      </div>
      {isOrderConfirmed? <OrderConfirmed cartContent={cartContent} setIsOrderConfirmed={setIsOrderConfirmed}/>: ""}
    </div>
  )
}

export default App
