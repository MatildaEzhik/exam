import { Link } from 'react-router-dom';

import style from './style.module.css'
import {useSelector} from "react-redux";

export const Header = () => {

    // const user = JSON.parse(localStorage.getItem('user'));

    const user = useSelector((state) => state.user);
    console.log(user)


    let logged = user.user != null;
    console.log(logged)

    return (
        <div className={style.header}>
            <div className={style.header__logo}>
                <p>Пицца плюс</p>
            </div>

            <div className={style.header__buttons}>
                <Link to="/">Каталог пиццы</Link>
                {logged ? (
                    <>
                        <Link to="/cart">Корзина</Link>
                        <Link to="/logout">Выйти</Link>
                    </>
                ) : <Link to="/login">Авторизация</Link>}


            </div>

        </div>
    );
};

