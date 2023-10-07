export function buscarProducto(platillo) {
    const listProductos = JSON.parse(localStorage.getItem('database')).productos;
    console.log(platillo)
    console.log(listProductos)
    listProductos.forEach(p => {
        if(p.nombre === platillo.nombre) {
            platillo = {
                cantidad: platillo.cantidad,
                nombre: platillo.nombre,
                precio: p.precio,
                total: p.precio * parseInt(platillo.cantidad)
            }
            console.log(platillo)
        }
        else {

        }
    })
    console.log('Mierda!!')
    return platillo;
}