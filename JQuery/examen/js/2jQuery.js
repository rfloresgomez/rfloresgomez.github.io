/**
 * Created by btt_9 on 23/01/2017.
 */
let hoy;

let obtenerHora = function () {
    hoy  = new Date();
    let hora = "Son las "+hoy.getHours()+":"+hoy.getMinutes();
    if((hoy.getHours()>18 && hoy.getMinutes()>=0)&&(hoy.getHours()<0 && hoy.getMinutes()<=0))
        hora += ". Ya es hora de que dejes de trabajar. Hay que conciliar la vida laboral con la familiar";
    else if((hoy.getHours()>0 && hoy.getMinutes()>=0)&&(hoy.getHours()<8 && hoy.getMinutes()<=0))
        hora += ". Ya es hora de que comiences a trabajar. Hay que levantar el país.";
    else
        hora += ". Pronto llegan las vacaciones. Aguanta";
    return hora;
}

let diaDeHoy = function () {
    hoy  = new Date();
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    return dias[hoy.getDay()];
}


$(document).ready(function () {
    let h1 = $("<h1>ROBERTO CARLOS FLORES GÓMEZ</h1>");
    let informa = $("<input type='button' id='informa' value='Informa'>");
    let raton = $("<input type='button' id='raton' value='Ratón'>");
    let salir = $("<input type='button' id='salir' value='Salir'>");
    $(document.body).append(h1).append(informa).append(raton).append(salir);

    $("#informa").on("click", function (e) {
        e.preventDefault();
        let fecha = $("<p>"+diaDeHoy()+"</p>");
        let hora = $("<p>"+obtenerHora()+"</p>");
        $(document.body).append(fecha).append(hora);
    });

    $("#raton").on("click", function (e) {
        e.preventDefault();
        let texto = $("<p id='textoRaton'>x: "+e.clientX+" y: "+e.clientY+"</p>");
        $(document.body).append(texto);
        texto.delay(3000).fadeOut();
    });

    $("#salir").on("click", function (e) {
        e.preventDefault();
        close();
    })
});