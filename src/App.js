import React from 'react';
import Cart from './containers/Cart';
import ProductList from './containers/ProductList';

const App = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1>[React+Redux] Shopping Cart</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <Cart />
                </div>
                <div className="col-md-12">
                    <ProductList />
                </div>
            </div>

            <footer>
                <small>
                    made by <a href="http://toilaptrinh.com">Thong Nguyen</a>, source code available on <a href="https://github.com/thongnx6/todo-shop-cart-react-redux">github</a>
                </small>
            </footer>
        </div>
    );
}

export default App;
