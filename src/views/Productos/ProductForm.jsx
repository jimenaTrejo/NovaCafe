import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductForm = ({ onSubmit, alimentoId, productoSeleccionado   }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        descripcion: '',
        detalles_nutricionales: '',
        precio: '',
        imagenes: ''
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/productos/${alimentoId}`);
                setFormData(response.data); // Suponiendo que el servidor devuelve los datos del producto en el formato correcto
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [alimentoId]);

    useEffect(() => {
        if (productoSeleccionado) {
            setFormData(productoSeleccionado);
        }
    }, [productoSeleccionado]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/insertarAlimento', formData);
            console.log(response.data);
            // Llamar a una función de actualización de la lista de productos si es necesario
            onSubmit(); // Esta función debería actualizar la lista de productos en el componente padre
        } catch (error) {
            console.error('Error al insertar producto:', error);
            // Manejar errores de manera adecuada, como mostrar un mensaje al usuario
        }
    };

    return (
        <form onSubmit={handleSubmit}>
                <div className="space-y-1/2">
                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Producto
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600"></p>
                    <div className="sm:col-span-4">
                        <label
                        htmlFor="nombre"
                        className="block text-sm font-medium leading-6 text-gray-900"
                        >
                        Nombre del producto
                        </label>
                        <div className="mt-2">
                        <input
                            id="nombre"
                            name="nombre"
                            type="text"
                            autoComplete="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        />
                        </div>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="col-span-full">
                        <label
                            htmlFor="about"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Descripcion del producto
                        </label>
                        <div className="mt-2">
                            <textarea   
                            id="descripcion"
                            name="descripcion"
                            rows="3"
                            value={formData.descripcion}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            ></textarea>
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">
                            Describe los ingredientes que lleva el platillo
                        </p>
                        </div>

                        <div className="col-span-full">
                        <label
                            htmlFor="street-address"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Destalles nutricionales
                        </label>
                        <div className="mt-2">
                            <input
                            type="text"
                            name="detalles_nutricionales"
                            id="detalles_nutricionales"
                            autoComplete="street-address"
                            value={formData.detalles_nutricionales}
                            onChange={handleChange}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
                        <div className="sm:col-span-4">
                        <label
                            htmlFor="number"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            Precio del producto
                        </label>
                        <div className="mt-2">
                            <input
                            id="precio"
                            name="precio"
                            type="number"
                            value={formData.precio}
                            onChange={handleChange}
                            autoComplete="precio"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>

                        <div className="sm:col-span-4">
                        <label
                            htmlFor="text"
                            className="block text-sm font-medium leading-6 text-gray-900"
                        >
                            imagenes
                        </label>
                        <div className="mt-2">
                            <input
                            id="imagenes"
                            name="imagenes"
                            type="text"
                            value={formData.imagenes}
                            onChange={handleChange}
                            autoComplete="imagenes"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        </div>
                    
                    </div>
                    </div>

                    <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        className="text-sm font-semibold leading-6 text-gray-900"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Save
                    </button>
                    </div>
                </div>
        </form>
    );
};

export default ProductForm;
