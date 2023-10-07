import { templatePedidoRealizado } from "./templates.js";

export function nuevoPedido(data) {
    const bdPedidos = JSON.parse(localStorage.getItem('pedidos'));
    console.log(data)
    if(bdPedidos) {
        bdPedidos.push(data)
        localStorage.setItem('pedidos',JSON.stringify(bdPedidos));
        const contPedidosCocina = document.getElementById('contPedidosCocina');
        const template = templatePedidoRealizado(data);
        contPedidosCocina.insertAdjacentHTML('beforeend',template);
    }
    else {
        return
    }
}