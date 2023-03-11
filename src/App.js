import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector, useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import toast, {Toaster} from 'react-hot-toast'
import {actionsUi} from "./components/store/ui-slice";
import Notification from "./components/UI/Notification";
import {sendCartData, fetchCartData} from "./components/store/cart-actions";

let isInitial = true;

function App() {

    const dispatch = useDispatch()
  const isVisible = useSelector(state => state.ui.cartIsVisible);
  const cart = useSelector(state=> state.cart)
    const notification = useSelector(state=> state.ui.notification)

    useEffect(() => {
        dispatch(fetchCartData())
    }, [])

    useEffect(()=>{
        if(!isInitial){
            if(cart.enabled)
            dispatch(sendCartData(cart))
        // toast.promise(sendCartData(), {
        //     loading: "Fetching data",
        //     success: "Data fetched successfully",
        //     error: "Error when fetching",
        // });
        }
        else {isInitial = false;}
    }, [cart, dispatch])


  return (
      <>
          {notification && <Notification status = {notification.status} title = {notification.title} message = {notification.message}/>}
    <Layout>
        <Toaster />
        {isVisible && <Cart />}
      <Products />
    </Layout>
      </>
  );
}

export default App;
