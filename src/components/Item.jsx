import * as React from 'react';
import { Typography, CardMedia, CardContent, Card} from '@mui/material';
import theme from '../themes/theme';
import {Link} from 'react-router-dom'


const Item = (item) => {

    return (
        <Card component={Link} to={'../juegos/' + item.id} style={theme.ItemCard}>
                <CardMedia
                    component={'img'}
                    alt={item.name}
                    image={item.image}
                    sx={{minWidth:'300px', minHeight:'350px', maxHeight:'350px'}}
                    />
            <CardContent>
                <Typography variant="h6"  gutterBottom style={{color:'#1D2D44', fontWeight:'bold'}}>
                    {item.name}
                </Typography>
                <Typography variant="h6">
                    $  {item.price}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default Item;
