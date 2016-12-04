/**
 * Created by btt_9 on 02/12/2016.
 */
{
    let caja1;
    let caja2;
    let colores = ["black", "blue", "green", "yellow", "red", "grey"];

    let cambiarColor = function () {
        this.style.background = colores[parseInt(Math.random()*5)];
    }

    let init = function () {
        caja1 = document.getElementById("caja1");
        caja2 = document.getElementById("caja2");

        caja1.addEventListener("keydown", cambiarColor.bind(caja1));
        caja2.addEventListener("keyup", cambiarColor.bind(caja2));
    }

    window.onload = init;
}