import * as React from 'react';
import { useState, useContext } from 'react';
import {Typography, Card, CardContent, CardMedia, Container, Button} from '@mui/material';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
// import AddToCartButton from './AddToCartButton';
import { CartContext } from '../context/cartContext';
import { useEffect } from 'react';



const ItemDetailContainer = ({item}) => {

    //context
    const {addToCart, isInCart, cart} = useContext(CartContext);

    const [count, setCount] = useState(0);

    const [isAdded, setIsAdded] = useState(false);

    useEffect (() => {
        if (isInCart(item)){
            setIsAdded(true);
        } else {
            setIsAdded(false);
        }
        // eslint-disable-next-line
    }, [cart]
    );  

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
            setIsAdded(true);
            addToCart(item, count);
        }else {
            return alert ('No puedes agregar 0');
        }
    };


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
            <Container sx={{display:'flex', flexDirection:'column'}}>
                {isAdded === false ?
                    <ItemCount
                        stock={item.stock}
                        suma={handleAdd}
                        resta={handleRemove}
                        count={count}
                        handleAddToCart={handleAddToCart}
                    />
            :
                <Button component={Link} to='/cart' variant='contained'> Ver carrito </Button>}                
            </Container>
        </Card>
    );
}


export default ItemDetailContainer;
