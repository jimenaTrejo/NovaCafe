import { Fragment, useState, useEffect } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';


const CartShopping = () => {
    const [cartItems, setCartItems] = useState([]);
    const [subtotal, setSubtotal] = useState(0);


    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    const user = loggedInUser.id;
    console.log(user, "usuario");    


    useEffect(() => {
        const fetchCartItems = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/verCarrito?usuario_id=${user}`);
                if (!response.ok) {
                    throw new Error('Error al obtener el carrito');
                }
                const data = await response.json();
                setCartItems(data.carrito);
                console.log(data.carrito," no, soy yo")
            } catch (error) {
                console.error('Error:', error);
            }
        };
        fetchCartItems();
    }, []);


    useEffect(() => {
        // Calcula el subtotal sumando los precios de todos los productos en el carrito
        const calculateSubtotal = () => {
            let total = 0;
            cartItems.forEach((item) => {
                total += item.precio_alimento * item.cantidad;
            });
            setSubtotal(total);
        };

        calculateSubtotal();
    }, [cartItems]);


    const EliminarDelCarrito = (alimento_id) => {
        console.log(alimento_id, "soy el id del alimento")
        fetch("http://127.0.0.1:5000/api/eliminarProductoCarrito", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            alimento_id: alimento_id,
        }),
        })
        .then((response) => {
            if (!response.ok) {
            throw new Error("Error al eliminar el producto al carrito");
            }
            // mensaje de éxito al usuario.
            console.log("El producto fue eliminado de manera exitosa")
        })
        .catch((error) => {
            console.error("Error:", error);
            // Aquí puedes manejar errores, por ejemplo, mostrar un mensaje de error al usuario.
        });
    };
    const handleClick = async () => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    const user = loggedInUser.id;
    console.log(user, "usuario");
        try {
            const response = await fetch('http://localhost:5000/api/ordenCompra', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario_id: user }) // Pasar usuario_id como parámetro
            });
            if (!response.ok) {
                throw new Error('Error al generar la orden de compra');
            }
            const data = await response.json();
            console.log(data, "Soy la data del chekout");
            alert('Orden de compra generada correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Error al generar la orden de compra');
        }
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [open, setOpen] = useState(true);

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={handleClose}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-hidden">
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                            <Transition.Child
                                as={Fragment}
                                enter="transform transition ease-in-out duration-500 sm:duration-700"
                                enterFrom="translate-x-full"
                                enterTo="translate-x-0"
                                leave="transform transition ease-in-out duration-500 sm:duration-700"
                                leaveFrom="translate-x-0"
                                leaveTo="translate-x-full"
                            >
                                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                                    <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                                        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                                            <div className="flex items-start justify-between">
                                                <Dialog.Title className="text-lg font-medium text-gray-900">
                                                    Shopping cart
                                                </Dialog.Title>
                                                <div className="ml-3 flex h-7 items-center">
                                                    <button
                                                        type="button"
                                                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                                                        onClick={handleClose}
                                                    >
                                                        <span className="absolute -inset-0.5" />
                                                        <span className="sr-only">Close panel</span>
                                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="mt-8">
                                                <div className="flow-root">
                                                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                                                        {cartItems.map((item) => (
                                                            <li key={item.id} className="flex py-6">
                                                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                                                    <img
                                                                        src={item.imagen_alimento}
                                                                        alt={item.nombre}
                                                                        className="h-full w-full object-cover object-center"
                                                                    />
                                                                </div>
                                                                <div className="ml-4 flex flex-1 flex-col">
                                                                    <div>
                                                                        <div className="flex justify-between text-base font-medium text-gray-900">
                                                                            <h3>{item.nombre_alimento}</h3>
                                                                        
                                                                            <p className="ml-4">{item.precio_alimento}</p>
                                                                        </div>
                                                                        <p className="mt-1 text-sm text-gray-500">
                                                                            Descripcion {item.descripcion}
                                                                        </p>
                                                                    </div>
                                                                    <div className="flex flex-1 items-end justify-between text-sm">
                                                                        <p className="text-gray-500">
                                                                            Cantidad:    {item.cantidad}
                                                                        </p>
                                                                        <div className="flex">
                                                                            <button
                                                                                onClick={() => EliminarDelCarrito(item.alimento_id)}
                                                                                type="button"
                                                                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                                                            >
                                                                                Remove
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                                            <div className="flex justify-between text-base font-medium text-gray-900">
                                                <p>Subtotal</p>
                                                <p>$262.00</p>
                                            </div>
                                            <p className="mt-0.5 text-sm text-gray-500">
                                                Shipping and taxes calculated at checkout.
                                            </p>
                                            <div className="mt-6">
                                            <button
                                                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                                                onClick={handleClick} // Pasar usuario_id como parámetro
                                            >
                                                Comprar
                                            </button>
                                            
                                            </div>
                                            <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                                                <p>
                                                    or{' '}
                                                    <button
                                                        type="button"
                                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                                        onClick={handleClose}
                                                    >
                                                        Continue Shopping
                                                        <span aria-hidden="true"> &rarr;</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    );
};

export default CartShopping;
