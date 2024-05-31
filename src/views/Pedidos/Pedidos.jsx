import React, { useState, useEffect } from 'react';

const PedidosList = () => {
    const [pedidos, setPedidos] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/obtenerPedidos')
            .then(response => response.json())
            .then(data => setPedidos(data.pedidos))
            .catch(error => console.error('Error al obtener los pedidos:', error));
    }, []);

    const eliminarOrden = (codigo_orden) => {
      fetch(`http://127.0.0.1:5000/api/eliminarOrdenPedido/${codigo_orden}`, { method: 'DELETE' })
          .then(response => {
              if (response.ok) {
                  // Si la eliminación es exitosa, actualizamos la lista de pedidos
                  setPedidos(pedidos.filter(pedido => pedido.codigo_orden !== codigo_orden));
              } else {
                  console.error('Error al eliminar la orden de pedido');
              }
          })
          .catch(error => console.error('Error al eliminar la orden de pedido:', error));
  };
    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center my-8">Lista de Pedidos</h1>
            <table className="w-full border-collapse border border-gray-300">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 px-4 py-2">Código de Orden</th>
                        <th className="border border-gray-300 px-4 py-2">Nombre del Alimento</th>
                        <th className="border border-gray-300 px-4 py-2">Precio</th>
                        <th className="border border-gray-300 px-4 py-2">Cantidad</th>
                        <th className="border border-gray-300 px-4 py-2">Fecha de Pedido</th>
                        <th className="border border-gray-300 px-4 py-2">Imagen</th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map(pedido => (
                        <tr key={pedido.codigo_orden}>
                            <td className="border border-gray-300 px-4 py-2">{pedido.codigo_orden}</td>
                            <td className="border border-gray-300 px-4 py-2">{pedido.nombre_alimento}</td>
                            <td className="border border-gray-300 px-4 py-2">{pedido.precio_alimento}</td>
                            <td className="border border-gray-300 px-4 py-2">{pedido.cantidad}</td>
                            <td className="border border-gray-300 px-4 py-2">{pedido.fecha_pedido}</td>
                            <td className="border border-gray-300 px-4 py-2"><img src={pedido.imagen_alimento} alt={pedido.nombre_alimento} className="w-20 h-20" /></td>
                            <td className="border border-gray-300 px-4 py-2">
                                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => eliminarOrden(pedido.codigo_orden)}>
                                    Atendido
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PedidosList;
