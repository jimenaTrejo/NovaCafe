import React, { useState, useEffect } from "react";
import axios from "axios";

const Productos = () => {
    // Obtener el usuario logueado del localStorage
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    // Estado para almacenar los productos
    const [productos, setProductos] = useState([]);

    // Función para agregar un producto al carrito
    const agregarAlCarrito = (alimento_id) => {
        const user = loggedInUser.id;
        console.log(user, "usuario");
        console.log(alimento_id, "id_alimento");

        // Enviar una solicitud al servidor para agregar el producto al carrito de compras
        fetch("http://127.0.0.1:5000/api/agregarCarrito", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                usuario_id: user,
                alimento_id: alimento_id,
                cantidad: 1,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Error al agregar el producto al carrito");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    };

    // Función para obtener los productos del servidor
    const fetchData = async () => {
        try {
            const response = await axios.get("http://127.0.0.1:5000/api/productos");
            setProductos(response.data.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    // Ejecutar la función fetchData al cargar el componente
    useEffect(() => {
        fetchData();
    }, []);
    // Renderizar la lista de productos
    return (
        <div>
            {/* Encabezado */}
            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">Productos</h1>
            </div>
            {/* Lista de productos */}
            <section id="Projects" className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {productos.map((producto) => (
                    <div key={producto.alimento_id} className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                        <a href="#">
                            <img src={producto.imagenes} alt="Product" className="h-80 w-72 object-cover rounded-t-xl" />
                            <div className="px-4 py-3 w-72">
                                <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                <p className="text-lg font-bold text-black truncate block capitalize">{producto.nombre}</p>
                                <div className="flex items-center">
                                    <p className="text-lg font-semibold text-black cursor-auto my-3">${producto.precio}</p>
                                    <del>
                                        <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
                                    </del>
                                    <div className="ml-auto">
                                        <button onClick={() => agregarAlCarrito(producto.alimento_id)} className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-200 px-5 py-2 hover:shadow-lg tracking-wider text-black rounded-full hover:bg-purple-600">
                                            <span>Add Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </section>
            {/* Agradecimientos */}
            <div className="text-center py-10 px-10">
                <h2 className="font-bold text-2xl md:text-4xl mb-4">Thanks to <a href="https://unsplash.com/@nixcreative" className="underline font-black"></a></h2>
            </div>
            {/* Script para un widget de Ko-fi */}
            <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
        </div>
    );
};
export default Productos;
