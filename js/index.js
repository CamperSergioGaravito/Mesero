import { cargarProductos } from "../database/carta.js";
import { cargarBtns, insertarBtns } from "./insertarBtns.js";
import { tamañoPantalla } from "./tamañoPantalla.js";

/* Tmaño de pantalla */
tamañoPantalla();

/* Cargar Productos */
/* localStorage.clear() */
cargarProductos();
console.log(JSON.parse(localStorage.getItem('database')).productos)

const contBotones = document.getElementById('contMesas');
const cantBotones = 12;

/* Cargar botones */
cargarBtns(contBotones,cantBotones);
/* Capturar e insertar Botones */
const botonesMesas = contBotones.querySelectorAll('button');
insertarBtns(botonesMesas);

