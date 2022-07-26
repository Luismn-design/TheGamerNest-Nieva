# Proyecto Final - Luis Nieva
####*Coderhouse* | Curso ReactJS  - Comisión 31195

---
## Deploy
https://thegamernest.netlify.app

---

## Sobre el e-commerce

**The Gamer Nest**
Es un e-commerce de videojuegos que se encuentra en desarrollo.

**¿Por qué elegí está empresa para inspirarme para hacer la app?**
Tengo experiencia en el mundo de los videojueos y una pasion por los mismos.

---

## Tecnologías

Esta aplicación fue construida usando las siguientes tecnologias:

* [HTML5](https://developer.mozilla.org/es/docs/Web/HTML/)
* [JavaScript](https://developer.mozilla.org/es/docs/Web/CSS/)
* [React](https://reactjs.org/) \
Libreria para `JavaScript` que nos ayuda a construir interfaces reactivas.
* [Firebase](https://firebase.google.com/) \
Plataforma de desarrollo de Google, que nos sirve de backend para usar los servicios de base de datos llamado `firestore`.
* [Material UI](https://mui.com/) \
Libreria de componentes `React` de código abierto que implementa Material Design de Google.
* [Material Icons](https://mui.com/material-ui/icons/) \
Grupo de +2000 íconos creados por Google en su sistema `Material`, divididos en cinco secciones: "relleno", "borde", "redondeado", "duotono", "sharp".
* [NPM](https://www.npmjs.com/) \
Sistema de gestión de paquetes por defecto para Node.js.

---

## :electric_plug: Funciones dentro de `CartContext`

* **addToCart:** Añadir un item/producto al carrito.
* **isInCart:** Verificar si un producto ya se encuentra en el carrito.
* **totalPrice:** Suma la totalidad de los precios de los productos añadidos al carrito.
* **removeFromCart:** Eliminar un producto del carrito.
* **clearCart:** Vaciar el carrito.

---

## :fire: `Firebase`

### Colección: Productos
Cada `producto` tiene las siguientes características:

| Campo             | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| category | array | Categoría |
| description | string | Descripción |
| image | string | Imagen |
| name | string | Nombre |
| price | number | Precio |
| stock | number | Stock |

### Colección: Orders
Cada `order` tiene las siguientes características:

| Buyer           | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| Email | string | Correo electrónico|
| Nombre | string | Nombre|
| Telefono | number | Teléfono |


| BuyProducts            | Tipo            |        Valor         |
| ----------------- | ----------------|----------------------|
| id | string | ID Del Producto |
| name | string | Nombre |
| price | number | Precio |


| date | timestamp | Fecha y hora |
| totalPrice | number | Precio Total |
---