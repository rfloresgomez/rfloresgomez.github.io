/**
 * Created by btt_9 on 02/12/2016.
 */
{
    let caja1;
    let caja2;
    let caja3;
    let caja4;
    let caja5;
    let caja6;
    let caja7;
    let caja8;
    let caja9;
    let colores = ["black", "blue", "green", "yellow", "red", "grey"];

    let cambiarColor = function () {
        this.style.background = colores[parseInt(Math.random()*5)];
    }

    let init = function () {
        caja1 = document.getElementById("caja1");
        caja2 = document.getElementById("caja2");
        caja3 = document.getElementById("caja3");
        caja4 = document.getElementById("caja4");
        caja5 = document.getElementById("caja5");
        caja6 = document.getElementById("caja6");
        caja7 = document.getElementById("caja7");
        caja8 = document.getElementById("caja8");
        caja9 = document.getElementById("caja9");

        caja1.addEventListener("click", cambiarColor.bind(caja1));
        caja2.addEventListener("dblclick", cambiarColor.bind(caja2));
        caja3.addEventListener("mousedown", cambiarColor.bind(caja3));
        caja4.addEventListener("mouseenter", cambiarColor.bind(caja4));
        caja5.addEventListener("mouseleave", cambiarColor.bind(caja5));
        caja6.addEventListener("mousemove", cambiarColor.bind(caja6));
        caja7.addEventListener("mouseout", cambiarColor.bind(caja7));
        caja8.addEventListener("mouseover", cambiarColor.bind(caja8));
        caja9.addEventListener("mouseup", cambiarColor.bind(caja9));
    }

    window.onload = init;
}