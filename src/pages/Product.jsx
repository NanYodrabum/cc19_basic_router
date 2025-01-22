import useProductStore from "../store/product-store"

function Product() {

 const products = useProductStore((state)=>state.products)
 console.log(products);
 return <div>Product</div>
  
}

export default Product