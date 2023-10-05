import { itemPedido } from "./templates.js";

export function nuevoPedido(data) {;
    const tbody = document.getElementById('tbodyNP');   

    const trTodos = document.getElementById('tbodyNP').querySelectorAll('tr')
    const formulario = document.forms.formNuevoPedido.elements;

    trTodos.forEach(tr => {
        const pedido = {
            cantidad: tr.children[0].textContent,
            platillo: tr.children[1].textContent,
            precioUnd: tr.children[2].textContent,
        }
        console.log(pedido)
        console.log(new Intl.NumberFormat("de-DE").format(parseInt(tr.children[2].textContent)));
    })

    for(let x=0; x<formulario.length;x++) {
        if(formulario[x].tagName !== 'button') {

        }
        console.log()
    }
    console.log(tbody);
    console.log(formulario);

    
}