import React, { useState, useEffect } from 'react';
import UsuarioForm from "./usuariosForm";
import UsuariosTable from "./usuariosTable";

const App = () => {
    const [usuarios, setUsuarios] = useState([]);

    // Función para cargar usuarios
    useEffect(() => {
        cargarUsuarios();
        console.log("Aqui estan los usuarios?", cargarUsuarios)
    }, []);

    const cargarUsuarios = () => {
        fetch('http://127.0.0.1:5000/api/obtenerTodosUsuario')
        .then(response => response.json())
        .then(data => {
            setUsuarios(data.mensaje);
            console.log("Aqui estan los usuarios?", data.mensaje)
        })
        .catch(error => console.error('Error:', error));
    };

    // Función para guardar un usuario
    const guardarUsuario = (usuario) => {
        fetch('http://127.0.0.1:5000/api/crearUsuario', {
        method: 'POST',
        body: JSON.stringify(usuario),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensaje);
            console.log(data)
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
    };

    // Función para eliminar un usuario
    const eliminarUsuario = (id) => {
        fetch('http://127.0.0.1:5000/api/eliminarUsuario', {
        method: 'POST',
        body: JSON.stringify({ usuario_id: id }),
        headers: {
            'Content-Type': 'application/json'
        }
        })
        .then(response => response.json())
        .then(data => {
            alert(data.mensaje);
            cargarUsuarios();
        })
        .catch(error => console.error('Error:', error));
    };

    return (
        <div className="container mx-auto mt-4">
        <h1 className="text-2xl font-bold mb-4">Usuarios</h1>
        <UsuarioForm onGuardar={guardarUsuario} />
        <UsuariosTable usuarios={usuarios} onEliminar={eliminarUsuario} />
        </div>
    );
};

export default App;
