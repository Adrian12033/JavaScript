// SWITCH

const metodoPago = "tarjeta";

switch (metodoPago) {
  case "tarjeta":
    console.log("Pagaste con tarjeta ");
    break; //esto para de ejecutar el código

  case "bitcoin":
    console.log("El usuario ha pagado con tarjeta");
    break; //esto para de ejecutar el código

  case "efectivo":
    console.log("Ha pagado con efectivo");
    break; //esto para de ejecutar el código

  default: //esto se ejecutara cuando ningun case cumpla con la condicion
    console.log("Aún no has pagado");
    break;
}
