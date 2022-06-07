import * as React from 'react';
import Container from '@mui/material/Container';

const ItemListContainer = (props) => {
  return (
    <Container>
      {props.greeting}
    </Container>
  );
};

export default ItemListContainer;
