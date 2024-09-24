import "./Cart.css";
import { StoreContext } from "../../Context/StoreContext";
import { useContext } from "react";

const Cart = () => {
  const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

  // Logging the cartItems and food_list for debugging
  console.log("Cart Items:", cartItems);
  console.log("Food List:", food_list);

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          const quantity = cartItems[item._id];

          if (quantity !== undefined && quantity > 0) {
            return (
              <div className="cart-item-title cart-items-item" key={index}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>{item.price}</p>
                <p>{quantity}</p>
                <p>{item.price * quantity}</p>
                <p onClick={() => removeFromCart(item._id)}>x</p>
              </div>
            );
          }
          return null; // Return null for items not in the cart
        })}
      </div>
    </div>
  );
};

export default Cart;
