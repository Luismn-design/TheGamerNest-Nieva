import * as React from 'react';
import { useState, useEffect } from 'react';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import {useParams} from 'react-router-dom';
import { Grid, Backdrop, CircularProgress} from '@mui/material';
import Item from './Item';





const ItemList = () => {

    const {categoryId} = useParams();

    const [items, setItems] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const db = getFirestore();

        if (categoryId){
            const categoryCollection = query(collection(db, 'juegos'),
                where('category', 'array-contains', categoryId)
            );

            getDocs(categoryCollection).then((snapshot) => {
                if (snapshot.size > 0){
                    setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
                } else {
                    console.log('err')
                }
            });

        } else {
            const itemCollection = collection(db, 'juegos');

            getDocs(itemCollection).then((snapshot) => {
                setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
            }
            );
        }
    } , [categoryId]);

    useEffect(() => {
        if (items.length > 0){
            setLoading(false);
        } else {
            setLoading(true);
        }
    } , [items]);




    return (
        <Grid container sx={{display: 'flex', mt:'auto', justifyContent:'center'}}>
            {items.map((item) => (
                <Item key={item.id} {...item} />            
            ))}
            {loading && <Backdrop open={loading}>
                <CircularProgress color='inherit' />
            </Backdrop>}
        </Grid>
    );
};

export default ItemList;
