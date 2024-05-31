import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductForm from './ProductForm';

const Productos = ({onSubmit}) => {
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        detalles_nutricionales: '',
        precio: '',
        imagenes: ''
    });

    const handleSeleccionarFila = (producto) => {
        setProductoSeleccionado(producto);
    };

    
    useEffect(() => {
        if (productoSeleccionado) {
            setFormData(productoSeleccionado);
        }
    }, [productoSeleccionado]);


    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:5000/api/productos');
            setProductos(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        };
        fetchData();
    }, []);

    const handleEliminar = async (alimento_id) => {
        try {
          const response = await axios.delete(`http://127.0.0.1:5000/api/eliminarAlimento/${alimento_id}`); // Aquí coloca el usuario_id adecuado
            console.log(response.data);
            // Actualizar la lista de productos después de eliminar
            setProductos(productos.filter(producto => producto.alimento_id !== alimento_id));
            } catch (error) {
            console.error('Error eliminando producto:', error);
            }
        };
        
        const handleActualizar = async (alimento_id) => {
            try {
                const response = await axios.put(`http://127.0.0.1:5000/api/actualizarAlimento/${alimento_id}`, formData);
                console.log("esto es un data",response.data);
                // setProductos(productos.filter(producto => producto.alimento_id !== alimento_id));
                // console.log(productos.filter(producto => producto.alimento_id !== alimento_id));
                // // Actualizar la lista de productos después de actualizar   
                onSubmit(); // Esta función debería actualizar la lista de productos en el componente padre

                // Llamar a una función de actualización de la lista de productos si es necesario
            } catch (error) {
                console.error('Error al actualizar producto:', error);
                // Manejar errores de manera adecuada, como mostrar un mensaje al usuario
            }
            console.log('Actualizar producto con ID:', alimento_id);
        };


    return (
        <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Lista de Productos</h1>
        <ProductForm onSubmit={handleSeleccionarFila} productoSeleccionado={productoSeleccionado} />

        <table className="table-auto w-full">
            <thead>
            <tr>
                <th className="border px-4 py-2">ID</th>
                <th className="border px-4 py-2">Nombre</th>
                <th className="border px-4 py-2">Descripción</th>
                <th className="border px-4 py-2">Detalles Nutricionales</th>
                <th className="border px-4 py-2">Precio</th>
                <th className="border px-4 py-2">Imágenes</th>
                <th className="border px-4 py-2">Acciones</th>
            </tr>
            </thead>
            <tbody>
            {productos.map((producto) => (
                <tr key={producto.alimento_id} onClick={() => handleSeleccionarFila(producto)}>
                <td className="border px-4 py-2">{producto.alimento_id}</td>
                <td className="border px-4 py-2">{producto.nombre}</td>
                <td className="border px-4 py-2">{producto.descripcion}</td>
                <td className="border px-4 py-2">{producto.detalles_nutricionales}</td>
                <td className="border px-4 py-2">{producto.precio}</td>
                <td className="border px-4 py-2">{producto.imagenes}</td>
                <td className="border px-4 py-2">
                <button onClick={() => handleEliminar(producto.alimento_id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded">Eliminar</button>
                <button type="submit" onClick={() => handleActualizar(producto.alimento_id)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Actualizar</button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
};

export default Productos;
