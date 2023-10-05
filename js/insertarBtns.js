import { cargarProductos } from "./cargarSelectProductos.js";
import { nuevoPedido } from "./eventoNuevoPedido.js";
import { Pedido } from "./objetos.js";
import { modal, templateBoton } from "./templates.js";

export function insertarBtns(botonesMesas) {
    botonesMesas.forEach(mesa => {
        mesa.addEventListener('click', (e) => {
            console.log(e);
            const numMesa = mesa.querySelector('h2').textContent;
            const comanda = new Pedido(numMesa,'Juan Carlos')

            console.log(comanda)
            console.log('mesa ',comanda.mesa);

            document.getElementById('mainCont').insertAdjacentHTML('beforeend',modal(comanda));
            const formTomarPedido = document.getElementById('tomarPedido');
            const btnSubmit = document.getElementById('btnSubmitPedido');
            
            cargarProductos(document.getElementById('selectPlatillos'))

            btnSubmit.addEventListener('click',(e) => {
                e.preventDefault();
                nuevoPedido(comanda);
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