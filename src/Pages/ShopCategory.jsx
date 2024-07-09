import { useContext } from "react"
import "./CSS/ShopCategory.css"
import { ShopContext } from "../Context/ShopContext"
import dropdown_icon from "../Components/Assets/dropdown_icon.png"
import Item from "../Components/Item/Item"

export default function ShopCategory(props) {

    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img className="shopcategory-banner" src={props.banner} alt="" />
            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shopcategory-sort">
                    sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shopcategory-products">
                {all_product.map((item, index) => {
                    if (item.category === props.category) {
                        return <Item key={index} props={item} />
                    }
                    else {
                        return null
                    }
                })}
            </div>
            <div className="shopcategory-loadmore">
                Explore more..
            </div>
        </div>
    )
}