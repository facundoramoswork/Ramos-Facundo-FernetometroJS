<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Bubbles&display=swap" rel="stylesheet">
    <!-- cdn de fuente para texto regular del sitio -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Ramaraja&display=swap" rel="stylesheet">
    <!-- Styles CSS -->
    <link rel="stylesheet" href="./css/main.css" type="text/css">
    <title>Ramos-Facundo-FernetometroJS</title>
</head>

<body id="body">
    <header id="contenedor-nav">
        <nav class="barra-nav">
            <ul>
                <li class="menu-list"><a href="pages/productos.php">NUESTROS PRODUCTOS</a></li>
            </ul>
        </nav>
    </header>
    <div class="div-log">
        <button class="login">Loguearme</button>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#9EF0F0" d="M49.2,-65.3C63.4,-57.4,74.4,-42.6,79.6,-26C84.9,-9.4,84.3,8.9,79.3,26.1C74.2,43.4,64.6,59.5,50.6,70C36.7,80.4,18.3,85.1,1.2,83.4C-16,81.8,-32,73.9,-46.8,63.8C-61.7,53.7,-75.4,41.3,-81.6,25.7C-87.7,10.1,-86.4,-8.8,-79.5,-24.6C-72.6,-40.3,-60.2,-53.1,-46,-61.1C-31.9,-69,-15.9,-72.3,0.8,-73.4C17.5,-74.4,35,-73.3,49.2,-65.3Z" transform="translate(100 100)" />
        </svg>
    </div>
    <main>
        <h1>
            Bienvenidos al Fernetometro!
        </h1>
        <h3>Pagina oficial del fernet argentino </h3>
    </main>
    <div class="disclaimer">
        <h2>Terminos y condiciones del Fernetometro - sitio oficial </h2>
        <hr/>
        <span>
            <p> TÉRMINOS Y CONDICIONES PARA EL ACCESO, USO, VISITAS Y DEMÁS SERVICIOS Y ACTIVIDADES EN Y/O A TRAVÉS DEL SITIO.

            Este sitio Web denominado www.githubpages/Ramos-Facundo.pages (en adelante el “Sitio”). Por favor, lea atentamente los siguientes términos y condiciones y reglas básicas que rigen el acceso, uso, visitas, actividades, transacciones y demás servicios en y/o a través del Sitio (en adelante los “Términos y Condiciones”). Por ello, estos Terminos y Condiciones y demás políticas y principios informados en el Sitio son obligatorios, y rigen todos los efectos jurídicos derivados de todas las actividades y transacciones que se realicen en y/o a través del Sitio. 

            Toda y cualquiera de las actividades consistentes en el acceso, uso, visitas, navegación, registración y/o confirmación electrónica de las transacciones realizadas a través del Sitio, implican la aceptación de los Términos y Condiciones y la obligación de cumplirlos acabadamente. 

            Quien no acepte los Terminos y Condiciones, deberá abstenerse de usar el Sitio.

            <em>SOLO PODRÁN ACCEDER, USAR Y/O DE CUALQUIER MANERA CONTACTARSE CON EL SITIO, PERSONAS MAYORES DE 18 AÑOS, QUEDANDO PROHIBIDA TODA Y/O CUALQUIER ACTIVIDAD EN EL SITIO DE MENORES DE EDAD.</em>

            Todos los cargos, precios y costos de los servicios de Internet necesarios para el acceso, uso, visita, navegación y demás actividades que se realicen en y/o a través del Sitio, son a cargo exclusivo de los interesados.

            Los Términos y Condiciones implican que los interesados y Usuarios (según se los define mas abajo) aceptan en forma irrevocable, las siguientes obligaciones: 

            Que conforme lo establecido por el art. 6 inc. A) de la ley 24.788 (LEY NACIONAL DE LUCHA CONTRA EL ALCOHOLISMO) los mensajes creados y/o actividades realizadas en y/o através del Sitio no pueden tener como destinatarios a menores de 18 años. En consecuencia, los interesados y Usuarios aceptan y se comprometen a no enviar ni generar ningún mensaje a personas o titulares de cuentas de correo electrónico menores de 18 años. Si lo hicieren, tal conducta será de su exclusiva responsabilidad.
            Los Interesados y Usuarios serán los únicos responsables de la veracidad de todo y/o cualquier datos enviado al Sitio (edad, nombre y apellido, y/o dirección de correo electrónico) y por el envío de mensajes y/o cualquier contacto y/o comunicación del, hacia, y/o a partir del Sitio.
            Todos los elementos, incluidas las imágenes, textos, ilustraciones, íconos, logo e isotipos, fotografías, programas, animaciones, cualquier música, melodía, video clip, marcas y cualquier otro elemento que forma parte del Sitio sólo tiene como destino la demostración de conocimientos , pertenecen a <strong>Facundo Ramos</strong>, alumno de CODERHOUSE. Se encuentra terminantemente prohibida su reproducción, copia, modificación, distribución y/o uso de los mismos.
            <em>Uso con fines meramente educativos.</em>
            </span>
        </p>
            </div>
    <section id="contenedor-grilla">
        <section id="a">
            <div id="b">
                <p>Ingresá tu marca preferida de fernet </p> 
                <select name="marcas fernet" id="b-input">
                    <option selected disabled>Seleccioná una opción</option>
                    <option value="branca">Fernet Branca 750ml</option>
                    <option value="vittone">Fernet Vittone 750ml</option>
                    <option value="1882">Fernet 1882 750ml</option>
                    <option value="branca menta">Fernet Branca Menta 750ml</option>
                    <option value="branca golden">Branca edición especial Mundial FIFA 2022</option>
                    <option value="buhero">Fernet Buhero negro 750ml</option>
                </select>
                <div id="alerta">
                    <p id="value-fernet"></p>
                </div>
                <div class="precio-fernet"></div>
            </div>

        <div id="c">
                <p>Ingresá numero de botellas a comprar<span> y luego pulsá ENTER</span></p>
                <input type="number" id="c-input" placeholder="Ej: 18 y luego ENTER" maxlength="3">
                <div>
                    <button id="sumaBF">Sumar</button>
                </div>
                <div>
                    <p id="botellas-fernet"></p> 
                </div>
        </div>
    </section>

    <section id="z">
        <div id="d">
            <p>Ingresá marca de gaseosa</p>
            <select name="marcas gaseosa" id="d-input">
                <option selected disabled>Seleccioná una opción</option>
                <option value="coca-cola">Coca-Cola 2.25lts</option>
                <option value="pepsi">PEPSI 2.25 litros</option>
                <option value="cunnington">Cunnington Cola 2.25lts</option>
                <option value="coca light">Coca-Cola ZERO 2.25lts</option>
                <option value="doble cola">Doble-cola 3 lts</option>
            </select>
            <div>
                <p id="value-gaseosa"></p>
            </div>
            <div class="precio-gaseosas"></div>
        </div>

        <div id="e">
            <p>Ingresá cantidad de botellas a comprar<span> y luego pulsá ENTER</span></p>
                <input type="number" id="e-input"  placeholder="Ej: 2 y presionar ENTER" maxlength="3">
                <div>
                    <button id="sumaBG">Agregar</button>
                </div>
            <div>
                <p id="botellas-gaseo"></p>
            </div>
        </div>
    </section>
</section>
    <section>
        <div>
            <h3>Calculemos!</h3>
            <p>Escribi en numeros la cantidad de fernet que vas a mezclar</p>
            <input type="number" id="input-alcohol">
        </div>
        <div>
            <p>Ahora escribinos la cantidad de gaseosa que queres mezclar</p>
            <input type="number" id="input-gaseosa">
            <button id="boton-calculo" onclick="mezcla()"> ¿Cómo quedará mi Fernet? </button>
            <div id="fernetometro2"></div>
            <p id="parrafo-suma"> <!-- aqui viene lo que devuelve en el JS la suma de ambos inputs number del nodo html --></p>
        </div>
    </section>
    <div class="fernet-tips">
        <div class="p1">
            <p> Lo ideal para quien comienza a tomarlo es arrancar<strong> entre el 20 y el 25% </strong>de Fernet, si hablamos de partes, estaríamos haciendo referencia a unas 2 / 2 ½ partes de Fernet, sumadas a 6 partes de coca y el resto del recipiente lo rellenamos con hielo (las 2 partes restantes), aunque todos sabemos que cuanto mayor la cantidad de hielo, más disfrutamos el trago. 🥶
        
            Evitar poner demasiado Fernet al principio evitará que el paladar de la persona no se sienta invadido por el amargor propio de la bebida y pueda <strong>comenzar a disfrutarla cómo corresponde.</strong> Más adelante, cuando uno comienza a disfrutar la totalidad de tonalidades que tiene el fernet junto a su aroma, la cantidad perfecta debería ser entre el 30% y el 40%. Aunque existen personas que hacen honor literal al trago y lo toman en proporción <strong>"50 y 50"</strong>. Para muchos,<strong> la proporción perfecta de como debe tomarse el Fernet.</strong>😎</p>
        </div>
            
        <div class="p2">
            <p> <span> 🤓Recordá que: </span>
            La Coca <strong>debe estar fría</strong>, ya que si le ponés Coca caliente el gas que genera el choque térmico con el hielo genera demasiada espuma y el trago luego queda, justamente, sin gas porque se fue ni bien pusiste la coca. No es necesario que la Coca (o cualquier otra gaseosa sabor cola utilizada) esté congelada, pero si fría, de heladera.
            El Fernet debe estar a <strong> temperatura ambiente</strong>. Si lo ponés en la heladera todo estará frio, lo que generará menos choque térmico y por ende, muy poca espuma. Con ponerlo en un lugar fresco y seco basta.
            Es clave que el hielo tenga consistencia y no sea de esos "hielitos de congelador" 🧊. Lo mejor que te podría pasar para preparar el fernet perfecto es tener una de esas cubeteras que hacen hielos que se parecen a los que se consiguen en las estaciones de servicio.
            </p>
        </div>
    </div>
    <div>
        <p class="origines">1845, Milán- Entre probetas, alambiques y morteros, Bernardino Branca logra crear un elixir distinto, una bebida única. El boticario de Porta Nuova cuenta con un colaborador sueco llamado Dr. Fernet. En homenaje a él, Bernardino llama a la bebida recién creada Fernet y le agrega su apellido.</p>
    </div>
    <div class="svg-container">
        <svg class="svg-h3" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#754F44" d="M49.7,-41C62.9,-36.4,71.1,-18.2,69.3,-1.9C67.4,14.5,55.4,29,42.2,35.9C29,42.8,14.5,42.2,-3,45.2C-20.5,48.2,-41,54.8,-52.8,47.9C-64.7,41,-68,20.5,-67.2,0.8C-66.4,-18.8,-61.5,-37.7,-49.6,-42.3C-37.7,-46.9,-18.8,-37.2,-0.3,-36.9C18.2,-36.6,36.4,-45.6,49.7,-41Z" transform="translate(100 100)" />
        </svg>
        <h3 class="h3-absoluto">Algunos de nuestros usuarios!</h3>
    </div>

    <section id="content-users"></section>
    <div class="paginacion">
        <button id="anterior">Pagina anterior</button>
        <button id="siguiente">Pagina siguiente</button>
    </div>
    <footer class="footer-copy">
        <ul>
            <li>
                <p>2023 - <span>Sabalaje®</span></p>
            </li>
            <li>Todos los derechos a sus respectivos dueños. Sitio interactivo con fines de manifestar conocimientos</li>
        </ul>
    </footer>
</body>
    <!-- CDN SweetAlert2 -->
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="./Js/main.js"> </script>
</html>
