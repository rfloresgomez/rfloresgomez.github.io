/**
 * Created by ROBERTO on 15/12/2016.
 */
{
    let enlace;
    let boton;
    let nuevaVentana
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

    let crearInforme = function () {
        nuevaVentana.document.write("<p>"+diaDeHoy()+"</p>");
        nuevaVentana.document.write("<p>"+obtenerHora()+"</p>");
    }

    let limpiarRaton = function () {
        this.innerHTML = "";
    }

    let mostrarEventoRaton = function (elEvento) {
        nuevaVentana.document.write("<p id='raton'>X: "+elEvento.clientX+"<br/>Y: "+elEvento.clientY+"</p>");
        let raton = nuevaVentana.document.getElementById('raton');
        setTimeout(limpiarRaton.bind(raton), 2000);
    }

    let cerrarVentana = function () {
        nuevaVentana.window.close();
    }

    let crearNuevaVentana = function (e) {
        e.preventDefault();
        nuevaVentana = window.open('', '', 'width=600, height=600');
        nuevaVentana.document.write("<h1>Roberto Carlos Flores Gómez</h1>");
        nuevaVentana.document.write("<input type='button' id='informa' value='Informa'>");
        nuevaVentana.document.write("<input type='button' id='raton' value='Ratón'>");
        nuevaVentana.document.write("<input type='button' id='salir' value='Salir'>");
        let informa = nuevaVentana.document.getElementById('informa');
        let raton = nuevaVentana.document.getElementById('raton');
        let salir = nuevaVentana.document.getElementById('salir');
        informa.addEventListener("click", crearInforme);
        raton.addEventListener("click", mostrarEventoRaton);
        salir.addEventListener("click", cerrarVentana);
    }

    let abrirFormulario = function () {
        window.open('formulario.html');
    }

    let init = function () {
        enlace = document.getElementById('enlace');
        boton = document.getElementById('boton');

        enlace.addEventListener('click', crearNuevaVentana);
        boton.addEventListener('click', abrirFormulario)
    }

    window.onload = init;
}