/**
 * Created by btt_9 on 07/11/2016.
 */
{
    let width = 300;
    let heigth = 200;
    let repeticiones=10;
    var nuevaVentana = [];
    let top=-20;
    let left=-20;

    let abrirNuevaVentana = function () {
        for(let i=0; i<repeticiones; i++) {
            nuevaVentana[i] = window.open("", "segundaPag"+i,
                "top="+(top+=20)+", left="+(left+=20)+", width=" + width + ",height=" + heigth);
            nuevaVentana[i].document.open();
            nuevaVentana[i].document.write("<html>" +
                "<head>" +
                "<title>Ventana "+i+"</title>" +
                "</head>" +
                "<body>" +
                "<p>Ventana: "+i+"</p>" +
                "<p><input type='button' value='Cerrar' onclick='window.close()'></p>" +
                "</body>" +
                "</html>");
        }
    }
    let cerrarVentanas = function(){
        if(nuevaVentana.length === 0)
            console.log("No hay ventanas abiertas.")
        else{
            for(let i=0; i<repeticiones; i++) {
                nuevaVentana.pop().close();
            }
        }
    }

    let init = function () {
        let abrir = document.getElementById('abrir');
        abrir.addEventListener("click", abrirNuevaVentana);
        let cerrar = document.getElementById('cerrar');
        cerrar.addEventListener("click", cerrarVentanas);
    }

    window.onload = init;
}
