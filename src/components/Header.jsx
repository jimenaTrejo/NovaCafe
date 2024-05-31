// import { Link, useNavigate } from "react-router-dom";

// const Header = () => {
//     const navigate = useNavigate();
//     const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
//     //const user = loggedInUser.tipo_usuario_id;
//     //console.log(user, "usuario");    

//     const handleLogout = () => {
//         // Borra los datos del usuario del almacenamiento local al cerrar sesión
//         localStorage.removeItem("loggedInUser");
//         // Redirige al usuario a la página de inicio de sesión
//         navigate("/login");
//     };

//     const currentPath = () => {
//         // const location = useLocation()
//         const path = location.pathname;
//         return path;
//     };

//     return (
//         <div className="w-full">
//         <nav className="flex items-center justify-between bg-teal-500 p-6 w-full">
//             <div className="flex items-center flex-shrink-0 text-white mr-6">
//             <svg
//                 className="fill-current h-8 w-8 mr-2"
//                 width="54"
//                 height="54"
//                 viewBox="0 0 54 54"
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
//             </svg>
//             <span className="font-semibold text-xl tracking-tight">
//                 Cafeteria Novaera
//             </span>
//             </div>
//             <div className="block lg:hidden">
//             <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
//                 <svg
//                 className="fill-current h-3 w-3"
//                 viewBox="0 0 20 20"
//                 xmlns="http://www.w3.org/2000/svg"
//                 >
//                 <title>Menu</title>
//                 <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
//                 </svg>
//             </button>
//             </div>
//             <div className="w-full block lg:flex lg:items-center lg:w-auto">
//             <div className="text-sm lg:flex-grow">
//                 <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//                 >
//                 <Link
//                     className={`nav-link ${currentPath() === "/" ? "active" : ""}`}
//                     to="/"
//                 >
//                     Inicio
//                 </Link>
//                 </a>
//                 <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//                 >
//                 <Link
//                     className={`nav-link ${
//                     currentPath() === "/catalogo" ? "active" : ""
//                     }`}
//                     to="/catalogo"
//                 >
//                     Menu
//                 </Link>
//                 </a>
//                 {/* <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//                 >
//                 <Link
//                     className={`nav-link ${
//                     currentPath() === "/pedidos" ? "active" : ""
//                     }`}
//                     to="/cart"
//                 >
//                     Pedidos
//                 </Link>
//                 </a> */}
//                 <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//                 >
//                 <Link
//                     className={`nav-link ${
//                     currentPath() === "/historial" ? "active" : ""
//                     }`}
//                     to="/historial"
//                 >
//                     Historial
//                 </Link>
//                 </a>
//                 <a
//                 href="#responsive-header"
//                 className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
//                 >
//                 <Link
//                     className={`nav-link ${
//                     currentPath() === "/contacto" ? "active" : ""
//                     }`}
//                     to="/contacto"
//                 >
//                     Contacto
//                 </Link>
//                 </a>
//             </div>
//             {/* <div>
//                 <a
//                 href="http://localhost:5173/logout"
//                 className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
//                 >
//                 iniciar Sesion
//                 </a>
//             </div> */}
//             </div>
//             <div className="relative py-2">
//             <div className="t-0 absolute left-3">
//                 <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
//                 3
//                 </p>
//             </div>
//             <a href="/cart">
//                 {" "}
//                 {/* Establece el enlace a la página del carrito */}
//                 <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 strokeWidth="1.5"
//                 stroke="currentColor"
//                 className="file: mt-4 h-6 w-6"
//                 >
//                 <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
//                 />
//                 </svg>
//             </a>
//             </div>

//             <button
//             onClick={handleLogout}
//             className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
//             >
//             Cerrar Sesión
//             </button>
//             <div>
//             {loggedInUser && (
//                 <div>
//                 Bienvenido, {loggedInUser.nombre}{" "}
//                 {/* Aquí se muestra el nombre del usuario */}
//                 </div>
//             )}
//             {/* Otros elementos del menú de navegación */}
//             </div>
//         </nav>
//         </div>
//     );
// };

// export default Header;




import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
    const navigate = useNavigate();
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const user = loggedInUser ? loggedInUser.tipo_usuario_id : null;

    const handleLogout = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/login");
    };

    const currentPath = () => {
        const path = location.pathname;
        return path;
    };

    return (
        <div className="w-full">
        <nav className="flex items-center justify-between bg-teal-500 p-6 w-full">
            <div className="flex items-center flex-shrink-0 text-white mr-6">
            <img
                        src="/src/imagenes/logo.png"
                        className="" width={140} height={99}
            />
            {/* <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
            </svg> */}
            <span className="font-semibold text-xl tracking-tight titulo">
                Cafeteria Novaera
            </span>
            </div>
            <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
            </button>
            </div>
            <div className="w-full block lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow">
                {user === 2 && (
                <>
                    <div className="flex items-center"> {/* Contenedor común para el menú y el carrito */}
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/" ? "active" : ""}`} to="/">
                                Inicio
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/catalogo" ? "active" : ""}`} to="/catalogo">
                                Menu
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/historial" ? "active" : ""}`} to="/historial">
                                Historial
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8"> {/* Añadir margen al último elemento del menú */}
                            <Link className={`nav-link ${currentPath() === "/contacto" ? "active" : ""}`} to="/contacto">
                                Contacto
                            </Link>
                        </a>
                        <div className="relative py-2 items-center"> {/* Carrito de compras */}
                            <div className="t-0 absolute left-3">
                                <p className="flex h-2 w-2 items-center justify-center rounded-full bg-red-500 p-3 text-xs text-white">
                                    
                                </p>
                            </div>
                            <a href="/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="file: mt-4 h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </>
                )}
                {user === 1 && (
                <>
                <div className="flex items-center"> {/* Contenedor común para el menú y el carrito */}
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/" ? "active" : ""}`} to="/">
                                Inicio
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/usuarios" ? "active" : ""}`} to="/usuarios">
                                Usuarios
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
                            <Link className={`nav-link ${currentPath() === "/productos" ? "active" : ""}`} to="/productos">
                                Productos
                            </Link>
                        </a>
                        <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-8">
                            <Link className={`nav-link ${currentPath() === "/pedidos" ? "active" : ""}`} to="/pedidos">
                                Pedidos <i className="fa fa-shopping-cart"></i>
                            </Link>
                        </a>
                    </div>
                </>
                )}
            </div>
            </div>
            {loggedInUser && (
            <>
            <div className="flex items-center">
                <div>
                    <h1>
                        {loggedInUser.nombre}
                    </h1>
                    
                </div>
                <a href="#" onClick={handleLogout} className="ml-4">  
                    <svg className="w-6 h-6 text-gray-800 dark:text" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
                    </svg>
                </a>
            </div>
        </>
        
            )}
        </nav>
        </div>
    );
    };

    export default Header;
