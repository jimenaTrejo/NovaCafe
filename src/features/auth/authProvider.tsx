// import React, { useContext, createContext, useState, useEffect } from "react";

// interface AuthProviderProps {
//     children: React.ReactNode;
// }

// interface AuthContextType {
//     isAuthenticated: boolean;
//     isAdmin: boolean;
// }

// const AuthContext = createContext<AuthContextType>({
//     isAuthenticated: false,
//     isAdmin: false,
// });

// export function AuthProvider({ children }: AuthProviderProps) {
//     const [authInfo, setAuthInfo] = useState<AuthContextType>({
//         isAuthenticated: false,
//         isAdmin: false,
//     });

//     useEffect(() => {
//         // Hacer una solicitud al servidor para verificar el estado de autenticación y el rol del usuario
//         fetch("http://127.0.0.1:5000/api/login")
//             .then(response => {
//                 if (response.ok) {
//                     return response.json();
//                 } else {
//                     throw new Error("Falló la solicitud de autenticación");
//                 }
//             })
//             .then(data => {
//                 setAuthInfo({
//                     isAuthenticated: data.isAuthenticated,
//                     isAdmin: data.isAdmin,
//                 });
//             })
//             .catch(error => {
//                 console.error("Error al verificar la autenticación:", error);
//             });
//     }, []);

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// }

// export const useAuth = () => useContext(AuthContext);


// // import { useContext, createContext, useState, useEffect } from "react";

// // import React from "react";

// // interface AuthProviderProps {
// //     children: React.ReactNode;
// // }
// // const AuthContext = createContext({
// //     isAuthenticated: false,
// // })

// // export function AuthProvider({children}: AuthProviderProps){
// //     const [isAuthenticated, setIsAuthenticated] = useState(false);

// //     return (
// //         <AuthContext.Provider value={{isAuthenticated}}>
// //             {children}
// //         </AuthContext.Provider>
// //     );
// // }

// // export const useAuth = () => useContext(AuthContext);