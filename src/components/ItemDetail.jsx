import * as React from 'react';
import { Container, Typography, CardContent} from '@mui/material';


const ItemDetailContainer = ({item}) => {
    return (
        <Container sx={{padding:'0'}}>
            <CardContent sx={{padding:'0'}}>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                        {item.description}
                </Typography>
                <Typography variant="h5" color="textSecondary" component="p" gutterBottom sx={{}}>
                        {item.price}
                </Typography>
            </CardContent>
            {/* <ItemCount stock={item.stock} /> */}
        </Container>
    );
}


export default ItemDetailContainer;
