/**
 * Created by btt_9 on 10/01/2017.
 */
addEventListener('load',inicio,false);

function inicio()
{
    document.getElementById('rango').addEventListener('change',cambioTemperatura,false);
}

function cambioTemperatura()
{
    document.getElementById('precio').innerHTML=document.getElementById('rango').value;
}