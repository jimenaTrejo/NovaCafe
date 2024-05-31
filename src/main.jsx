import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

  ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

  // import React from 'react'
  // import ReactDOM from 'react-dom/client'
  // import './index.css'
  // import { createBrowserRouter, RouterProvider } from 'react-router-dom'
  // import Home from "./views/Home/Home";
  // import Registro from "./views/Registro/Registro";
  // import Pedidos from "./views/Pedidos/Pedidos";
  // import Historial from "./views/Historial/Historial";
  // import Catalogo from "./views/Catalogo/CatalogoViwe";
  // import { useSelector } from "react-redux"
  // import Contacto from "./views/Contacto/Contacto";
  // import NotFound from "./components/NotFound";
  // import ProtectedRoute from './components/common/hooks/ProtectedRoute.jsx'
  // import { AuthProvider } from './features/auth/authProvider.tsx'
  // import Login from "./views/Login/LoginView";
  // import Header from './components/Header.jsx'
  // const router=createBrowserRouter([
  //   {
  //   path:"/",
  //   element:<Home />,
  //   },
  //   {
  //     path:"/",
  //     element:<ProtectedRoute />,
  //     children:[
  //       {
  //         path: "/registro",
  //         element: <Registro/>,
  //       },
  //     ],
  //   },
  //   {
  //     path:"/catalogo",
  //     element:<Catalogo />,
  //   },
  //   {
  //     path:"/pedidos",
  //     element:<Pedidos />,
  //   },
  //   {
  //     path:"/historial",
  //     element:<Historial />,
  //   },
  //   {
  //     path:"/contacto",
  //     element:<Contacto />,
  //   },
  //   //  {
  //   //    path: "/",
  //   //    element: <AuthenticatedHeader />, // Renderizar el encabezado condicionalmente
  //   //    children: [
  //   //      { path: "", element: <Home /> },
  //   //      { path: "login", element: <Login /> },
  //   //    ],
  //   //  }
  // ]);
  // ReactDOM.createRoot(document.getElementById('root')).render(
    
  //   <React.StrictMode>
  //           <Header />

  //     <AuthProvider >

  //       <RouterProvider router={router}/>
  //     </AuthProvider>
  //     {/* <App /> */}
  //   </React.StrictMode>,
  // )
