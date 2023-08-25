import './Home.css'
//Components
import Product from "../components/Product";

const Home = () => {
    return (
        <div className="homescreen">
        <h1 className="homescreen__title">Deals And Exclusives</h1>
        <h2>Get the best deals and exclusives on your favorite movies</h2>
        <h3>Shop Now</h3>
        <div className="homescreen__products">
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        <Product/>
        </div>
        </div>
    );
};




export default Home;