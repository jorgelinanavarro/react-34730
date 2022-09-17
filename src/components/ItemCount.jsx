import React from 'react'
import { useState } from 'react';

const ItemCount = ({initial,stock,onAdd}) => {
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
            <button disabled={counter >= stock} onClick={handleClick}>+</button>
            <button disabled={counter <= 1} onClick={handleClick2}>-</button>
        </div>
        <div>
            <button disabled={stock <= 0} onClick={() => onAdd (counter)}>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount
