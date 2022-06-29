import * as React from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/cartContext';
import {Box, Button, Typography} from '@mui/material';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';





const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext);

    return (
        <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2,
        bgcolor: '#423e3e',
        color: 'white',
        fontSize: 1,
        fontWeight: 700,
        borderRadius: '50%',
        width: '3rem',
        height: '3rem',
        }}>
            <Typography variant="h5">{totalQuantity}</Typography>
            <Button component={Link} to='/cart' sx={{color: 'white',}}>
                <ShoppingCartIcon />
            </Button>
        </Box>
    );
};

export default CartWidget;
