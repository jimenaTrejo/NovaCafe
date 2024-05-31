import React from 'react';

const ProductList = ({ products, onDelete }) => {
    return (
        <ul>
        {products.map((product) => (
            <li key={product.id}>
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>{product.detalles_nutricionales}</p>
            <p>${product.precio}</p>
            <p>${product.imagenes}</p>
            <button onClick={() => onDelete(product.id)}>Eliminar</button>
            </li>
        ))}
        </ul>
    );
};

export default ProductList;
