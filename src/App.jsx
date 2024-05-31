import { useEffect, useState  } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { useSelector } from "react-redux"
import "./App.css";
import Header from "./components/Header";
// import HeaderAdmin from "./views/HeaderAdmin/HearderAdmin";
import Home from "./views/Home/Home";
import Login from "./views/Login/LoginView";
import Registro from "./views/Registro/Registro";
// import PedidosAdmin from "./views/PedidosAdmin/PedidosAdmin";
// // import RegistroCliente from "./views/Registro/Registro"
// // import { ProtectedRoute } from './components/Productos/ProtectedRoute';
// import Productos from "./components/Productos/Productos"
import Pedidos from "./views/Pedidos/Pedidos";
import Historial from "./views/Historial/Historial";
import Catalogo from "./views/Catalogo/CatalogoViwe";
// import { useSelector } from "react-redux"
import Contacto from "./views/Contacto/Contacto";
import NotFound from "./components/NotFound";
// import { Provider } from "react-redux";
// import PedidosAdmin from "./views/PedidosAdmin/PedidosAdmin"
import ProtectedRoutes from "./components/common/hooks/ProtectedRoutes";
import CartShopping from "./views/Carro/CartShopping";
// const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
// console.log("El tipo de usuario es:", loggedInUser.tipo_usuario_id);
// console.log("El tipo de usuario es:", loggedInUser);
import Productos from "./views/Productos/Productos";
import Usuarios from './views/usuarios/usuarios';


function App() {
  return (
    <BrowserRouter>
    <Header/>
      <main>
        <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/cart" element={<CartShopping/>}/>
              <Route path="/login" element={<Login />} />
              {/* <Route path="/registro" element={<Registro />} /> */}
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/registro" element={<Registro />} />
              <Route path="/usuarios" element={<Usuarios />} />

              <Route path="/contacto" element={<Contacto />} />
              <Route path="/productos" element={<Productos />} />
              <Route element={<ProtectedRoutes />}>
                <Route exact path="/pedidos" element={<Pedidos />} />
              </Route>
              <Route path="/historial" element={<Historial />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </main>
    </BrowserRouter>
  );
 // Remove the extra closing parenthesis here
}
  /* <Routes>
            <Route path="/login" element={<Login />} />
              <Route path="/" element={<Home/>}/>
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="/pedidos" element={<Pedidos />} />
              <Route path="/historial" element={<Historial />} />
              <Route path="*" element={<NotFound />} />
            </Routes> */

export default App;
