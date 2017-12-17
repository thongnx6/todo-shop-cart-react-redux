import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ name, price, currency, qty, onClick, onPlus, onMinus }) => {
    return (
        <div className="cart-item">
            <div className="card-item-bl">
                <button className="btn btn-danger btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="btn-group">
                <button type="button" className="btn btn-default" disabled={qty === 1} onClick={onMinus}>-</button>
                <button type="button" className="btn btn-default">{qty}</button>
                <button type="button" className="btn btn-default" onClick={onPlus}>+</button>
            </div>
            <div className="cart-item__price">{price * qty} {currency}</div>
        </div>
    );
}

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    qty: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    onPlus: PropTypes.func.isRequired,
    onMinus: PropTypes.func.isRequired,
}

export default CartItem;
