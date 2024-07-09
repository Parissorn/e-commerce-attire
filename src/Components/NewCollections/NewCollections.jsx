import "./NewCollections.css"
import new_collection from "../Assets/new_collections"
import Item from "../Item/Item"

export default function NewCollections() {
    return (
        <div className="new-collections">
            <h1>NEW COLLECTIONS</h1>
            <hr />
            <div className="collections">
                {new_collection.map((item, i) => {
                    return <Item key={i} props={item} />
                })}
            </div>
        </div>
    )
}
