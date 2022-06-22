import * as React from 'react';
import {Typography, Card, CardContent, CardMedia} from '@mui/material';
import ItemCount from './ItemCount';


const ItemDetailContainer = ({item}) => {
    return (
        <Card sx={{ margin:'25px', display:'flex', flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
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
                        {item.price}
                </Typography>
            </CardContent>
            <ItemCount stock={item.stock} />
        </Card>
    );
}


export default ItemDetailContainer;
