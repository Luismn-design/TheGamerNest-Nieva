import * as React from 'react';
import Container from '@mui/material/Container';
import ItemList from './ItemList';
import items from '../data/items';


const ItemListContainer = () => {

  
  return (
    <Container>
        <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
