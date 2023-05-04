import { useParams } from "react-router-dom";

const ProductDetail = () => {
  //const param1 = useParams();
  const params = useParams();


  return (
    <section>
      <h1>Product Detail</h1>
      <p>{params.productId}</p>
    </section>
  );
};

export default ProductDetail;
