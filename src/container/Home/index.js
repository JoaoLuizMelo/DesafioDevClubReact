import React, { useState, useRef, useEffect } from 'react'
import Axios from 'axios'
import { useHistory } from 'react-router-dom';
//import { useState } from 'react';

import BurgerHome from '../../assets/burger-order.png'

import { Body, Container, Tittle, Legend, Input, Button, Img } from './styles';





function App() {

    const [users, setUsers] = useState([]);
    const inputName = useRef();
    const inputOrder = useRef();
    const history = useHistory();

    async function addOrder() {
        const { data: newUser } = await Axios.post("http://localhost:3001/order", { name: inputName.current.value, ordered: inputOrder.current.value });
        setUsers([...users, { id: newUser.id, name: newUser.name, order: newUser.ordered }]);
        history.push("/orders");
    }



  

    return (
        <Body>
            <Container>
                <Img src={BurgerHome} />
                <Tittle>Faça seu pedido!</Tittle>
                <Legend >Pedido</Legend>
                <Input ref={inputOrder} />

                <Legend>Nome do Cliente</Legend>
                <Input ref={inputName} />

                <Button onClick={addOrder}><b>Novo Pedido</b></Button>
            
            </Container>
        </Body>
    );
}
export default App;