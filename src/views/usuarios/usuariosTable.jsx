import React from 'react';

const UsuariosTable = ({ usuarios, onEditar, onEliminar }) => {
    console.log("Para eliminar", onEliminar)
    console.log ("usuarios", usuarios)
    return (
        <table className="table-auto w-full">
        <thead>
            <tr>
            <th className="border px-4 py-2">Nombre</th>
            <th className="border px-4 py-2">Apellido</th>
            <th className="border px-4 py-2">Correo</th>
            <th className="border px-4 py-2">Teléfono</th>
            <th className="border px-4 py-2">Fecha de Nacimiento</th>
            <th className="border px-4 py-2">Preferencias Alimenticias</th>
            <th className="border px-4 py-2">Acciones</th>
            </tr>
        </thead>
        <tbody>
            {usuarios.map((usuario) => (
            <tr key={usuario.usuario_id}>
                <td className="border px-4 py-2">{usuario.nombre}</td>
                <td className="border px-4 py-2">{usuario.apellido}</td>
                <td className="border px-4 py-2">{usuario.correo}</td>
                <td className="border px-4 py-2">{usuario.telefono}</td>
                <td className="border px-4 py-2">{usuario.fecha_nacimiento}</td>
                <td className="border px-4 py-2">{usuario.preferencias_alimenticias}</td>
                <td className="border px-4 py-2">
                <button
                    onClick={() => onEditar(usuario.usuario_id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded mr-2"
                >
                    Editar
                </button>
                <button
                    onClick={() => onEliminar(usuario.usuario_id)}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
                >
                    Eliminar
                </button>
                </td>
            </tr>
            ))}
        </tbody>
        </table>
    );
};

export default UsuariosTable;
