import axios from "axios";
import { create } from "zustand"
import { persist } from "zustand/middleware";

const productStore = (set) => ({
    products: [],
    cart: [],
    actionGetData: async () => {
        try { 
            const resp = await axios.get('https://dummyjson.com/products')
            // console.log(resp.data.products);
            set({products: resp.data.products});
            
        } catch (error) {
            console.log(error.message);
        }
    },
    actionAddToCart: (product) => {
        // console.log(product);
        set((state)=>({cart:[...state.cart,product]}))
    },
    actionRemoveProductCart:(id)=>{
        set((state)=>({cart:state.cart.filter((item)=> item.id !==id  )}))
    },
    actionClear: ()=>{
        set({cart:[]})
    }
})

const persistStore = {
    name: "product-store",
    partialize: (state)=>({
        cart: state.cart
    })
}


const useProductStore = create(persist(productStore, persistStore))
export default useProductStore
