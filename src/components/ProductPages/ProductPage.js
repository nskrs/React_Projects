import { useParams } from "react-router-dom";
import productsArr from "../Body/ProductsData";
import NavBar from "../MainNavigation/NavBar";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const product = productsArr[id];

  const backToPage = () => {
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <div>
        <h1>{product.title}</h1>
        <img src={product.imageUrl} alt={product.title} />
        <h2>${product.price}</h2>
        <p>Reviews:</p>
        {product.title}
        <button onClick={backToPage}>Back</button>
      </div>
    </>
  );
};

export default ProductPage;
