import React from "react";
import "tailwindcss/tailwind.css";

function Contacto() {
    return (
        <div className="bg-gray-200 font-sans leading-normal tracking-normal">
        {/*Header*/}
        <div
            className="w-full m-0 p-0 bg-cover bg-bottom"
            style={{
            backgroundImage: "url('coover.jpg')",
            height: "48vh",
            maxHeight: "460px",
            }}
        >
            <div className="bg-transparent container max-w-4xl mx-auto pt-10 md:pt-32 text-center break-normal">
            {/*Title*/}
            <p className="text-white font-extrabold text-3xl md:text-5xl">
                Cafeteria Novaera
            </p>
            <p className="text-xl md:text-2xl text-gray-500">Reserva tu comida</p>
            </div>
        </div>

        {/*Container*/}
        <div className="bg-transparent container px-4 md:px-0 max-w-6xl mx-auto -mt-32">            {/* <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32"> */}
            <div className="mx-0 sm:mx-6">
            {/*Nav*/}
            <div className="bg-gray-200 w-full text-xl md:text-2xl leading-normal rounded-t">
                <div className="flex h-full bg-white rounded overflow-hidden shadow-lg">
                <a
                    href="post.html"
                    className="flex flex-wrap no-underline hover:no-underline"
                >
                    <div className="w-full md:w-2/3 rounded-t">
                    <img
                        src="/src/imagenes/osv.jpg"
                        className="h-full w-full shadow"
                    />
                    </div>

                    <div className="w-full md:w-1/3 flex flex-col flex-grow flex-shrink">
                    <div className="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                        <p className="w-full text-gray-600 text-xs md:text-sm pt-6 px-6">
                        Empieza el dia
                        </p>
                        <div className="w-full font-bold text-xl text-gray-900 px-6">
                        Cafeteria Novaera
                        </div>
                        <p className="text-gray-800 font-serif text-base px-6 mb-5">
                        ¡Bienvenidos a nuestra cafetería escolar! Somos el corazón
                        culinario de nuestra comunidad educativa, ofreciendo una
                        amplia variedad de alimentos frescos y deliciosos para
                        satisfacer todos los gustos y necesidades. Desde
                        nutritivos desayunos hasta sabrosos almuerzos y opciones
                        de snacks saludables, nos esforzamos por proporcionar
                        comidas de calidad que nutran cuerpos y mentes. Nuestra
                        cafetería es un espacio acogedor donde los estudiantes, el
                        personal y los visitantes pueden disfrutar. ¡Únete a
                        nosotros y descubre todo lo que nuestra cafetería tiene
                        para ofrecer!"
                        </p>
                    </div>
                    <div className="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                        <div className="flex items-center justify-between">
                        <img
                            className="w-8 h-8 rounded-full mr-4 avatar"
                            data-tippy-content="Author Name"
                            src="https://static.vecteezy.com/system/resources/previews/010/356/031/large_2x/burger-illustration-for-logo-sign-icon-poster-animation-and-more-vector.jpg"
                            alt="Avatar of Author"
                        />
                        <p className="text-gray-600 text-xs md:text-sm">
                            Bienvenido
                        </p>
                        </div>
                    </div>
                    </div>
                </a>
                </div>
            </div>

            {/*Subscribe*/}
            <div className="container font-sans bg-green-100 rounded mt-8 p-4 md:p-24 text-center">
                <h2 className="font-bold break-normal text-2xl md:text-4xl">
                Como surge NovaCafe
                </h2>
                <div className="w-full text-center pt-4 ">
                <div className="flex justify-center">
                    <div className="w-full md:w-1/3 p-4 ">
                    <div className="bg-green-100  p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">
                        Menor desperdicio
                        </h2>
                        <img
                        src="/src/imagenes/cora.png"
                        alt="Imagen 1"
                        className="mb-2"
                        />
                        <p className="text-sm">
                        Más del 30% de los alimentos se desperdician por malas
                        gestiones.
                        </p>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                    <div className="bg-green-100  p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">
                        Mayor satisfaccion
                        </h2>
                        <img
                        src="/src/imagenes/like.png"
                        alt="Imagen 2"
                        className="mb-2"
                        />
                        <p className="text-sm">
                        Crear aplicaciones y mejorar la experiencia de padres y
                        alumnos, aumenta la satisfacción, retención y
                        recomendación de tus clientes.
                        </p>
                    </div>
                    </div>
                    <div className="w-full md:w-1/3 p-4">
                    <div className="bg-green-100  p-4 rounded-lg">
                        <h2 className="text-xl font-bold mb-2">
                        Mayor aprovechamiento del tiempo 3
                        </h2>
                        <img
                        src="/src/imagenes/tpo.png"
                        alt="Imagen 3"
                        className="mb-2"
                        />
                        <p className="text-sm">
                        El 50% del tiempo está destinado a tareas manuales de los
                        empleados.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            {/* /Subscribe*/}

            {/*Author*/}
            {/* <div className="flex w-full items-center font-sans p-8 md:p-24">
                
                <img
                className="w-10 h-10 rounded-full mr-4"
                src="http://i.pravatar.cc/300"
                alt="Avatar of Author"
                />
                <div className="flex-1">
                <p className="text-base font-bold text-base md:text-xl leading-none">
                    Como nace NovaCafe
                </p>
                <p className="text-gray-600 text-xs md:text-base">
                    Tailwind CSS version of Casper theme by{" "}
                    <a
                    className="text-gray-800 hover:text-green-500 no-underline border-b-2 border-green-500"
                    href="https://www.tailwindtoolbox.com"
                    >
                    TailwindToolbox.com
                    </a>
                </p>
                </div>
                <div className="justify-end">
                <a
                    href="post.html"
                    className="bg-transparent border border-gray-500 hover:border-green-500 text-xs text-gray-500 hover:text-green-500 font-bold py-2 px-4 rounded-full"
                >
                    Read More
                </a>
                </div>
            </div> */}
            {/*/Author*/}
            </div>
        </div>

        <script src="https://unpkg.com/@popperjs/core@2"></script>
        <script src="https://unpkg.com/tippy.js@6"></script>
        <script></script>
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
            <main className="bg-white rounded-lg p-8 shadow-md">
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Horario</h2>
                <p className="text-gray-700">Lunes a Viernes: 8:00 AM - 7:00 PM</p>
                <p className="text-gray-700">Sábado y Domingo: 9:00 AM - 5:00 PM</p>
            </section>
            <section className="mb-8">
                <h2 className="text-xl font-bold text-gray-800 mb-4">Equipo</h2>
                <ul className="grid grid-cols-2 gap-4">
                <li className="text-gray-700">Juan Pérez - Barista</li>
                <li className="text-gray-700">María López - Cajera</li>
                <li className="text-gray-700">Pedro García - Cocinero</li>
                <li className="text-gray-700">Ana Martínez - Gerente</li>
                </ul>
            </section>
            <section>
                <h2 className="text-xl font-bold text-gray-800 mb-4">Cómo Pedir</h2>
                <p className="text-gray-700">
                Puedes realizar tu pedido de dos maneras:
                </p>
                <ol className="list-decimal pl-6">
                <li className="text-gray-700">
                    En persona en nuestra cafetería.
                </li>
                <li className="text-gray-700">A través de nuestra página web.</li>
                </ol>
            </section>
            </main>
        </div>
        </div>
    );
    }

    export default Contacto;
