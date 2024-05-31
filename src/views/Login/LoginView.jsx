// import React, { useState } from 'react';

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [errorMessage, setErrorMessage] = useState('');

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const response = await fetch('http://127.0.0.1:5000/api/login', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ correo: email, contrasena: password })
//             });

//             if (!response.ok) {
//                 throw new Error('Credenciales incorrectas');
//             }
//             const data = await response.json();
//             console.log('Inicio de sesión exitoso');
//             console.log(data.usuario); // Imprimir los datos del usuario en la consola
//             console.log(data.token); // Imprimir el token en la consola
//             console.log("respuesta servidor:", data);
//             // Guardar los datos del usuario en el almacenamiento local
//             localStorage.setItem('loggedInUser', JSON.stringify(data.usuario));
//             if (data.usuario.tipo_usuario_id === 1) {
                
//                 // Redirigir a la página de administrador
//                 window.location.href = "http://localhost:5173/admin";
//             } else if (data.usuario.tipo_usuario_id === 2) {
//                 // Redirigir a la página de cliente
//                 window.location.href = "http://localhost:5173/";
//             }

//             setErrorMessage('');
//         } catch (error) {
//             console.error('Error al iniciar sesión:', error.message);
//             setErrorMessage('Credenciales incorrectas');
//         }
//     };
//     return (
//         <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//             <div className="max-w-md w-full space-y-8">
//                 <div>
//                     <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Iniciar Sesión</h2>
//                     {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}
//                 </div>
//                 <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
//                     <input type="hidden" name="remember" defaultValue="true" />
//                     <div className="rounded-md shadow-sm -space-y-px">
//                         <div>
//                             <label htmlFor="email-address" className="sr-only">Correo Electrónico</label>
//                             <input id="email-address" name="email" type="email" autoComplete="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Correo Electrónico" />
//                         </div>
//                         <div>
//                             <label htmlFor="password" className="sr-only">Contraseña</label>
//                             <input id="password" name="password" type="password" autoComplete="current-password" required value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Contraseña" />
//                         </div>
//                     </div>

//                     <div className="flex items-center justify-between">
//                         <div className="flex items-center">
//                             <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
//                             <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
//                                 Recordarme
//                             </label>
//                         </div>

//                         <div className="text-sm">
//                             <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
//                                 ¿Olvidaste tu contraseña?
//                             </a>
//                         </div>
//                     </div>

//                     <div>
//                         <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
//                             <span className="absolute left-0 inset-y-0 flex items-center pl-3">
//                                 {/* Heroicon name: solid/lock-closed */}
//                                 <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
//                                     <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
//                                     <path fillRule="evenodd" d="M4 8V6a6 6 0 1112 0v2h1a1 1 0 011 1v7a2 2 0 01-2 2H4a2 2 0 01-2-2V9a1 1 0 011-1h1zm11-3a4 4 0 10-8 0V8h8V5z" clipRule="evenodd" />
//                                 </svg>
//                             </span>
//                             Iniciar Sesión
//                         </button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default LoginForm;



const Login = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-md w-full px-6 py-8 bg-white shadow-md rounded-md">
        <div className="flex justify-center">
          <img
            className="h-16 mb-6"
            src="/src/imagenes/logoColor.png"
            width={364}
            height={464}
            alt="Institution Logo"
          />
        </div>
        <h2 className="text-2xl mb-4 text-center font-semibold">Iniciar Sesión</h2>
        <form>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              placeholder="Correo Electrónico"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-semibold" htmlFor="password">
              Contraseña
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="Contraseña"
              required
            />
          </div>
          <button
            className="w-full py-2 px-4 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            type="submit"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
