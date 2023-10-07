const bdPedidos = JSON.parse(localStorage.getItem('pedidos'));

export function nuevoPedido(data) {
    console.log(data)
    if(bdPedidos) {
        console.log('==>> ',bdPedidos)
        const result = bdPedidos.push(data)
        console.log(result)
        localStorage.setItem('pedidos',JSON.stringify(result));
        console.log(JSON.parse(localStorage.getItem('pedidos')))
    }
    else {
        return
    }
}