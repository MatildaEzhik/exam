import {addItem} from "../../store/cartReducer.jsx";
import {pizzas} from "../../pizzas/pizzas.js";
import {useDispatch, useSelector} from "react-redux";

import style from './style.module.css';
import {useState, useEffect} from "react";
import {Modal} from "../modal/Modal.jsx";

export const PizzaCatalog = () => {
    const dispatch = useDispatch();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState(""); // Строка, вводимая пользователем
    const [debouncedQuery, setDebouncedQuery] = useState(""); // Дебаунс-строка

    const user = useSelector((state) => state.user);

    const [quantities, setQuantities] = useState(pizzas.reduce((piza, pizza) => {
        piza[pizza.id] = 1;
        return piza;
    }, {}));

    const filteredPizzas = pizzas.filter((pizza) =>
        pizza.name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );

    const addToCard = (pizza) => {
        console.log(pizza);
        const quantity = quantities[pizza.id];
        dispatch(addItem({ ...pizza, quantity }));
        alert('Пицца добавлена в корзину')
    };

    const addQuantity = (pizzaId, change) => {
        setQuantities((prevQuantities) => {
            const newQuantity = Math.max(prevQuantities[pizzaId] + change, 1);
            return { ...prevQuantities, [pizzaId]: newQuantity };
        });
    };


    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebouncedQuery(searchQuery);
        }, 500);
        return () => clearTimeout(timeout);
    }, [searchQuery]);



    return (
        <div>
            <h2>Каталог пиццы</h2>

            <input
                type="text"
                placeholder="Поиск по названию..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={style.searchInput}
            />

            <div className={style.pizzaList}>
                {filteredPizzas.map((pizza) =>{
                    console.log(pizza)
                    return (

                    <div key={pizza.id} className={style.pizzaItem}>
                        <img src={pizza.image} alt={pizza.name} className={style.pizzaImage} />
                        <h3>{pizza.name}</h3>
                        <p>{pizza.description}</p>
                        <p>Цена: {pizza.price} сум.</p>

                        {user.user === null ? '' : <div>
                            <button className={style.addButton} onClick={() => addQuantity(pizza.id, -1)}>-</button>
                            <span>{quantities[pizza.id]}</span>
                            <button className={style.addButton} onClick={() => addQuantity(pizza.id, 1)}>+</button>
                            <br/>


                            <button className={style.orderButton} onClick={() => addToCard(pizza)}>Добавить в корзину
                            </button>


                            {/*<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>*/}
                            {/*    <button className={style.addButton} onClick={() => addQuantity(pizza.id, -1)}>-</button>*/}
                            {/*    <span>{quantities[pizza.id]}</span>*/}
                            {/*    <button className={style.addButton} onClick={() => addQuantity(pizza.id, 1)}>+</button>*/}
                            {/*    <button className={style.orderButton} onClick={() => addToCard(pizza)}>Добавить в*/}
                            {/*        корзину*/}
                            {/*    </button>*/}
                            {/*</Modal>*/}
                        </div>}

                    </div>
                    )
                })}
            </div>
        </div>
    );
};
