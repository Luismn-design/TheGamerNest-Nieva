import * as React from 'react';
import { Divider, Typography, CardMedia, CardContent, Card} from '@mui/material';
import {Link} from 'react-router-dom'


const Item = (item) => {

    return (
        <Card sx={{ margin:'25px', display:'flex', flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
            <Link to={'../juegos/' + item.id}>
                <CardMedia
                    component={'img'}
                    alt={item.name}
                    image={item.image}
                    sx={{minWidth:'300px', minHeight:'350px', maxHeight:'350px'}}
                    />
            </Link>
            <CardContent sx={{maxHeight:'2rem'}}>
                <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                </Typography>
            </CardContent>
            <Divider sx={{mb:'auto'}} />

        </Card>
    );
};

export default Item;
