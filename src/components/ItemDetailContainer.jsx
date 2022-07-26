import * as React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import {Container, Backdrop, CircularProgress} from '@mui/material';
import ItemDetail from './ItemDetail';
import { db } from '../firebase';
import theme from '../themes/theme';




const ItemDetailContainer = () => {

    const {itemId} = useParams();

    const [itemDetails, setItemDetails] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {

        const itemCollection = query(collection(db, 'juegos'),
            where(documentId() , '==', itemId),
            limit(1)
        );

        getDocs(itemCollection).then((snapshot) => {
            setItemDetails(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    } , [itemId]);

    useEffect(() => {
        if (itemDetails.length > 0){
            setLoading(false);
        } else {
            setLoading(true);
        }
    } , [itemDetails]);


    return (
        <Container style={theme.ItemDetailsContainer}>
            {itemDetails.map((item) => (
                <ItemDetail key={item.id} item={item} />
            ))}
            <Backdrop open={loading}>
                <CircularProgress color='inherit' />
            </Backdrop>
        </Container>
    );
}


export default ItemDetailContainer;
