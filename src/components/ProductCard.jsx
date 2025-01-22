import { Trash2 } from "lucide-react"
import useProductStore from "../store/product-store"

function ProductCard({ product }) {
    const actionAddToCart = useProductStore((state) => state.actionAddToCart)
    const actionRemoveProductCart = useProductStore((state)=> state.actionRemoveProductCart)
    return (
        <div className="border border-gray-100 bg-white shadow-md w-[300px] h-[400px] text-center p-12">
            <img className="w-[200px] h-[100px] object-cover" src={product.images[0]} />
            <h1 className='text-xl tracking-tight text-slate-900'>{product.title}</h1>
            <p className='font-semibold'>{product.price}$</p>
            <p className='mb-2 text-base dark:text-gray-300 text-gray-700"'>{product.description.slice(0, 80)}</p>

            <div className='flex gap-2'>
                <button onClick={()=>actionRemoveProductCart(product.id)}>
                    <Trash2 color='red' />
                </button>
                <a onClick={() => actionAddToCart(product)} href="#" class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Add to cart</a>
            </div>
        </div>
    )
}

export default ProductCard