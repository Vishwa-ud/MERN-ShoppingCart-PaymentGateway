import './CartItem.css';
import { Link } from 'react-router-dom';

const CartItem = () => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmmvCUi1_F5O5jtHQr6_9BfAF1i7iRiqr2MSrzToqC5hb6_WoUPVyxphd5-tLRrjQJAE&usqp=CAU" alt="product name"/>
        </div>
        <Link to={`/product/${111}`} className="cartItem__name">
          <p>Product 1</p>
        </Link>
        <p className="cartitem__price">Rs 499.99</p>
        <select className="cartitem__select">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <button className="cartitem__deleteBtn">
          <i className="fas fa-trash"></i>
        </button>
      </div>
      );
};

export default CartItem;