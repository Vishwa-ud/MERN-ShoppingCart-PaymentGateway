import "./Product.css";
import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div className="product">
            <img src='../images/Package 1' alt=""/>
            <div className="product__info">
                <p className="info__name">Offer 1</p>
                <p className="info__discription">One Medium Pop Corn + One Small Coke</p>
                <p className='info__price'>Rs. 400</p>
                <Link to={`/product/${1111}`} className="info__button">View</Link>
            </div>
        </div>
  );
};

export default Product