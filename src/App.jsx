import React from 'react'

import './App.css'

import Dessert from './components/Dessert'
import data from "./data.json"
import Cart from './components/Cart'

function App() {

  const [desserts, setDesserts] = React.useState([])

  const printDesserts = () => {

    const dessertsArr = []
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
        />
      )

    }

    setDesserts(dessertsArr)
  }

  React.useEffect(() => {
    printDesserts()
  },[])

  return (
    <div id="app">
      <div id="desserts-main">
        <h1 className='text-preset-1'>Desserts</h1>
        <div id="desserts-container">
            {desserts}
        </div>
      </div>
      <Cart/>
    </div>
  )
}

export default App
