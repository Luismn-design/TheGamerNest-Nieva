import * as React from 'react';
import ItemDetailContainer from './ItemDetailContainer';
import { Divider, Typography, CardMedia, CardContent, CardActions, Card, Button} from '@mui/material';


const Item = (item) => {

    const [showDetail, setShowDetail] = React.useState(false);

    const handleShowDetail = () => {
        setShowDetail(!showDetail);
    }
    


    return (
        <Card sx={{ margin:'25px', display:'flex', flexDirection:'column', maxWidth:'300px', minWidth:'300px'}}>
            <CardMedia
                component={'img'}
                alt={item.name}
                image={item.image}
                sx={{minWidth:'300px', minHeight:'350px', maxHeight:'350px'}}
                />
            <CardContent sx={{maxHeight:'2rem'}}>
                <Typography gutterBottom variant="h6" component="h2">
                    {item.name}
                </Typography>
            </CardContent>
            <Divider sx={{mb:'auto'}} />
            <CardActions className='CardActionContainer' sx={{}}>
                {showDetail ? null :
                   <Button onClick={handleShowDetail} sx={{ml:'auto'}}>
                        VER MAS
                    </Button>}
            </ CardActions>
            {showDetail ? <ItemDetailContainer item={item} sx={{}} /> : null}
        </Card>
    );
};

export default Item;
