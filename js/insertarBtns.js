import { agregarItemProd } from "./agregarItemsProd.js";
import { btnsAddReduceItems } from "./agregarRestarCantItem.js";
import { cargarProductos } from "./cargarSelectProductos.js";
import { nuevoPedido } from "./eventoNuevoPedido.js";
import { Pedido } from "./objetos.js";
import { itemPedido, modal, templateBoton } from "./templates.js";

export function insertarBtns(botonesMesas) {
    botonesMesas.forEach(mesa => {
        mesa.addEventListener('click', (e) => {
            console.log(e);
            console.log(JSON.parse(localStorage.getItem('pedidos')).length)
            const numMesa = mesa.querySelector('h2').textContent;
            const comanda = new Pedido(numMesa,'Juan Carlos')
            comanda.numComanda(JSON.parse(localStorage.getItem('pedidos')).length)

            console.log(comanda)
            console.log('mesa ',comanda.mesa);
            console.log('pedidos ===> ',comanda.num);

            document.getElementById('mainCont').insertAdjacentHTML('beforeend',modal(comanda));
            const formTomarPedido = document.getElementById('tomarPedido');
            const btnAgregarItem = document.getElementById('agregarProducto');
            const btnSubmit = document.getElementById('btnSubmitPedido');

            /* Cargar opciones de platillos */
            cargarProductos(document.getElementById('selectPlatillos'));
            /* Funcionalidad de botones aumentar/disminuir cantidad */
            btnsAddReduceItems()
            /* Botón agregar item a lista */
            btnAgregarItem.addEventListener('click',(e) => {
                e.preventDefault()
                const item = agregarItemProd(e);
                if(item) {
                    console.log(item)
                    comanda.comanda.push(item);
                    console.log(comanda)
                    const tbodyNP = document.getElementById('tbodyNP');
                    const total = document.getElementById('total');
                    comanda.total += item.total;
                    total.textContent = comanda.total;
                    const template = itemPedido(item.cantidad,item.nombre,item.precio);
                    tbodyNP.insertAdjacentHTML('beforeend',template);
                    return
                }
                else {
                    console.log(item)
                }
            })

            btnSubmit.addEventListener('click',(e) => {
                e.preventDefault();
                console.log('-.- ',comanda);
                nuevoPedido(comanda);
                formTomarPedido.remove();
            })

            formTomarPedido.style = 'display: flex;';

            const btnCancelarPedido = document.getElementById('btnCancelarPedido');
            btnCancelarPedido.addEventListener('click',() => {
                formTomarPedido.remove();
            })
        })
    })
}

export function cargarBtns(contenedor,cantidad) {
    for(let x=1;x<=cantidad;x++) {
        const template = templateBoton(x);
        contenedor.insertAdjacentHTML('beforeend',template);
    }

}