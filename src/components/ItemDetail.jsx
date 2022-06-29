import * as React from 'react';
import {Typography, Card, CardContent, CardMedia, Divider, Container} from '@mui/material';
import ItemCount from './ItemCount';
import AddToCartButton from './AddToCartButton';
import { useState, useContext } from 'react';
import { CartContext } from '../context/cartContext';



const ItemDetailContainer = ({item}) => {

    //todo: deshabilitar boton de agregar al carrito si el item no esta disponible o si count es 0

    const [count, setCount] = useState(0);

    const [openDialog, setOpenDialog] = useState(false);

    function handleRemove () {
        if (count > 0){
            setCount (count - 1);
            return count
        }else {
            return alert ('No puedes restar mas');
        }
    };

    function handleAdd () {
        if (count < item.stock){
            setCount (count + 1);
            return count
        }else {
            return alert ('No hay mas stock');
        }
    };

    async function  handleAddToCart () {
        if (count > 0){
            item.stock = item.stock - count;
            addToCart(item, count);
            setOpenDialog(true)
        }else {
            return alert ('No puedes agregar 0');
        }
    };

    function handleRemoveFromCart () {
        removeFromCart(item);
    };

    function handleClearCart () {
        clearCart();
    }

    function handleCloseDialog () {
        setOpenDialog(false);
        setCount(0);
    };


    //context
    const {addToCart, removeFromCart, clearCart} = useContext(CartContext);

    return (
        <Card sx={{ margin:'25px', display:'flex', flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
            <CardMedia
                component={'img'}
                alt={item.name}
                image={item.image}
                sx={{minWidth:'auto', minHeight:'auto', maxHeight:'60vh'}}
                />
            <CardContent sx={{padding:'0'}}>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {item.description}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p" gutterBottom sx={{}}>
                        ${item.price}
                </Typography>
            </CardContent>
            <ItemCount stock={item.stock} suma={handleAdd} resta={handleRemove} count={count}/>
            <Typography variant='caption' color='textSecondary' component='p' sx={{mt:'5px'}}>
                {item.stock} en stock
            </Typography>
            <Divider />
            <Container sx={{display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'space-evenly'}}>
                <AddToCartButton item={item} onAddToCart={handleAddToCart} count={count} openDialog={openDialog} handleClose={handleCloseDialog}/>
            </Container>
            <button onClick={handleRemoveFromCart}>Borrar del carrito //test//</button>
            <button onClick={handleClearCart}>Borrar todo del carrito //test//</button>
        </Card>
    );
}


export default ItemDetailContainer;
