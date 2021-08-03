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

    /* Personajes de Dragon Ball - Saga Freezer */ 

    const figurasf = $('.dbzsf-imagen-figurasf');
    let fotossf = $('.dbzsf-imagen-figurasf_personajesf')

    $('.character-dbzsf').click((e) => {
        $(fotossf).remove();
        let seleccionadosf = e.target.id;
        let seleccionadosfValue = e.target.value;
        $(figurasf).append(`
        <img class="dbzsf-imagen-figurasf_personajesf animate__animated animate__fadeIn" src="../assets/personajes/dbz/sf/${seleccionadosf}.png" alt="${seleccionadosfValue}"></img>
        `)
        fotossf = $(".dbzsf-imagen-figurasf_personajesf")
    })

    /* Personajes de Dragon Ball - Saga Cell */ 

    const figurasc = $('.dbzsc-imagen-figurasc');
    let fotossc = $('.dbzsc-imagen-figurasc_personajesc')

    $('.character-dbzsc').click((e) => {
        $(fotossc).remove();
        let seleccionadosc = e.target.id;
        let seleccionadoscValue = e.target.value;
        $(figurasc).append(`
        <img class="dbzsc-imagen-figurasc_personajesc animate__animated animate__fadeIn" src="../assets/personajes/dbz/sc/${seleccionadosc}.png" alt="${seleccionadoscValue}"></img>
        `)
        fotossc = $(".dbzsc-imagen-figurasc_personajesc")
    })

    /* Personajes de Dragon Ball - Saga Buu */ 

    const figurasb = $('.dbzsb-imagen-figurasb');
    let fotossb = $('.dbzsb-imagen-figurasb_personajesb')

    $('.character-dbzsb').click((e) => {
        $(fotossb).remove();
        let seleccionadosb = e.target.id;
        let seleccionadosbValue = e.target.value;
        $(figurasb).append(`
        <img class="dbzsb-imagen-figurasb_personajesb animate__animated animate__fadeIn" src="../assets/personajes/dbz/sb/${seleccionadosb}.png" alt="${seleccionadosbValue}"></img>
        `)
        fotossb = $(".dbzsb-imagen-figurasb_personajesb")
    })


})