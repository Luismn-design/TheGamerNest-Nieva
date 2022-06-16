import * as React from 'react';
import {Container} from '@mui/material';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';



const ItemDetailContainer = ({item}) => {


    const [itemDetails, setItemDetails] = useState([]);
    const [showCount, setShowCount] = useState(false);

    const apiPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(item);
        }, 1500);
    });

    const getItems = async () => {
        try{
            const promiseResult = await apiPromise;
            setItemDetails(promiseResult);
            setShowCount(true);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <Container >
            <ItemDetail item={itemDetails}  sx={{padding:'0'}}/>
            {showCount ? <ItemCount stock={itemDetails.stock} /> : null}
        </Container>
    );
}


export default ItemDetailContainer;
