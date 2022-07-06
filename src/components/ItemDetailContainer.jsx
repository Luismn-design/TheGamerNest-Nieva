import * as React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where, limit, documentId } from 'firebase/firestore';
import {Container} from '@mui/material';
import ItemDetail from './ItemDetail';




const ItemDetailContainer = () => {

    const {itemId} = useParams();

    const [itemDetails, setItemDetails] = useState([]);


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


    return (
        <Container >
            {itemDetails.map((item) => (
                <ItemDetail key={item.id} item={item} />
            ))}
        </Container>
    );
}


export default ItemDetailContainer;
