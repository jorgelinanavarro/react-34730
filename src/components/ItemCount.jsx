import React from 'react'
import { useState } from 'react';

const ItemCount = () => {
    const [counter, setCounter] = useState(0)

    const handleClick = () => {
        if(counter === 6) {
            alert("Ya no hay stock disponible")
            return
        }
        setCounter(counter + 1)
    }
    const handleClick2 = () => {
        if(counter === 0) {
            return
        }
        setCounter(counter - 1)
    }
  return (
    <div>
        <p>Cantidad:</p>
        <strong>{counter}</strong>
        <div>
            <button onClick={handleClick}>+</button>
            <button onClick={handleClick2}>-</button>
        </div>
    </div>
  )
}

export default ItemCount
