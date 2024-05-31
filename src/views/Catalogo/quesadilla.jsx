import React, { useState, useEffect } from "react";
import axios from "axios";

const Productos = () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const [productos, setProductos] = useState([]);
    const agregarAlCarrito = (alimento_id) => {
        // Aquí puedes realizar cualquier lógica adicional, como obtener el ID del usuario logueado, el ID del producto, etc.
        // Luego, puedes enviar una solicitud al servidor para agregar el producto al carrito de compras.
        // Por ejemplo, podrías usar Fetch API para enviar una solicitud POST al servidor:
        const user = loggedInUser.id;
        console.log(user, "usuario");
        console.log(alimento_id, "id_alimento");

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
            // Aquí puedes manejar la respuesta, por ejemplo, mostrar un mensaje de éxito al usuario.
        })
        .catch((error) => {
            console.error("Error:", error);
            // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
        });
    };

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get("http://127.0.0.1:5000/api/productos");
        setProductos(response.data.data);
        } catch (error) {
        console.error("Error fetching data:", error);
        }
    };
    return (
        <div className="max-w-md w-full bg-sky-950 shadow-lg rounded-xl p-6">
        <div className="flex flex-col ">
            <div className="">
            <div className="relative h-62 w-full mb-3">
                <div className="absolute flex flex-col top-0 right-0 p-3">
                <button className="transition ease-in duration-300 bg-gray-800  hover:text-purple-500 shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                    </svg>
                </button>
                </div>
                <img
                src="https://th.bing.com/th/id/R.9191b7a34c2cc228041ef90f1f98879e?rik=TDPFfzDecuWbOQ&pid=ImgRaw&r=0"
                alt="Just a flower"
                className="w-full object-fill rounded-2xl"
                />
            </div>
            {productos.map((producto) => (
                <div key={producto.alimento_id} className="flex-auto justify-evenly">
                <div className="flex flex-wrap ">
                    <div className="flex items-center w-full justify-between min-w-0 ">
                    <h2 className="text-lg mr-auto cursor-pointer text-gray-200 hover:text-purple-500 truncate ">
                        {producto.nombre}
                    </h2>
                    <div className="flex items-center bg-green-400 text-white text-xs px-2 py-1 ml-3 rounded-lg">
                        Disponible
                    </div>
                    </div>
                </div>
                <div className="text-xl text-white font-semibold mt-1">
                    ${producto.precio}
                </div>
                <div className="lg:flex py-4 text-sm text-gray-600">
                    <div className="flex-1 inline-flex items-center  mb-3">
                    <div className="w-full flex-none text-sm flex items-center text-gray-600">
                        <ul className="flex flex-row justify-center items-center space-x-2">
                        <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-blue-600 rounded-full transition ease-in duration-300">
                            <span className="hover:text-purple-500 p-1 py-0">
                                Picadillo
                            </span>
                            <a
                                href="#blue"
                                className="block w-3 h-3 bg-blue-600 rounded-full"
                            ></a>
                            </span>
                        </li>
                        <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-yellow-400 rounded-full transition ease-in duration-300">
                            <span className="hover:text-purple-500 p-1 py-0">
                                Pollo
                            </span>
                            <a
                                href="#yellow"
                                className="block w-3 h-3 bg-yellow-400 rounded-full"
                            ></a>
                            </span>
                        </li>
                        <li className="">
                            <span className="block p-1 border-2 border-gray-900 hover:border-red-500 rounded-full transition ease-in duration-300">
                            <span className="hover:text-purple-500 p-1 py-0">
                                Bistec
                            </span>
                            <a
                                href="#red"
                                className="block w-3 h-3 bg-red-500 rounded-full center"
                            ></a>
                            </span>
                        </li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="flex space-x-2 text-sm font-medium justify-start">
                    <button
                    onClick={() => agregarAlCarrito(producto.alimento_id)}
                    className="transition ease-in duration-300 inline-flex items-center text-sm font-medium mb-2 md:mb-0 bg-purple-500 px-5 py-2 hover:shadow-lg tracking-wider text-white rounded-full hover:bg-purple-600 "
                    >
                    <span>Add Cart</span>
                    </button>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Productos;
