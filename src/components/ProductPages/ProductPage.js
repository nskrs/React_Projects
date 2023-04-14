import { useParams } from "react-router-dom";
import productsArr from "../Layout/ProductsData";
import NavBar from "../MainHeader/NavBar";

const ProductPage = () => {
  const { id } = useParams();
  const product = productsArr[id];

  return (
    <>
    <NavBar/>
    <div>
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt={product.title} />
      <h2>${product.price}</h2>
      <p>Reviews:</p>
      {product.title}
    </div></>
  );
};

export default ProductPage;
