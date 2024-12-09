import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {logOut, setUser} from "../../store/userReducer.jsx";
import style from "./style.module.css";
import {useNavigate} from "react-router-dom";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const login = () => {

        if (username.length === 0 || password.length === 0) {
            return
        }

        localStorage.setItem('user', JSON.stringify({
            login: username,
            password: password,
            isLoggedIn: true,
        }));

        dispatch(setUser(username));

        // alert('Вы авторизованы!');

        // redirect()


    };

    const redirect = () => {
        const navigate = useNavigate();
        useEffect(() => {
            navigate('/')
        }, []);
    }

    return (
        <div className={style.form}>
            <p>Авторизация</p>
            <input
                className={style.input}
                type="text"
                placeholder="Логин"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <input
                className={style.input}
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className={style.button} onClick={login}>Войти</button>
        </div>
    );
};
