import "./RelatedProduct.css"
import data_product from "../Assets/data.js"
import Item from "../Item/Item"

export default function RelatedProduct() {
    return (
        <div className="relatedproduct">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map((item, index) => {
                    return <Item key={index} props={item} />
                })}
            </div>
        </div>
    )
}