import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logOut} from "../../store/userReducer.jsx";
import {useEffect} from "react";


export const Logout = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        localStorage.removeItem('user')
        dispatch(logOut())
        navigate('/')
    }, []);

    return (
        <>
            <p>Logout</p>
        </>
    )
}