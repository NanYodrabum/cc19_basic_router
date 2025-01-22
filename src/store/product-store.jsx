import { create } from "zustand"

const productStore = () => ({
    products: []
})

const useProductStore = create(productStore)

export default useProductStore
