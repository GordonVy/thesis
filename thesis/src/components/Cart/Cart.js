import React from 'react';
import PropTypes from 'prop-types';
import CartItem from './CartItem';
import { Divider, Button } from "semantic-ui-react";

const Cart = ({ items, total, currency, removeFromCart }) => {
    return (
        <div style={{ paddingLeft: 20 }}>
            <br/>
            <h3>Shopping Cart</h3>

            <div className="cart" style={{ paddingRight: 20 }}>
                <div className="panel panel-default">
                    <div className="panel-body">
                        {items.length > 0 && (
                            <div className="cart__body">
                                {items.map(item => (
                                    <CartItem key={item.id} {...item} onClick={() => removeFromCart(item.id)} />
                                ))}
                            </div>
                        )}
                        {items.length === 0 && (
                            <div className="alert alert-info" style={{ textAlign: 'center' }}>Cart is empty</div>
                        )}
                        <Divider fitted /><br/>
                        <div className="cart__total">Total: {total} {currency}</div><br/>
                        <div className="action-block">
                            {/*<button type="button" className={this.state.cart.length > 0 ? " " : "disabled"}>PROCEED TO CHECKOUT</button>*/}
                            <Button className={items.length > 0 ? " " : "disabled"} color="linkedin" fluid size="massive">PROCEED TO CHECKOUT</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Cart.propTypes = {
    items: PropTypes.array,
    total: PropTypes.number,
    currency: PropTypes.string,
    removeFromCart: PropTypes.func.isRequired
}

export default Cart;
