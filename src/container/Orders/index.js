import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import BurgerOrder from '../../assets/burger-data.png'
import { Body, Container, Tittle, Button, Img, List } from './styles';
import Trash from '../../assets/trash.svg'



function Orders() {
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        async function fechUsers() {
            const { data: newUsers } = await Axios.get("http://localhost:3001/order")
            setUsers(newUsers)
        }

        fechUsers()
    }, [])




    async function delOrder(userId) {
        await Axios.delete(`http://localhost:3001/order/${userId}`)
        const newUsers = users.filter(newUsers => newUsers.id !== userId)
        setUsers(newUsers)
    }

    function GoBackPage() {
        history.push("/")
    }


    return (
        <Body>
            <Container>
                <Img src={BurgerOrder} />
                <Tittle>Faça seu pedido!</Tittle>
                <ul>
                    {
                        users.map(user => (<List key={user.id}> <div><p>{user.ordered}</p> <p><b>{user.name}</b></p></div> <button onClick={() => delOrder(user.id)}><img src={Trash} /></button></List>))
                    }
                </ul>

                <Button onClick={GoBackPage}><b>Voltar</b></Button>

            </Container>
        </Body>
    );
}
export default Orders;