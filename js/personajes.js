$(document).ready(function () {    
    const figura = $('.db-imagen-figura')
    let foto = $(".db-imagen-figura_personaje")

    $('.character-db').click((e) => {
        $(foto).remove();
        let seleccionado = e.target.id;
        $(figura).append(`
        <img class="db-imagen-figura_personaje animate__animated animate__fadeIn" src="../assets/personajes/db/${seleccionado}.png" alt="goku"></img>
        `)
        foto = $(".db-imagen-figura_personaje")
    })

})