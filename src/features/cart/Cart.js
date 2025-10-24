import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQty, decrementQty, removeFromCart, clearCart } from './cart/cartSlice';
import './cart.css';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div className="cart-container">
      <h2>🛍️ Shopping Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {items.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-info">
                <h4>{item.title}</h4>
                <p>${item.price} × {item.qty}</p>
              </div>
              <div className="cart-actions">
                <button onClick={() => dispatch(decrementQty(item.id))}>-</button>
                <span>{item.qty}</span>
                <button onClick={() => dispatch(incrementQty(item.id))}>+</button>
                <button className="remove-btn" onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <div className="cart-footer">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button onClick={() => dispatch(clearCart())} className="clear-btn">
              Clear Cart
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
