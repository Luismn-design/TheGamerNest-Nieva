import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Divider, Typography } from '@mui/material';




const ItemCount = ({resta, suma, count, stock, handleAddToCart}) => {


    return (
        <>
            <Container sx={{display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'space-evenly'}}>
                <Button variant='contained' onClick={resta} disabled={count === 0 ? true : null}>-</Button>
                <Typography variant='h5' >{count}</Typography>
                <Button variant='contained'  onClick={suma} disabled={count === stock ? true : null}>+</Button>
            </Container>
            <Typography variant='caption' color='textSecondary' component='p' sx={{mt:'5px'}}>
                {stock} en stock
            </Typography>
            <Divider />
            <Button variant='contained' color='primary' onClick={handleAddToCart} disabled={count === 0 ? true : null}>Agregar al carrito</Button>
        </>
    );
};

export default ItemCount;
