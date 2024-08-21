import React, { useState } from "react";

function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [ ...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [ ...prevArr, "-"])
    }

    return (
        <div>
            <button onClick={addMinus}>-</button>
            <button onClick={addPlus}>+</button>
            {arr.toString()}
        </div>
    )

    // const [cart, setCart] = useState({
    //     item: "apple",
    //     quantity: 0,
    // })

    // function addApple() {
    //     // 1. Use a callback to get the previous value
    //     // 2. Spread out all the properties of the prev state
    //     // 3. Only change the property that you need to change
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity + 1,
    //     }))
    // }

    // function subApple() {
    //     setCart(prevCart => ({
    //         ...prevCart,
    //         quantity: prevCart.quantity - 1,
    //     }))
    // }

    // return (
    //     <div>
    //         <button onClick={subApple}>-</button>
    //         {cart.quantity}
    //         {cart.item}
    //         <button onClick={addApple}>+</button>
    //     </div>
    // )
}

export default Counter