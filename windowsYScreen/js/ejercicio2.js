/**
 * Created by btt_9 on 14/11/2016.
 */
{

    let init = function () {

        let mostrarScroll = function () {
            contenedor.innerHTML = "ScrollX: " + window.scrollX +
                "<br/>ScrollY: " + window.scrollY;
        }

        let contenedor = document.getElementById("contenedor");
        window.scrollbars.visibility = true;
        window.addEventListener("scroll", mostrarScroll);
    }

    window.onload = init;
}
