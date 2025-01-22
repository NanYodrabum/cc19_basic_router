import { useEffect } from "react";
import useProductStore from "../store/product-store"
import ProductCard from "../components/ProductCard";

function Product() {

    const products = useProductStore((state) => state.products)
    const actionGetData = useProductStore((state) => state.actionGetData)

    useEffect(() => {
        actionGetData()
    }, [])
    return (
        <div>
            <button
                onClick={actionGetData}
                className="bg-green-400">Get Data</button>
            <hr />
            <div className='flex flex-wrap'>
                {
                    products?.map((product) => {
                        console.log(product)
                        return <ProductCard key={product.id} product={product} />
                    })}
            </div>
        </div>
    )

}

export default Product