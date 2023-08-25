import './Product.css';
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <div className="product">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmmvCUi1_F5O5jtHQr6_9BfAF1i7iRiqr2MSrzToqC5hb6_WoUPVyxphd5-tLRrjQJAE&usqp=CAU" alt="product 1" />

      <div className="product__info">
        <p className="info__name">Package1</p>

        <p className="info__description">Pop corn + pepsi ...</p>

        <p className="info__price">Rs 500</p>

        <Link to={`/product/${1111}`} className="info__button">
          View
        </Link>
      </div>
    </div>
  );
};

export default Product;
