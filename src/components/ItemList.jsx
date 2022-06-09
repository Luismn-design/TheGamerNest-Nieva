import * as React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';






const ItemList = ({ items }) => {


    const [apiItems, setApiItems] = useState([]);

    const apiPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve(items);
        }, 1500);
    });

    const getItems = async () => {
        try{
            const promiseResult = await apiPromise;
            setApiItems(promiseResult);
        } catch(error){
            console.log(error);
        }
    }

    useEffect(() => {
        getItems();

         // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);




    return (
        <Grid container sx={{display: 'flex', mt:'auto', justifyContent:'center'}}>
            {apiItems.map((item) => (
                <Item key={item.id} {...item} />            
            ))}
        </Grid>
    );
};

export default ItemList;
