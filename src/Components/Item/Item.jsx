import { Link } from "react-router-dom"
import "./Item.css"


// อย่าใส่ . หน้า / ไม่งั้นตอนเราอยู่ที่หน้าหรือที่ path Men,Women,kids มันจะไปที่  http://localhost:5173/mens/product/13  มันจะเอา path 
// ที่เราอยู่ต่อกับ `./product/${props.id}  เลย
// ใส่แค่ / เพื่อบอกว่ามาจาก root

export default function Item({ props }) {
    return (
        <div className="item">
            <Link to={`/product/${props.id}`}>
                <img src={props.image} alt="" onClick={window.scrollTo(0, 0)} />
            </Link>
            <p>{props.name}</p>
            <div className="item-prices">
                <div className="item-price-new">
                    ${props.new_price}
                </div>
                <div className="item-price-old">
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
} 