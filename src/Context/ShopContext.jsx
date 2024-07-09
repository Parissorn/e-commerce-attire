import { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js"

export const ShopContext = createContext(null);

function getDefaultCart() {

    let cart = {}

    for (let index = 0; index < all_product.length + 1; index++) {
        // variable object [], key oject [""] และ  .
        // cart.index ไม่ได้ มันจะเป็นการให้ key ชื่อ index
        cart[index] = 0;
    }
    return cart
}

// props ตอนนี้เป็น Object เปล่าๆ ละเราไป define มันตอน wrap ใส่ app ให้เป็น {children : <App/>}

const ShopContextProvider = (props) => {

    const [cartItem, setCartItem] = useState(getDefaultCart())

    function addToCart(itemId) {
        setCartItem((previous) => ({ ...previous, [itemId]: previous[itemId] + 1 }))
        // ถ้า console.log(cartItem) เลย มันจะยังได้ค่า 0 เพราะมันยังไม่วนขึ้นไป set ค่าจากข้างบนใหม่
    }
    function removeFromCart(itemId) {
        setCartItem((previous) => ({ ...previous, [itemId]: previous[itemId] - 1 }))
    }

    function getTotalCartAmout() {

        let totalAmount = 0;

        for (const item in cartItem) {
            if (cartItem[item] > 0) {

                let itemInfo = all_product.find((product) => { return product.id === Number(item) })

                totalAmount += itemInfo.new_price * cartItem[item]
            }
        }

        return totalAmount
    }

    function getTotalCartItem() {
        let totalItem = 0;
        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item]
            }
        }
        return totalItem
    }

    const contextValue = { all_product, cartItem, addToCart, removeFromCart, getTotalCartAmout, getTotalCartItem };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;