{
    let hoy = new Date();
    console.log("Fecha actual creada con new Date(): " + hoy);

    //let cumpleaños = new Date("September 29, 1994 12:32:00");
    let cumpleanios = new Date("29 Septiembre, 1994 12:32:00");
    console.log('Cumpleaños creado con new Date("September 29, 1994 12:32:00"): ' + cumpleanios);

    let cumpleanios2 = new Date(1994, 8, 30);
    console.log('Fecha creadada con new Date(1994,8,29) y mostrado con toLocaleDateString("es-ES"): ' + cumpleanios2.toLocaleDateString("es-ES"));

    let cumpleanios3 = new Date(1995,11,17,3,24,0);
    console.log('Fecha creada con new Date(1995,11,17,3,24,0): '+cumpleanios3);
}
