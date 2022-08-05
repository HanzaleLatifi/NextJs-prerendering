import axios from "axios";
import Link from "next/link";

function ProductList({products}) {
  return (
    <div>
        <h1>ProductList</h1>
        {products.map(product=>{
            return <div key={product.id}>
                <Link href={`/products/${product.id}`}>
                    <a>{product.title} - {product.price}</a>
                </Link>
                <hr/>
            </div>
        })}
       
    </div>
  )
}

export default ProductList;

export async function getStaticProps(){
    const {data} = await axios.get("http://localhost:4000/products")
    return{
        props:{
            products:data
        },
        revalidate:10,
    }
}
