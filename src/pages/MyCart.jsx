import ProductCard from "../components/ProductCard";
import useProductStore from "../store/product-store"

function MyCart() {

    const cart = useProductStore((state) => state.cart)
    const actionClear = useProductStore((state)=> state.actionClear)
    console.log(cart);

    return (
        <>
        <div className='flex flex-wrap'>
            {
                cart.map((product) => {
                    return <ProductCard
                        key={product.id}
                        product={product} />
                })
            }
        </div>
        <button className="rounded-lg border-2 border-transparent bg-blue-600 px-4 py-2 font-medium text-white focus:outline-none focus:ring hover:bg-blue-700"
        onClick={actionClear}>Clear</button>
        </>
    )
}

export default MyCart