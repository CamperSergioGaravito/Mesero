const formTomarPedido = document.getElementById('tomarPedido');
const contMesas = document.querySelectorAll('button');

contMesas.forEach(mesa => {
    mesa.addEventListener('click', (e) => {
        console.log(formTomarPedido)
        console.log(e)
        formTomarPedido.style = 'display: flex;';
        const btnCancelarPedido = document.getElementById('btnCancelarPedido');
        btnCancelarPedido.addEventListener('click',() => {
            formTomarPedido.style = 'display: none;';
        })
    })
})