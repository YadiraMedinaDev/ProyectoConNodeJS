//Importar moment
var moment = require("moment");

let ahora = moment().format();
console.log("ahora: ", ahora);

let febrero=moment("2020-02-29").isValid()
console.log("febrero",febrero);

//let hoy=moment().format('YYYY');
let hoy=moment().format('dddd');
console.log("hoy",hoy);



// Taller
// 1. Mostrar fecha mes(nombre del mes) día año
// 2. Mostrar qué día fue (Lunes, Martes...)
// 3. Diga hace cuánto tiempo nací
// 4. Qué fecha será en 258 días (día-mes-año)
// 5. Qué fecha será en 4 semanas (día-mes-año)

console.log("**************** EJERCICIO 1 ******************");

moment.locale('es');//Idioma Español

let fechaNacimiento="1995-08-11";

let unoFecha=moment(fechaNacimiento).format('LL');
console.log("Fecha de nacimiento",unoFecha);

let dosDia=moment(fechaNacimiento).format('dddd');  
console.log("Fue el día",dosDia);

let tresTiempo=moment(fechaNacimiento, "YYYYMMDD").fromNow(); 
console.log("Nací hace",tresTiempo);

let cuatroFecha=moment().add(258, 'days').format("DD-MM-YYYY");
console.log("En 258 días será",cuatroFecha);

let cincoFecha=moment().add(4, 'weeks').format("DD-MM-YYYY");
console.log("En 4 semanas será",cincoFecha);




