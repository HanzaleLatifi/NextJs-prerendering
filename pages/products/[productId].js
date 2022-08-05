import axios from "axios";
import { useRouter } from "next/router";

function Product({ product }) {
  const router=useRouter();
  if(router.isFallback){
    return <div>loading...</div>
  }
  return (
    <div>
      <h1>Product page</h1>
      <p>{product.title}</p>
      <p>{product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}

export default Product;

//
export async function getStaticPaths() {

  return {
    paths:[
      {params:{productId:"1"}},
    ],
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const { data } = await axios.get(
    `http://localhost:4000/products/${params.productId}`
  );
  return {
    props: {
      product: data,
    },
    revalidate:10,

  };
}
