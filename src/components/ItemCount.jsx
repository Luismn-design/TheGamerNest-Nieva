import * as React from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';




const ItemCount = ({resta, suma, count }) => {


    return (
        <Container sx={{display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'space-evenly'}}>
            <Button variant='contained' onClick={resta}>-</Button>
            <Typography variant='h5' >{count}</Typography>
            <Button variant='contained'  onClick={suma}>+</Button>
        </Container>
    );
};

export default ItemCount;
