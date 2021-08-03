$(document).ready(function () {   

    /* Personaje de Dragon Ball */
    const figura = $('.db-imagen-figura')
    let foto = $(".db-imagen-figura_personaje")

    $('.character-db').click((e) => {
        $(foto).remove();
        let seleccionado = e.target.id;
        let seleccionadoValue = e.target.value;
        $(figura).append(`
        <img class="db-imagen-figura_personaje animate__animated animate__fadeIn" src="../assets/personajes/db/${seleccionado}.png" alt="${seleccionadoValue}"></img>
        `)
        foto = $(".db-imagen-figura_personaje")
    })

    /* Personaje de Dragon Ball - Saga Saiyajin */

    const figurass = $('.dbzss-imagen-figurass');
    let fotosss = $('.dbzss-imagen-figurass_personajess')

    $('.character-dbzss').click((e) => {
        $(fotosss).remove();
        let seleccionadoss = e.target.id;
        let seleccionadossValue = e.target.value;
        $(figurass).append(`
        <img class="dbzss-imagen-figurass_personajess animate__animated animate__fadeIn" src="../assets/personajes/dbz/ss/${seleccionadoss}.png" alt="${seleccionadossValue}"></img>
        `)
        fotosss = $(".dbzss-imagen-figurass_personajess")
    })

})