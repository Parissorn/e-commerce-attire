import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css"
import logo from "../Assets/logo.png"
import cart_icon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import dropdown_icon from "../Assets/dropdown_icon.png"



export default function Navbar() {

    const { getTotalCartItem } = useContext(ShopContext);

    const [menu, setMenu] = useState("shop");

    const menuRef = useRef(null);

    function dropdownToggle(e) {
        menuRef.current.classList.toggle("nav-menu-visible") // add หรือ remove classname (ถ้ามีอยู่แล้ว) ให้กับตัว ul
        e.target.classList.toggle("open") // add open classname ให้กับ img (ถ้ามี classname อยู่แล้วจะ remove เพราะมันคือ toggle)
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdownToggle} src={dropdown_icon} alt="" />
            <ul ref={menuRef} className="nav-menu">

                <li onClick={() => { setMenu("shop") }}><Link to='/' style={{ textDecoration: "none" }}>Shop</Link>{menu === "shop" && <hr />}
                </li>

                <li onClick={() => { setMenu("mens") }}><Link to='/mens' style={{ textDecoration: "none" }}>Men</Link> {menu === "mens" && <hr />}
                </li>

                <li onClick={() => { setMenu("womens") }}><Link to='/womens' style={{ textDecoration: "none" }}>Women</Link> {menu === "womens" && <hr />}
                </li>

                <li onClick={() => { setMenu("kids") }}><Link to='/kids' style={{ textDecoration: "none" }}>Kids</Link> {menu === "kids" && <hr />}</li>
            </ul>
            <div className='nav-login-cart'>
                <Link to='/LoginSignup'><button>Login</button></Link>
                <Link to='/Cart'> <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItem()}</div>
            </div>
        </div>
    )
}