import * as React from 'react';
import ItemCount from './ItemCount';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';


const Item = (item) => {

    return (
        <Card sx={{ margin:'25px', display:'flex', flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
            <CardMedia
                component={'img'}
                alt={item.name}
                image={item.image}
                sx={{minWidth:'300px', minHeight:'350px', maxHeight:'350px'}}
                />
            <CardContent sx={{}}>
                <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                </Typography>
            </CardContent>
            <Divider sx={{mt:'auto'}} />
            <CardActions className='CardActionContainer' sx={{}}>
                <ItemCount stock={item.stock} />
            </ CardActions>
        </Card>
    );
};

export default Item;
