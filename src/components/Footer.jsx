import * as React from 'react';
import { Container, Typography } from '@mui/material';



const Footer = () => {
    return (
        <Container sx={{marginTop:'auto', alignSelf:'flex-end', bgcolor:'#3E5C76', minHeight:'10vh', minWidth:'100%'}}>
            <Typography variant='caption' color='white' component='p'>
                © 2022 - The Gamer Nest - Todos los derechos reservados
            </Typography>
        </Container>
    );
}


export default Footer;
