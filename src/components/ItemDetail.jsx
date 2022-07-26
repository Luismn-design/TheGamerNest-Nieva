import * as React from 'react';
import { useState, useContext } from 'react';
import {Typography, Card, CardContent, CardMedia, Container, Button, Divider} from '@mui/material';
import {Link} from 'react-router-dom';
import ItemCount from './ItemCount';
import { CartContext } from '../context/cartContext';
import { useEffect } from 'react';
import theme from '../themes/theme';



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
        <>
            <Card sx={{ display:{ xs: 'flex', md: 'none' }, flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
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
                    <Button component={Link} to='/cart' variant='contained' style={{marginBottom:'1.5rem'}}> Ver carrito </Button>}                
                </Container>
            </Card>


            <Card sx={theme.ItemDetailsCard}>
                <CardMedia
                    component={'img'}
                    alt={item.name}
                    image={item.image}
                    sx={{height:'60vh', width:'30%'}}
                    />
                <CardContent style={theme.ItemDetailsContent}>
                    <Typography variant="h5" style={theme.ItemDetailsTitle}>
                            {item.name}
                    </Typography>
                    <Divider sx={{marginBottom:'45px'}}/>
                    <Typography variant='body2' color="textSecondary" style={theme.ItemDetailsDescription}>
                            {item.description}
                    </Typography>
                    <Divider sx={{ marginTop:'auto',}} />
                    <Typography variant="h4" color="textSecondary" gutterBottom sx={theme.ItemDetailsPrice}>
                            ${item.price}
                    </Typography>
                </CardContent>
                <Divider orientation="vertical" flexItem />
                <Container style={theme.ItemDetailsCounter}>
                    {isAdded === false ?
                        <ItemCount
                            stock={item.stock}
                            suma={handleAdd}
                            resta={handleRemove}
                            count={count}
                            handleAddToCart={handleAddToCart}
                        />
                :
                    <Button component={Link} to='/cart' variant='contained' style={{marginBottom:'1.5rem'}}> Ver carrito </Button>}
                </Container>
            </Card>
                
        </>
    );
}


export default ItemDetailContainer;
