import classes from './CartButton.module.css';
import {actionsUi} from "../store/ui-slice";
import {useDispatch, useSelector} from "react-redux";

const CartButton = (props) => {
    const dispatcher = useDispatch();
    const counter = useSelector(state => state.cart.totalAmount)

    const toggleCartHandler = () =>{
        dispatcher(actionsUi.toggleVisibility())
    }
  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{counter}</span>
    </button>
  );
};

export default CartButton;
