import classes from './CartItem.module.css';
import {cartActions} from "../store/cart-slice";
import {useDispatch} from "react-redux";

const CartItem = (props) => {
  const { id, title, quantity, totalPrice, price } = props.item;
  const dispathc = useDispatch()

  const addItemHandler = () => {
      dispathc(cartActions.addItemToCart({id, title, quantity, totalPrice, price}))
  }

  const removeItemFromHandler = () => {
      dispathc(cartActions.removeItemFormCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemFromHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
