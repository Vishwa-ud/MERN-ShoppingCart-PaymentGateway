import './ProductScreen.css'

const ProductScreen = () => {
    return (<div className="productscreen"> 
    <div className="productscreen__left">
    <div className="left__image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXmmvCUi1_F5O5jtHQr6_9BfAF1i7iRiqr2MSrzToqC5hb6_WoUPVyxphd5-tLRrjQJAE&usqp=CAU" alt="product name"/>
    </div>
    <div className="left__info">
    <p className="left__name">Package1</p>
    <p>Price: Rs500</p>
    <p>Description: Pop corn + pepsi ...</p>
        </div>
    </div>
    <div className="productscreen__right">
    <div className="right__info">
    <p>
    Price: <span>Rs500</span>
    </p>
    <p>
    Status: <span>In Stock</span>
    </p>
    <p>
    Qty
    <select>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    </select>
    </p>
    <p>
    <button type="button">Add To Cart</button>
    </p>
        </div>
    </div>
     </div>);
    

};
export default ProductScreen;