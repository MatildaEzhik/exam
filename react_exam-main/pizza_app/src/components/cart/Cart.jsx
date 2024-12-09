import {useDispatch, useSelector} from "react-redux";
import style from "./style.module.css";
import {clearCart, removeItem} from "../../store/cartReducer.jsx";
import {useState} from "react";

export const Cart = () => {
    const cart = useSelector((state) => state.cart);
    const user = JSON.parse(localStorage.getItem('user'));

    const [isModalOpen, setIsModalOpen] = useState(false);

    const dispatch = useDispatch();

    const clear = () => {
        dispatch(clearCart())
    }

    const removeItemFromCard = (id) => {
        console.log(id)
        dispatch(removeItem(id));
    }
    console.log(cart)

    let allPrice = 0;

    const sum = () => {
        Object.keys(cart).map((itemId) => {
            allPrice += cart[itemId].quantity * cart[itemId].price;
        });
    };
    sum()

    const buy = () => {
        alert('Покупка оформлена на сумму: ' + allPrice);
        clear()
    }


    return (
        <div>
            <h2>Корзина</h2>
            <div>
                {user && user.isLoggedIn ? (
                    <>
                        <h2 className={style.text}>Добро пожаловать, {user.login}</h2>
                        <div>
                            <h3 className={style.text}>Ваша корзина</h3>
                            {Object.keys(cart).map((itemId) => (
                                <div key={itemId}>
                                    <p>{cart[itemId].name} - {cart[itemId].quantity} шт. <button className={style.addButton}
                                        onClick={() => removeItemFromCard(cart[itemId].id)}>-</button>
                                    </p>
                                </div>
                            ))}
                            {<p className={style.text}><b>Общая сумма:</b> {allPrice}</p>}
                            {

                                Object.keys(cart).length > 0 ? <div> <button onClick={buy}>Купить</button> <button className={style.orderButton} onClick={clear}>Очистить корзину</button></div> : ''
                            }

                        </div>
                    </>
                ) : (
                    <p>Пожалуйста, авторизуйтесь.</p>
                )}
            </div>

        </div>
    );
};