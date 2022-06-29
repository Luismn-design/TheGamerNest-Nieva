import * as React from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Slide, Container} from '@mui/material';
import {Link} from 'react-router-dom';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

const AddToCartButton = ({item, onAddToCart, count, openDialog, handleClose}) => {


    return (
        <Container sx={{justifySelf:'center'}}>
            <Button variant="contained" color="primary" onClick={onAddToCart} sx={{margin:'10px'}}>
                Agregar al carrito
            </Button>
            <Dialog
                open={openDialog}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                >
                <DialogTitle>{'Agregado al carrito'}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {`Se ha agregado ${count} unidades de ${item.name} al carrito`}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Link to="/cart" style={{textDecoration:'none'}}>
                        <Button onClick={handleClose} color="primary">
                            Ver Carrito
                        </Button>
                    </Link>
                        <Button color="primary" onClick={handleClose}>
                            Seguir Comprando
                        </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
};


export default AddToCartButton;
