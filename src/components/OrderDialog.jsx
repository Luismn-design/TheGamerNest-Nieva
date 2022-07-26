import * as React from 'react';
import { Dialog, Button, Typography, Container} from '@mui/material';
import {Link} from 'react-router-dom';


const OrderDialog = ({orderId}) => {
    return (
        <Dialog open={orderId !== undefined}>
            <Container>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <Typography variant="h6">Su pedido se ha realizado con éxito</Typography>
                </Container>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <Typography variant="h6">Su codigo de pedido es: {orderId}</Typography>
                </Container>
                <Container sx={{display:'flex', justifyContent:'center', marginTop:'1rem'}}>
                    <Link to='/' style={{textDecoration:'none'}}>
                        <Button variant='contained' color='primary' style={{marginBottom:'1rem'}}>Volver al inicio</Button>
                    </Link>
                </Container>
            </Container>
        </Dialog>
    )
}


export default OrderDialog;
