import * as React from 'react';
import { CartContext } from '../context/cartContext';
import { useContext, useEffect, useState } from 'react';
import { Container, Button, Typography, CardMedia, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Backdrop, CircularProgress } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import FormOrder from './FormOrder';


const Cart = () => {

    const {cart, removeFromCart, clearCart, totalPrice} = useContext(CartContext);

    const [somethingInCart, setSomethingInCart] = useState(false);

    const [open, setOpen] = useState(false);

    useEffect(() => {
        if (cart.length > 0){
            setSomethingInCart(true);
        }else {
            setSomethingInCart(false);
        }
    }
    , [cart]);



    const handleOpenForm = () => {
        setOpen(true);
    };

    return(
        <Container style={{backgroundColor:'#E6E8E6', minHeight:'90vh', borderRadius:'0.5rem'}}>
            {somethingInCart === true ? 
                <TableContainer style={{display:'flex', flexDirection:'column', justifyContent:'space-between', height:'85vh'}}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Producto</TableCell>
                                <TableCell align="right">Precio</TableCell>
                                <TableCell align="right">Cantidad</TableCell>
                                <TableCell align="right">Total</TableCell>
                                <TableCell align="right">Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {cart.map(cart => (
                                <TableRow key={cart.id}>
                                    <TableCell component="th" scope="row" sx={{display:'flex', flexDirection:'row'}}>
                                        <CardMedia
                                            component={'img'}
                                            alt={cart.name}
                                            image={cart.image}
                                            title={cart.name}
                                            sx={{borderRadius: '0.5rem', maxWidth:'120px', maxHeight:'120px'}}
                                        />
                                        <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
                                            <Typography variant="h6">{cart.name}</Typography>
                                        </Container>
                                        
                                    </TableCell>
                                    <TableCell align="right">${cart.price}</TableCell>
                                    <TableCell align="right">{cart.count}</TableCell>
                                    <TableCell align="right">${cart.count * cart.price}</TableCell>
                                    <TableCell align="right">
                                        <Button onClick={() => removeFromCart(cart)}>
                                            <DeleteIcon />
                                        </Button>
                                    </TableCell>
                                    
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Container >
                        <Container sx={{display:'flex', justifyContent:'flex-end', marginTop:'1rem'}}>
                            <Typography variant="h6">Total: $ {totalPrice}</Typography>
                        </Container>
                        <Container  sx={{display:'flex', justifyContent:'flex-end', marginTop:'1rem'}}>
                            <Button variant='contained' color='secondary' onClick={handleOpenForm} style={{width:'25%'}}>Comprar</Button>
                        </Container>
                        <Container sx={{display:'flex', justifyContent:'flex-end', marginTop:'1rem'}}>
                            <Button variant='contained' onClick={clearCart} style={{backgroundColor:'grey'}}>Vaciar carrito</Button>
                        </Container>
                    </Container>
                </TableContainer>
                :
                <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                    <Typography variant="h6">No hay nada en el carrito</Typography>
                    <Button component={Link} to="/" color='secondary'>
                        <Typography variant="h6">Volver a la tienda</Typography>
                    </Button>
                </Container>
            }
                <FormOrder open={open} />

                <Backdrop open={open} >
                    <CircularProgress color="inherit" />
                </Backdrop>
        </Container>
    )
}


export default Cart;
