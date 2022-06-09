import * as React from 'react';
import Container from '@mui/material/Container';
import ItemList from './ItemList';



const ItemListContainer = () => {

  const items = [
    {
        id: 1,
        name: 'Final Fantasy XV',
        price: '$100',
        image: 'http://www.edicioncoleccionista.com/wp-content/uploads/2016/12/FFXV.jpg',
        description: 'Entrega de la famosa saga JRPG Final Fantasy de Square Enix que supone el debut de la serie de la compañía nipona en las consolas PlayStation 4 y Xbox One, además de PC',
        stock: 10,
    },
    {
        id: 2,
        name: 'Final Fantasy VII Remake',
        price: '$200',
        image: 'https://image.api.playstation.com/vulcan/img/cfn/11307-dNapclgq_VqNtQ98Xp_LxovvAdjd5AknZhd_-k2Cckq9FPtKDXAHk-ODCfvDKChH6hkEO0VLtj7Vk4E-Z8G707oe0N.png',
        description: 'Final Fantasy VII Remake es la reimaginación de la obra clásica de Square Soft lanzada en 1998 para la primera PlayStation',
        stock: 3,
    },
    {
        id: 3,
        name: 'Final Fantasy XIV Online',
        price: '$200',
        image: 'https://image.api.playstation.com/vulcan/img/rnd/202105/1414/4IfMDkNronZoUUWW6KeHxz2I.png',
        description: 'Final Fantasy XIV embarca a los seguidores de esta popular saga en una aventura multijugador online, ambientada en su característico mundo de fantasía',
        stock: 5,
    },
    {
        id: 4,
        name: 'Kingdom Hearts III',
        price: '$200',
        image: 'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2018/11/kh3-cover.jpg?itok=PPh6-RyF',
        description: 'KHIII es la tercera entrega de la serie de aventuras Kingdom Hearts, que combina personajes y escenarios de Disney y Square Enix. Dirigido por el gran Tetsuya Nomura, Kingdom Hearts 3 está protagonizado por Sora y sus amigos, quienes deben combatir por mantener el poder de la luz en contra del oscuro, frío, despiadado y malvado Maestro Xehanort',
        stock: 7,
    },
  ];
  
  return (
    <Container>
        <ItemList items={items} />
    </Container>
  );
};

export default ItemListContainer;
