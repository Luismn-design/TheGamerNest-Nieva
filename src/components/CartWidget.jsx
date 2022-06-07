import * as React from 'react';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';


const CartWidget = () => {
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
        '&:hover': {
            cursor: 'pointer',
        },
        }}>
            <Button sx={{color: 'white',}}>
                <ShoppingCartIcon />
            </Button>
        </Box>
    );
};

export default CartWidget;
