import { buscarProducto } from "./buscarProducto.js";

export function agregarItemProd(e) {
    const platillo = document.getElementById('selectPlatillos');
    const cantidad = document.getElementById('cantItem');
    console.log(platillo.value,' /// ', cantidad.value);
    platillo.style = 'border: #dee2e6 1px solid;';
    cantidad.style = 'border: #dee2e6 1px solid;';

    if(platillo.value === 'Platillo') {
        platillo.style = 'border: 1px red solid;';
        return;
    }
    else  if(cantidad.value === '') {
        cantidad.style = 'border: 1px red solid;';
        return;
    }
    else {
        const item = {
            nombre: platillo.value,
            cantidad: cantidad.value
        }

        const result = buscarProducto(item);
        
        console.log(result)
        return result;
    }
}