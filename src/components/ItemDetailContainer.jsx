import * as React from 'react';
import {Container} from '@mui/material';
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import items from '../data/items';



const ItemDetailContainer = () => {

    const {itemId} = useParams();


    const [itemDetails, setItemDetails] = useState([]);

    const apiPromise = new Promise((resolve) => {
        setTimeout(() => {
            const itemDetail = items.find(items => items.id === parseInt(itemId));
            resolve(itemDetail);
        }, 1500);
    });

    const getItems = async () => {
        try{
            const promiseResult = await apiPromise;
            setItemDetails(promiseResult);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itemId]);



    return (
        <Container >
            <ItemDetail item={itemDetails}  sx={{padding:'0'}}/>
        </Container>
    );
}


export default ItemDetailContainer;
