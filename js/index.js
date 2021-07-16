$(document).ready(function () {


    /* Funciones del HOME */
    const BASE = '../baseDatos.json';
    
    const btn1 = $('#btn1');
    const btn2 = $('#btn2');
    const btn3 = $('#btn3');
    const btn4 = $('#btn4');
    const btn5 = $('#btn5');

    $(btn1).click(() => {
        $.getJSON(BASE, function(respuesta, estado){
            if(estado === 'success'){
                let datosObtenidos = respuesta;
                $(btn1).hide()
                $('.contenido1').append(`
                <iframe class="col-2" width="100%" height="auto" src="${datosObtenidos.leccion1}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>             
                `)
                
            }
        })
    })

    $(btn2).click(() => {
        $.getJSON(BASE, function(respuesta, estado){
            if(estado === 'success'){
                let datosObtenidos = respuesta;
                $(btn2).hide();
                $('.humo').hide();
                $('.contenido2').append(`
                <iframe class="col-4" width="100%" height="auto" src="${datosObtenidos.leccion2}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>             
                `)
                
            }
        })
    })

    $(btn3).click(() => {
        $.getJSON(BASE, function(respuesta, estado){
            if(estado === 'success'){
                let datosObtenidos = respuesta;
                $(btn3).hide()
                $('.contenido3').append(`
                <iframe class="col-2" width="100%" height="auto" src="${datosObtenidos.leccion3}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                `)
                
            }
        })
    })

    $(btn4).click(() => {
        $.getJSON(BASE, function(respuesta, estado){
            if(estado === 'success'){
                let datosObtenidos = respuesta;
                $(btn4).hide()
                $('.contenido4').append(`
                <iframe class="col-2" width="100%" height="auto" src="${datosObtenidos.leccion4}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                `)
                
            }
        })
    })

    $(btn5).click(() => {
        $.getJSON(BASE, function(respuesta, estado){
            if(estado === 'success'){
                let datosObtenidos = respuesta;
                $(btn5).hide()
                $('.contenido5').append(`
                <iframe class="col-2" width="100%" height="auto" src="${datosObtenidos.leccion5}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
                `)
                
            }
        })
    })

    /* Funcion del Formulario del Footer con el metodo POST*/

    const URLGET = "https://jsonplaceholder.typicode.com/posts";
    let nameForm = "Profe";
    let emailForm = "Prueba@coder.online";
    const suscriptor = {
        nombre: nameForm,
        email: emailForm
    }

    $('#btn-form').click(()=>{
        $.post(URLGET, suscriptor, (data, status) =>{
            if(status === "success"){
                alert('Gracias por enviar el formulario');
                console.log(data);
            }
        })
    })


    
})