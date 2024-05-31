import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';
import TableProductos from './TableProductos';

const CRUDProducts = () => {
    const [products, setProducts] = useState([]);

    const handleSubmit = (formData) => {
        // Aquí realizarías una petición para guardar el producto en la base de datos
        // Luego, actualizarías el estado de productos con el nuevo producto
        setProducts((prevProducts) => [...prevProducts, formData]);
    };

    const handleDelete = (id) => {
        // Aquí realizarías una petición para eliminar el producto de la base de datos
        // Luego, actualizarías el estado de productos eliminando el producto con el id dado
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    return (
        <div>
        {/* <h2 className='w-1/2 flex justify-center items-center'>Crear/Actualizar Producto</h2> */}
        {/* <ProductForm onSubmit={handleSubmit} />

        <ProductList products={products} onDelete={handleDelete} /> */}
        <TableProductos/>
        </div>
    );
    };

export default CRUDProducts;
