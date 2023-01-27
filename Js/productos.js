//METODO 1

/* const myFunction = () => {
    Swal.fire({
        title: 'TODAS PUTAS!',
        text: 'SIIIUUUUU',
        icon: 'success',
        confirmButtonText: 'Cool'
    });
}

let myBot = document.getElementById("boton-random");
myBot.addEventListener("click", myFunction);


 */
//METODO 2

const tocarBoton = document.getElementById('boton-random');

tocarBoton.addEventListener ('click', ()=>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Has comprado un producto!',
        showConfirmButton: false,
    });
    setTimeout (()=>{ //agrego setTimeout() al sweet alert para que cierre automatico pasados 2 segundos
        Swal.close();
    } , 3500);
})

/* tocarBoton.addEventListener ('click', ()=> {
    Swal.fire({
        title: 'Has agregado un producto al carrito',
        color: '#dc143c',
        width:'50rem',
        background: '#140701',
        text: 'felicidades!',
        icon: 'success',
        confirmButtonText: 'Cerrar',
        confirmButtonColor: 'crimson',
        position: 'top',
        timerProgressBar: true,
        target: 'section',
        allowOutsideClick:'false',
        allowEscapeKey: 'false',
        allowEnterKey: 'false'
    });
    setTimeout (()=>{ //agrego setTimeout() al sweet alert para que cierre automatico pasados 2 segundos
        Swal.close();
    } , 2400);
})
 */



//Ukiyo modern parralax 
const imagenes = document.querySelectorAll(".ukiyo")

new Ukiyo(imagenes, {
    scale: 1.4, 
    speed: 1.3, 
    willChange: false, 
    wrapperClass: "ukiyo-wrapper",
    externalRAF: true
})


//Ukiyo raf externo con Lenis scrolling agregado para transiciones de scroll mucho mas suaves
    const parallax = new Ukiyo(".ukiyo", {
        externalRAF: true
    });

    const lenis = new Lenis();

    function raf(time) {
        parallax.animate();

        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

const stockFernet = [
    { id:1, marca:"branca", precio:1700, contenido:750, stock: true},
    { id:2, marca:"vittone", precio:490, contenido:750, stock: false},
    { id:3, marca:"1882", precio:1300, contenido:750, stock:true},
    { id:4, marca:"branca menta", precio:1350, contenido:750, stock:false},
    { id:5, marca:"branca golden", precio:1810, contenido:750, stock: true},
    { id:6, marca:"buhero", precio:1500, contenido:750, stock: true}
];

const stockCoca = [
    {marca:"cocacola", precio:510, contenido:2.25, stock: true},
    {marca:"pepsi", precio:390, contenido:2.25, stock: true},
    {marca:"cunnington", precio:206, contenido:2.25, stock: true},
    {marca:"coca light", precio:520, contenido:2.25, stock: false},
    {marca:"doble cola", precio:238, contenido:2.25, stock: true}
];


//Js JSON traido de carpeta /data

//Declaro array vacio asignado a variable constante, para en una instancia futura, agregarle con metodo push datos del JSON
const datosJS = [];


const cajaDiv = document.getElementsByClassName('caja');

const seccionCajas1 = document.getElementById('section-fernet');


fetch('/data/datos.json')
    .then( (res)=> res.json())
    .then ( (data)=> {
        data.forEach((bebidas)=>{
            const nuevoNodo = document.createElement('div');
            nuevoNodo.innerHTML = `
                <h3>Marca: ${bebidas.marca}</h3>
                    <p>Precio: $ ${bebidas.precio}</p>
                    <h5>ID producto: ${bebidas.id}</h5>
                    <p> Contiene: ${bebidas.contenido} ml</p>
                `
            seccionCajas1.append(nuevoNodo);
            datosJS.push(bebidas);
        })
    });



const gaseosasJS = [];

const seccionCajas2 = document.getElementById('section-gaseosas');



fetch('/data/gaseosas.json')
.then( (res)=> res.json())
.then ( (datos)=> {
    datos.forEach((bebidas)=>{
        const renderGaseosas = document.createElement('div');
        renderGaseosas.innerHTML = `
            <h3>Marca: ${bebidas.marca}</h3>
                <p>Precio: $ ${bebidas.precio}</p>
                <p> Contiene: ${bebidas.contenido} ml</p>
            `
        seccionCajas2.append(renderGaseosas);
        gaseosasJS.push(bebidas);
        console.log(bebidas);
    })
});

//PRUEBA 74
/* function List({ items }) {
    return (
      <ul>
        {items.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    )
  } */

/* for (const fernet of stockFernet){
    let container = document.createElement("div");
    container.innerHTML = `<h3 class="nuevoSubtitulo"> Marca: ${fernet.marca}</h3>
                            <p class= "nuevoP" >Precio: ${fernet.precio}</p>
                            <p class="otroP" >Contenido: ${fernet.contenido}</p>
    `
    document.body.appendChild(container);
} */

//iterando stockFernet para obtener cada producto y llevarlo al archivo .htm mediante el DOM
/* for (const cadaMarca of stockFernet) {
    let fern = document.createElement("div");
    fern.innerHTML += `<h2> Marca: ${cadaMarca.marca}</h2>
                    <p>Precio: ${cadaMarca.precio}</p>
                    <p>Contenido: ${cadaMarca.contenido}</p>
    `
document.body.appendChild(fern);
};
 */



/* const nuevaCaja = document.querySelectorAll('.caja');
nuevaCaja.forEach(e => {
    e.style.backgroundColor = 'white';
    e.textContent = `${stockFernet.precio} `
});
/*  
const datosIterados = [];

stockFernet.forEach(elementos =>{
    datosIterados.push(elementos.marca);
    datosIterados.push(elementos.precio);
    datosIterados.push(elementos.contenido);
});
console.log(datosIterados);
 */

/* nuevaCaja.forEach(divs => {
    divs.innerHTML = `<h2> Marca: ${datosIterados}</h2>
                        <p>Precio: ${stockFernet.precio}</p>
                        <p>Contenido: ${stockFernet.contenido}</p>
                        `
});
 */

const stockFernetLS = (clave, valor)=>{
    localStorage.setItem(clave, valor);
};

for (const fernet of stockFernet){
    stockFernetLS(fernet.marca, JSON.stringify(fernet));
};


/* 
btn.addEventListener('click', () => {
    Swal.fire({
    title: 'Error!',
    text: 'Error inesperado',
    icon: 'error',
    confirmButtonText: ' =( '
    })
}) 
 */

const messiCopa = document.getElementById('messi');

messiCopa.addEventListener('click', ()=>{
    Swal.fire({
        imageUrl: "https://enagenda.com.ar/uploads/noticias/5/2022/10/20221014123559_820301.jpg",
        imageHeight: 800,
        imageAlt: 'Messi nos trajo la tercera'
        });
})
