import {actionsUi} from "./ui-slice";
import {cartActions} from "./cart-slice";

export const fetchCartData = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-app-9d66f-default-rtdb.firebaseio.com/cart.json');
            if(!response.ok){
                throw new Error('Error while fetching data')
            }

            const data = await response.json();

            return data;
        };
        try{
            const data = await fetchData();
            dispatch(cartActions.replaceCart({...data, items: data.items || []}));
        }catch(e){
            dispatch(actionsUi.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Fetching data failed'
            }))}
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(dispatch(actionsUi.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data...'
        })))

        const sendRequest = async() => {
            const response = await fetch('https://react-http-app-9d66f-default-rtdb.firebaseio.com/cart.json',
                {method: 'PUT',
                    body: JSON.stringify(cart)});
            if(!response.ok){
                throw new Error('Error')
            }
        }
        try{
            await sendRequest();
            dispatch(actionsUi.showNotification({
                status: 'success',
                title: 'Successful',
                message: 'Sent cart data successfully'
            }))
        }catch(e){
            dispatch(actionsUi.showNotification({
                status: 'error',
                title: 'Error',
                message: 'Error handling the data'
            }))}
    }}