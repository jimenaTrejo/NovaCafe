const CheckoutButton = () => {
    
    const handleClick = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/ordenCompra', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ usuario_id: 'ID_DEL_USUARIO' }) // Reemplaza 'ID_DEL_USUARIO' con el ID real del usuario
                
            });
            if (!response.ok) {
                throw new Error('Error al generar la orden de compra');
            }
            const data = await response.json();
            console.log(data);
            console.log('Orden de compra generada correctamente');
            alert('Orden de compra generada correctamente');
        } catch (error) {
            console.error('Error:', error);
            alert('Error al generar la orden de compra');
        }
    };

    return (
        <div className="mt-6">
            <button
                className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                onClick={handleClick}
            >
                Checkout
            </button>
        </div>
    );
};

export default CheckoutButton;
