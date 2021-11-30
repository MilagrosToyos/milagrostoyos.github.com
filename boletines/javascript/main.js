/*
//DOM
//Usando querySelector
let container = document.querySelector('.container');

console.log(container);

//Usando querySelectorAll
let links = document.querySelectorAll('a');

//para recorrer cada uno de los eltos de array de links
links.forEach(function(link){
    console.log(link);//e imprimirlos 1 por 1
});
*/

/*
//otro ejemplo
let celdas = document.querySelectorAll("td");
//td es un nodo
celdas.forEach(function(td){
    //tiene todos los nodos que obtenemos usando JS
    td.addEventListener('click',function(){
        console.log("Click");//mostramos"Click" por cada vez que hacemos click sobre alguna celda
    });
});
*/

/* Bloqueamos comportamiento por defecto de hacer Click sobre la X*/
let links=document.querySelectorAll(".close");
links.forEach(function(link){
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //vamos a quitar las animaciones
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__bounce");

        //vamos a agregar las animaciones
        content.classList.add("animate__fadeOutUp");//esto hace que al apretar X desaparezca el elto para arriba
        content.classList.add("animate__bounce");

        //como al haer click en X nos quedamos con el fondo(no vovlemos a la tabla principal)
        //vamos a utilizar la siguiente linea
        setTimeout(function(){
            location.href = "/boletines";//lo usamos para volver al directorio en donde está la tabla
        }, 600);//1000 = 1 segundo

        return false;        
    })
})
/*
//Vamos a jugar con los iconos
let iconos = document.querySelectorAll("i");

iconos.forEach(function(icono){
    //vamos a eliminar todas los iconos flechas
    icono.classList.remove("fa-arrow-right");
    //ponemos corazones 
    icono.classList.add("fa-heart");
})
*/
