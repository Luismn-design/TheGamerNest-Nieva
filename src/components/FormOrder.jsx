import * as React from 'react';
import { Dialog, Button, Typography, Container, TextField, Alert, Collapse} from '@mui/material';
import { CartContext } from '../context/cartContext';
import OrderDialog from './OrderDialog';

import { useContext, useState, useEffect } from 'react';


import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase';

const FormOrder = ({open}) => {

    const {cart, totalPrice, clearCart} = useContext(CartContext);

    const [orderId, setOrderId] = useState();

    const [newOrder, setNewOrder] = useState();

    const [buyer, setBuyer] = useState({Nombre: '', Email: '', Telefono: ''});

    const [openAlert, setOpenAlert] = useState(false);

    const handleChange = (e) => {
        setBuyer({...buyer, [e.target.name]: e.target.value});
    }



    useEffect(() => {
        setNewOrder({buyer: buyer, buyProducts:cart.map(item => {
            return {
                id: item.id,
                name: item.name,
                price: item.price
            }
        }), totalPrice, date: new Date()});
        // eslint-disable-next-line
    }, [buyer]);

    const sendOrder = async () => {
        if (newOrder.buyer.Name === '' || newOrder.buyer.Email === '' || newOrder.buyer.Telefono === ''){
            setOpenAlert(true);
        } else {
            const ordersCollection = collection(db, 'orders');

            addDoc(ordersCollection, newOrder).then(({id}) => {
                setOrderId(id);
                clearCart();
                }) 
        }
    };

    return (
        <Dialog open={open}>
            <Container>
                <Typography variant="h6">Ingrese sus datos</Typography>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <TextField name='Nombre' id="outlined-basic" label="Nombre" variant="outlined" required onChange={handleChange}/>
                </Container>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <TextField name='Email' id="outlined-basic" label="Email" variant="outlined" required onChange={handleChange} />
                </Container>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <TextField name='Telefono' id="outlined-basic" label="Telefono" variant="outlined" type="number" required onChange={handleChange}/>
                </Container>
            </Container>
            <Collapse in={openAlert}>
                <Alert severity="error" onClose={() => setOpenAlert(false)}>
                    <Typography variant="h6">Todos los campos son obligatorios</Typography>
                </Alert>
            </Collapse>

            <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                <Button variant='contained' color='primary' style={{marginBottom:'1rem'}} onClick={sendOrder}>Enviar</Button>
            </Container>

            {orderId ? <OrderDialog orderId={orderId}/> : null}
        </Dialog>
    )
}


export default FormOrder;
