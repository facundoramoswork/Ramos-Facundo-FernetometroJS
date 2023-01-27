/* // Declaro primeras variables con alguna constante --!!IMPORTANTE -- Al ser estas mis primeras lineas de codigo jamas escritas en mi vida las dejo guardadas en el documento. No tienen aporte al sitio.
const espaciado = " ";
//declaracion de una variable
let fernet;
//asignacion de una variable
fernet = "Branca";
console.log (fernet) ;
console.log (fernet + "menta");
//variable inicializada aqui debajo
let bebidaCola = "cocaCola";
console.log (bebidaCola);

let fernetConCoca = fernet + " con " + bebidaCola ;
console.log(fernetConCoca);

//condicional en una sola linea
if (fernet == 3) console.log ("Tenemos 3 fernet") ;

/* 
*/

/* ~~ EL MOTIVO DE MI SITIO INTERACTIVO:
    Basicamente mi idea surgió en la primera clase cuando se habló sobre que podía ser nuestro sitio, en ese caos que todos los alumnos teníamos por no saber que construir, que pagina hacer, sobre que o cómo. A mi se me ocurrió hacer esto porque lo encontraba diferente, sabía que muchos ejercicios vistos en clase o de las propias filminas no podrían ser replicados y tendría cierta originalidad.
    El fin de lo ideado era generar un sistema divertido que informara al usuario cuanta bebida debía agregar para cumplir con las "reglas" de tomar fernet 30 - 70 o bien 50-50 para los  más experimentado. Esa era solo mi idea base y al principio funcionó porque me dejaba llevar algunos conocimientos más básicos o primarios a la práctica y divertirme al hacerlo.
    Al comenzar los desafios mediante usos de prompt y alert lograba recopilar cada vez más datos que por ejemplo: calculaban el costo total de la operación de compra simulada mediante los prompt, a cuántos vasos equivalía lo consumido por el usuario que era ingresado al sitio mediante prompts(recibiendo un alert de cuando debía detenerse porque era demasiado).
    Luego del tercer desafío donde ya estaba integrado el uso del DOM en mi sitio, no podía lograr capturar los datos sin utilizar un formulario html, el cual me recargaria toda la pagina cada vez que lo ingresara por hacer uso de la libreria sweet alert que cambia clases a todo el documento HTML.
    Por lo cual, además de contar la historia de como surgió mi idea quiero, abiertamente confesar que mi sitio ha perdido varias funcionalidades, que traídas de lo que fue la metodología de -ingreso mediante prompt y salida por alert o consola- simplemente hacia el DOM de mi documento html no pudieron ser replicadas, o mejoradas/optimizadas en su defecto(las que si pude replicar).
    Intenté de muchas formas lograr hacer lo más original posible sin usar un carrito de compras o sin hacer una mera calculadora.
    Las funciones actuales del sitio son: 
    - Observar contenido dinámico según se actualiza la página del index. Utilizandose la asnincronia y promesas.
    - Seleccionar un producto en el DOM que fue obtenido desde un archivo JSON local.
    - Averiguar el costo de ese producto al seleccionarlo previamente mediante los inputs.
    - Almacenar en el sessionStorage el inicio de sesión de un usuario con nombre y fecha/hora/zona horaria (que no tiene respaldo de servidores o base de datos  ).
    - Visualizar políticas y términos de uso si el usuario indica que es menor de edad mediante integración de Sweetalert2.
    - Uso de 2 librerias en conjunto en la página Productos del sitio para lograr algo de dinamismo en la misma.
    - Calcular si el fernet que vas a preparar estará bien según los gustos del propio usuario o se le debe agrerar más de algo.


*/


//Modal con SweetAlert2 para permitir la visualizacion de contenido de la pagina(o no)dependiendo de lo que clickee el user
Swal.fire({
    title: 'Verificá tu edad',
    text: "Prohibido el ingreso a menores de edad",
    icon: '',
    target: 'main',
    allowOutsideClick:false,
    allowEscapeKey: false,
    allowEnterKey: false,
    showCancelButton: true,
    confirmButtonColor: '#11b811',
    color: '#4e3c68' ,
    background: '#C4F6F9',
    cancelButtonColor: '#d6002b',
    confirmButtonText: 'Tengo más de 18',
    cancelButtonText: 'No soy mayor de edad'
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire({
        title:'Ya podés ingresar!',
        text: 'Te damos la bienvenida',
        background: '#b9e17ca8',
        color: 'white',
        confirmButtonColor: '#008900'
    })
    }else Swal.clickCancel();
}
)

const mainDisclaimer = document.querySelector('.disclaimer');

let mostrarDisclaimer = document.querySelector("#body > main > div > div > div.swal2-actions > button.swal2-cancel.swal2-styled.swal2-default-outline");

mostrarDisclaimer.addEventListener('click', ()=>{
    mainDisclaimer.style.display = "block";
})

//Cargo mediante una  funcion asninconica contenido desde una API (random user generator API) datos que fetchean sincronicamente por el await y luego utilizo esos datos en mi programa para mostrar elementos en el sitio.(simulando usuarios  con informacion propia de cada uno)

const cargarUsers = async()=>{
try{
    const respuesta = await fetch('https://randomuser.me/api/?results=12')
    console.log(respuesta)
    //Evalúo si la respuesta del fetch esta OK y no tira errores 404 u otros con un condicional
    if(respuesta.ok === true){
        const data = await respuesta.json()
        console.log(data);
        
        let usuarios = ""
        data.results.forEach(usuario => {
            usuarios += `<section class="user-class">
                            <img src="${usuario.picture.large}"</img>
                            <p>${usuario.name.first} , ${usuario.name.last}</p>
                            <h2 class="subtUser">Edad :${usuario.dob.age}</h2>
                        </section>
                        <div>
                            <h2 class="subtUser">Pais :${usuario.location.country}</h2>
                            <p>Celular: ${usuario.cell}</p>
                            <p>${usuario.email}</p>
                        </div>
            `
            document.getElementById('content-users').innerHTML = usuarios;

            
        });

    }else if (respuesta.status ===404){
        console.log('Tenemos problemas para mostrar el contenido');
    }else {
        console.log('Ocurrió un problema inesperado')
    }

}catch(error){
    console.log('error')
}
}
cargarUsers();


//array de objetos con marcas de productos
const marcasGaseosa = ["coca", "cunnington", "manaos", "coca-cola", "pepsi"];
marcasGaseosa.push("bichy");
console.log(marcasGaseosa);

//Agrego desde la posicion 2 del array (manaos), sin quitar ningun elemento(0), agrego la marca "dia"
marcasGaseosa.splice(2, 0, "dia");
console.log(marcasGaseosa);

marcasGaseosa.unshift("marca x");


//array de objetos que tiene marcas y precios de bebidas establecidos como {clave : valor}
const stockFernet = [
    { id:1, marca:"branca", precio:1700, contenido:750, stock: true},
    { id:2, marca:"vittone", precio:490, contenido:750, stock: false},
    { id:3, marca:"1882", precio:1300, contenido:750, stock:true},
    { id:4, marca:"branca menta", precio:1350, contenido:750, stock:false},
    { id:5, marca:"branca golden", precio:1310, contenido:450, stock: true},
    { id:6, marca:"buhero", precio:1500, contenido:750, stock: true}
];

//array de objetos con el contenido de gaseosas disponibles
const stockCoca = [
    {marca:"coca-cola", precio:510, contenido:2.25, stock: true},
    {marca:"pepsi", precio:390, contenido:2.25, stock: true},
    {marca:"cunnington", precio:206, contenido:2.25, stock: true},
    {marca:"coca light", precio:520, contenido:2.25, stock: false},
    {marca:"doble cola", precio:238, contenido:2.25, stock: true}
];

//Uso del metodo .concat() para juntar elementos de ambos array de objetos dispuestos arriba
const stockTotal = stockFernet.concat(stockCoca);
console.log(stockTotal);

//le cambio la disponibilidad de stock a "branca menta" del array de objetos de stockFernet
stockFernet[3].stock = true ;
console.log(stockFernet);

//uso de filter para aquellos que tengan precio de 1300 o menor
const resultado = stockFernet.filter ((el)=> el.precio <= 1300);
console.log(resultado);

//Desestructuracion ///// variables a, b, c, d, e, y f con valor equivalente a su posicion como objeto en el array (donde a= 0, b=1, c={id:3, marca: 1882}),etc
const [a, b, c, d, e, f] = stockFernet;

console.log(stockFernet);
console.log(f);


if (f.precio === 1500){
    console.log("LOGRE DESESTRUCTURAR UN ARRAY");
}

if(c.marca === "1882"){
    console.log("Dato proviniente de array stockFernet desestructurado");
    console.log(c.precio)
}

console.log(stockCoca);


//usando metodo map traigo un nuevo array con los precios cambiados al valor de descuento del 15, haciendo uso del metodo Math.trunc() para que devuelva numero sin decimales
const descuentoFernet = stockFernet.map( (el) => {
    return {
        id: el.id,
        marca: el.marca,
        precio: Math.trunc(el.precio / (1.15)),
        contenido: el.contenido
};
})

console.log(descuentoFernet);

//Repito lo de arriba, usando parseFloat y ademas cambiando el metodo toFixed para que tome los primeros 2 valores luego de la coma(devuelve strings).
const descuentoCoca = stockCoca.map( (el) => {
    return {
        marca: el.marca,
        precio: parseFloat(el.precio / 1.15).toFixed(2),
        contenido: el.contenido,
        stock: el.stock
}
})
console.log(descuentoCoca);


//declaro y defino variables para usar despues
const ingresoMarcaFernet = document.getElementById('b-input');
let alerta = document.getElementById('alerta');
let parrafoGenerado = document.getElementById('p-generado');


const login = document.querySelector('.login');

//Mediante uso de la libreria Sweetalert doy la opcion al usuario de registrarse, guardando los valores ingresados en el localStorage
login.addEventListener('click', async ()=>{
    const { value: formValues } = 
        await 
        Swal.fire({
        title: 'Elegí nombre y contraseña',
        background: '#C4F6F9',
        confirmButtonColor: '#11b811',
        html:
        '<input id="swal-input1" class="swal2-input">' +
        '<input id="swal-input2" class="swal2-input">',
        focusConfirm: true,
        allowOutsideClick:false,
        preConfirm: () => {
        return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value 
        ]
        }
})
    if (formValues) {
        Swal.fire(JSON.stringify(formValues));
    }
    console.log(formValues);
    localStorage.setItem('Usuario', formValues);
    usuarioLocal = localStorage.getItem('Usuario');
    console.log("Inicio de sesion bajo el usuario: " + usuarioLocal);
})


const inicioUsuario = document.querySelector("#body > main > div > div > div.swal2-actions > button.swal2-confirm.swal2-styled.swal2-default-outline");

function fechar() {
    sessionStorage.setItem('Hora ingreso al sistema', new Date());
    console.log("Se instancio la hora de ingreso al sitio");
}

inicioUsuario.addEventListener('click', fechar());


const cantidadFernet = document.querySelector('#b-input');
const botellasFernet = document.getElementById('c-input');
const parrafoCantidad = document.getElementById('botellas-fernet');
const parrafoFernet = document.querySelector('#value-fernet');
console.log(cantidadFernet);

//Registro el dato que ingresa el usuario luego de  presionar ENTER y retorno el .value al DOM como texto html
botellasFernet.addEventListener ( "keypress" , (e)=>{
        if ( e.key === "Enter" ){
            var valorIngreso = (e.target.value);
            valorIngreso!= 0 ? parrafoCantidad.innerHTML = "vas a comprar " + valorIngreso + " botellas": parrafoCantidad.innerHTML = "Ingresar cantidad" ;
        }
}); 



//declaro variables constantes igualandolas a nodos del documento ( en este caso 1 input number y luego 1 boton)
const campoBF = document.getElementById('c-input');

const sumaBF = document.getElementById('sumaBF');

const campoBG = document.getElementById('e-input');

const sumaBG = document.getElementById('sumaBG');


let guardadoBotellasF = 0;
sumaBF.addEventListener('click', ()=> {
    let guardadoBotellasF = parseFloat(document.getElementById('c-input').value);
    sessionStorage.setItem('numeroBotellasFernet', guardadoBotellasF);
    console.log(guardadoBotellasF);
    return guardadoBotellasF;
})

let guardadoBotellasG = 0;
sumaBG.addEventListener('click', ()=> {
    let guardadoBotellasG = parseFloat(document.getElementById('e-input').value);
    sessionStorage.setItem('numeroBotellasFernet', guardadoBotellasG);
    console.log(guardadoBotellasG);
    return guardadoBotellasG;
})


let {id, marca, precio, contenido, stock} = a;
console.log(a.precio);

const divPrecioFernet = document.querySelector('.precio-fernet');

cantidadFernet.addEventListener('change', ()=>{
    let valorSeleccionado = cantidadFernet.value;
    console.log(valorSeleccionado);
    parrafoFernet.textContent = `Seleccionaste:  ${valorSeleccionado}`;


    const buscaMarca = stockFernet.map((busca)=>{
        return {
            marca: busca.marca,
            precio: busca.precio
        }
        });

    console.log(buscaMarca);

    const buscaPrecios = stockFernet.map((busca)=> busca.precio );
    console.log(buscaPrecios);

    if (valorSeleccionado === "branca"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[0].precio} </h4>`;
    }else if (valorSeleccionado === "vittone"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[1].precio} </h4>`;
    }else if (valorSeleccionado === "1882"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[2].precio} </h4>`;
    }else if (valorSeleccionado === "branca menta"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[3].precio} </h4>`;
    }else if (valorSeleccionado === "branca golden"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[4].precio} </h4>`;
    }else if (valorSeleccionado === "buhero"){
        divPrecioFernet.innerHTML = `<h4> Precio: $ ${buscaMarca[5].precio} </h4>`;
    }
});


const selectorGaseosa = document.querySelector('#d-input');
const showValueGaseosa  = document.querySelector('#value-gaseosa')

const divPrecioGaseosas = document.querySelector('.precio-gaseosas');

selectorGaseosa.addEventListener('change', ()=>{
    let seleccionGaseosa = selectorGaseosa.value;
    console.log(seleccionGaseosa);
    showValueGaseosa.textContent = `Seleccionaste la marca: ${seleccionGaseosa}`;


//Metodo map() que recorre el array StockCoca y devuelve solo la propiedad marca y precio de los objetos.
    const buscaMarca2 = stockCoca.map((busca)=>{
        return {
            marca: busca.marca,
            precio: busca.precio
        }
        })

    console.log(buscaMarca2);


    if (seleccionGaseosa === "coca-cola"){
        divPrecioGaseosas.innerHTML = `<h4> Precio: $ ${buscaMarca2[0].precio} </h4>`;
    }else if (seleccionGaseosa === "pepsi"){
        divPrecioGaseosas.innerHTML = `<h4> Precio: $ ${buscaMarca2[1].precio} </h4>`;
    }else if (seleccionGaseosa === "cunnington"){
        divPrecioGaseosas.innerHTML = `<h4> Precio: $ ${buscaMarca2[2].precio} </h4>`;
    }else if (seleccionGaseosa === "coca light"){
        divPrecioGaseosas.innerHTML = `<h4> Precio: $ ${buscaMarca2[3].precio} </h4>`;
    }else if (seleccionGaseosa === "doble cola"){
        divPrecioGaseosas.innerHTML = `<h4> Precio: $ ${buscaMarca2[4].precio} </h4>`;
    }
});


const cantidadGaseosa = document.getElementById('e-input');
let parrafoGaseosa = document.getElementById('botellas-gaseo')
//usando un eventlistener cuando el usuario escribe en el campo de texto del html y luego presiona enter la pagina notifica mediante modificacion del DOM(reemplazo de texo en etiqueta div y <p> vacias)cuanta cantidad va a comprar el usuario 
cantidadGaseosa.addEventListener ( "keypress" , (e)=>{
    if (e.key === "Enter"){
        let valorIngresado = e.target.value;
        valorIngresado != 0 ? parrafoGaseosa.innerHTML = "vas a comprar " + valorIngresado + " botellas": parrafoGaseosa.innerHTML = "Ingresar cantidad" ;
    };
});

const botonSuma = document.getElementById ("boton-calculo");
const resultadoSumas = document.getElementById("fernetometro2");
//realizo una suma que toma la cantidad que ingresa el user de 2 input text en la pagina para luego sumarlas mediante la funcion mezcla()

let mezclaTotal = 0;

function mezcla (){
    let inputAlcohol = document.getElementById('input-alcohol').value;
    let inputGaseosa = document.getElementById('input-gaseosa').value;
    console.log(inputAlcohol, 'soy el al cohol');
    console.log(inputGaseosa, 'soy la gaseo');
    let suma = parseInt(inputAlcohol) + parseInt(inputGaseosa);
    mezclaTotal = suma;
    console.log(suma);
    inputAlcohol > inputGaseosa ? resultadoSumas.innerHTML = "Tu fernet estara muy puro" : resultadoSumas.innerHTML = "Tu fernet estara aguachento";
    return suma;
};

console.log(mezclaTotal);

//PROBLEMA 2 - en este no puedo capturar de forma global lo que ingresa el usuario para despues sumar los dos datos recibidos de los inputs de la variable suma

const mezclaRealizada = document.getElementById ('resultadoSuma');

const parrafoSuma = document.getElementById("parrafo-suma");



//Clase constructora de objeto llamado Usuarios
class Usuarios {
    constructor (nombre, edad){
        this.nombre = nombre;
        this.edad = edad;
    };
        bienvida(){
            console.log("Bienveindo al Fernetometro " + this.nombre);
        };
    }

const user1 = new Usuarios ("Luis" , 19);
user1.bienvida();
console.log(user1.edad);
