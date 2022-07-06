import * as React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import {Container, Backdrop, CircularProgress} from '@mui/material';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {

    const {itemId} = useParams();

    const [itemDetails, setItemDetails] = useState([]);

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const db = getFirestore();

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
        <Container style={{display:'flex', justifyContent:'center', marginTop:'20px', marginBottom:'20px'}}>
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
