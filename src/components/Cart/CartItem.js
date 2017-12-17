import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency, onClick }) => {
    return (
        <div className="cart-item">
            <div className="card-item-bl">
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div class="btn-group">
                <button type="button" class="btn btn-default">-</button>
                <button type="button" class="btn btn-default">Middle</button>
                <button type="button" class="btn btn-default">+</button>
            </div>
            <div className="cart-item__price">{price} {currency}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}

export default CartItem;
