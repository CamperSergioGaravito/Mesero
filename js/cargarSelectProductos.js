import { templateOptionproductos } from "./templates.js";

export function cargarProductos(contenedor) {
    const productos = JSON.parse(localStorage.getItem('database')).productos;

    productos.forEach(prod => {
        let templateOpcProd = templateOptionproductos(prod.nombre)
        contenedor.insertAdjacentHTML('beforeend',templateOpcProd)
    })
}