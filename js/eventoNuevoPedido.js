import { platosPedidoRealizado, templatePedidoRealizado } from "./templates.js";

export function nuevoPedido(data) {
    const bdPedidos = JSON.parse(localStorage.getItem('pedidos'));
    console.log(data)
    if(bdPedidos) {
        bdPedidos.push(data)
        localStorage.setItem('pedidos',JSON.stringify(bdPedidos));
        const contPedidosCocina = document.getElementById('contPedidosCocina');
        const template = templatePedidoRealizado(data);
        contPedidosCocina.insertAdjacentHTML('beforeend',template);

        const card = document.getElementById('card');
        const comm = data.comanda;
        console.log(comm);
        comm.forEach(plat => {
            card.insertAdjacentHTML('beforeend',platosPedidoRealizado(plat))
        })
    }
    else {
        return
    }
}