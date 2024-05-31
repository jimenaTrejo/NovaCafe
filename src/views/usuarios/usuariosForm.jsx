import React, { useState } from "react";

const UsuarioForm = ({ onGuardar }) => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [contrasena, setContrasena] = useState("");
    const [correo, setCorreo] = useState("");
    const [telefono, setTelefono] = useState("");
    const [tipoUsuarioId, setTipoUsuarioId] = useState("");
    const [fechaNacimiento, setFechaNacimiento] = useState("");
    const [preferenciasAlimenticias, setPreferenciasAlimenticias] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const usuario = {
        nombre,
        apellido,
        contrasena,
        correo,
        telefono,
        tipo_usuario_id: tipoUsuarioId,
        fecha_nacimiento: fechaNacimiento,
        preferencias_alimenticias: preferenciasAlimenticias,
        };
        onGuardar(usuario);
        // Limpiar campos después de guardar
        setNombre("");
        setApellido("");
        setContrasena("");
        setCorreo("");
        setTelefono("");
        setTipoUsuarioId("");
        setFechaNacimiento("");
        setPreferenciasAlimenticias("");
    };

    return (
        <form>
            <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">
                Profile
                </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">
                This information will be displayed publicly so be careful what you
                share.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    First Name
                    </label>
                    <div className="mt-2">
                    <input
                        type="text"
                        name="nombre"
                        id="nombre"
                        value={handleSubmit.nombre}
                        autoComplete="given-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label
                    htmlFor="last-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Last Name
                    </label>
                    <div className="mt-2">
                    <input
                        type="apellido"
                        name="apelldo"
                        id="apellido"
                        value={handleSubmit.apellido}
                        autoComplete="family-name"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-4">
                    <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Email Address
                    </label>
                    <div className="mt-2">
                    <input
                        id="correo"
                        name="correo"
                        type="email"
                        value={handleSubmit.correo}
                        autoComplete="email"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Password
                    </label>
                    <div className="mt-2">
                    <input
                        id="contrasena"
                        name="contrasena"
                        type="password"
                        value={handleSubmit.contrasena}
                        autoComplete="current-password"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                    htmlFor="phone"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Phone
                    </label>
                    <div className="mt-2">
                    <input
                        id="telefono"
                        name="telefono"
                        type="tel"
                        value={handleSubmit.telefono}
                        autoComplete="tel"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                    htmlFor="user-type"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    User Type ID
                    </label>
                    <div className="mt-2">
                    <input
                        id="tipo_usuario_id"
                        name="tipo_usuario_id"
                        type="text"
                        value={handleSubmit.tipo_usuario_id}
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="sm:col-span-2">
                    <label
                    htmlFor="birthdate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Date of Birth
                    </label>
                    <div className="mt-2">
                    <input
                        id="birthdate"
                        name="birthdate"
                        type="date"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    </div>
                </div>

                <div className="col-span-full">
                    <label
                    htmlFor="food-preferences"
                    className="block text-sm font-medium leading-6 text-gray-900"
                    >
                    Food Preferences
                    </label>
                    <div className="mt-2">
                    <textarea
                        id="food-preferences"
                        name="food-preferences"
                        rows="3"
                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    ></textarea>
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-600">
                    Enter your food preferences (if any).
                    </p>
                </div>
                </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                type="button"
                className="text-sm font-semibold leading-6 text-gray-900"
                >
                Cancel
                </button>
                <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                Save
                </button>
            </div>
            </div>
        </form>
    );
};

export default UsuarioForm;
