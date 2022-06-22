import * as React from 'react';
import Item from './Item';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import {useParams} from 'react-router-dom';





const ItemList = ({ items }) => {

    const {categoryId} = useParams();

    const [apiItems, setApiItems] = useState([]);

    const apiPromise = new Promise((resolve) => {
        setTimeout(() => {
        if (categoryId === undefined) {
            resolve(items);
        }else{
            resolve(items.filter(item => {
                return item.category.includes(categoryId);
            }));
        }
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
    }, [categoryId]);




    return (
        <Grid container sx={{display: 'flex', mt:'auto', justifyContent:'center'}}>
            {apiItems.map((item) => (
                <Item key={item.id} {...item} />            
            ))}
        </Grid>
    );
};

export default ItemList;
