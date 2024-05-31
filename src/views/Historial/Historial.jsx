import { useState, useEffect } from 'react';

const Historial = () => {
    const [pedidos, setPedidos] = useState([]);
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const user = loggedInUser.id;

    useEffect(() => {
        const obtenerPedidos = async () => {
            try {
                const response = await fetch(`http://127.0.0.1:5000/api/pedidos?usuario_id=${user}`);
                if (!response.ok) {
                    throw new Error('Error al obtener los pedidos');
                }
                const data = await response.json();
                setPedidos(data.pedidos);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        obtenerPedidos();
    }, [user]); // 'user' como dependencia para volver a obtener los pedidos cuando cambie

    // Función para agrupar los pedidos por número de orden
    const agruparPedidos = () => {
        const grupos = {};
        pedidos.forEach(pedido => {
            if (!grupos[pedido.codigo_orden]) {
                grupos[pedido.codigo_orden] = [];
            }
            grupos[pedido.codigo_orden].push(pedido);
        });
        return Object.values(grupos);
    };

    return (
        <div className="flex justify-center items-center ">

        <div className='w-9/12'>
            {agruparPedidos().map((grupoPedidos, index) => (
                <div key={index} className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto ">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-4 xl:p-8 max-w-4xl mx-auto">

                <div className="flex justify-start item-start space-y-2 flex-col ">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{grupoPedidos[0].codigo_orden}</h1>
                    {/* <p className="text-base font-medium leading-6 text-gray-600">Fecha:{grupoPedidos.fecha_pedido}</p> */}
                </div>
                <div className="mt-10 space-y-8">
                    {grupoPedidos.map((pedido, pedidoIndex) => (
                        <div key={pedidoIndex} className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                                {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p> */}
                                <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className="pb-4 md:pb-8 w-full md:w-40">
                                    <img
                                        src={pedido.imagen_alimento}
                                        alt={pedido.nombre}
                                        className="h-full w-full object-cover object-center"
                                    />
                                        {/* <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                                        <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" /> */}
                                    </div>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{pedido.nombre_alimento}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-300">Fecha: </span> {pedido.fecha_pedido}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                {pedido.precio_alimento} 
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-gray-800">{pedido.cantidad}</p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
                </div>
            </div>
            </div>
                // <div key={index} className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
                //     <div className="flex justify-start item-start space-y-2 flex-col ">
                //         <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Order #{grupoPedidos[0].codigo_orden}</h1>
                //         <p className="text-base font-medium leading-6 text-gray-600">21st Mart 2021 at 10:34 PM</p>
                //     </div>
                //     <div className="mt-10 space-y-8">
                //         {grupoPedidos.map((pedido, pedidoIndex) => (
                //             <div key={pedidoIndex} className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                //                 <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-4 xl:p-8 w-full">
                //                     {/* <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">Customer’s Cart</p> */}
                //                     <div className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                //                         <div className="pb-4 md:pb-8 w-full md:w-40">
                //                             <img className="w-full hidden md:block" src="https://i.ibb.co/84qQR4p/Rectangle-10.png" alt="dress" />
                //                             <img className="w-full md:hidden" src="https://i.ibb.co/L039qbN/Rectangle-10.png" alt="dress" />
                //                         </div>
                //                         <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                //                             <div className="w-full flex flex-col justify-start items-start space-y-8">
                //                                 <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{pedido.nombre_alimento}</h3>
                //                                 <div className="flex justify-start items-start flex-col space-y-2">
                //                                     <p className="text-sm leading-none text-gray-800">
                //                                         <span className="text-gray-300">Fecha: </span> {pedido.fecha_pedido}
                //                                     </p>
                //                                 </div>
                //                             </div>
                //                             <div className="flex justify-between space-x-8 items-start w-full">
                //                                 <p className="text-base xl:text-lg leading-6">
                //                                     {pedido.precio_alimento} 
                //                                 </p>
                //                                 <p className="text-base xl:text-lg leading-6 text-gray-800">{pedido.cantidad}</p>
                //                                 <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">$36.00</p>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //         ))}
                //     </div>
                // </div>
            ))}
        </div>
    </div>
    );
};

export default Historial;
