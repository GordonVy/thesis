import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

const CartItem = ({ name, price, currency, onClick }) => {

    return (
        <div className="cart-item">
            <div>
                <button className="btn btn-xs" onClick={onClick}>X</button>
                <span className="cart-item__name">{name}</span>
            </div>
            <div className="cart-item__price">
                <Counter />  {price} {currency}
            </div>
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
