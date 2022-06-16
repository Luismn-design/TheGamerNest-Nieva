import * as React from 'react';
import { useState} from 'react';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';




const ItemCount = ({stock}) => {

    const [count, setCount] = useState(0);

    function resta () {
        if (count > 0){
            setCount (count - 1);
            return count
        } else {
            return alert ('No puedes restar mas');
        }
    };

    function suma () {
        if (count < stock){
            setCount (count + 1);
            return count
        } else {
            return alert ('No puedes sumar mas');
        }
    };

    return (
        <Container sx={{display:'flex', flexDirection:'row', alignContent:'center', justifyContent:'space-evenly', mb:'2rem'}}>
            <Button variant='contained' onClick={suma}>+</Button>
            <Typography variant='h5' >{count}</Typography>
            <Button variant='contained'  onClick={resta}>-</Button>
        </Container>
    );
};

export default ItemCount;
