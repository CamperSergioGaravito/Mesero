export function tamañoPantalla() {
    const tamaño = window.screen.width
    /* alert(typeof(tamaño)) */
    if(tamaño < 1000) {
        document.getElementById('contPedidosCocina').hidden = true;
        document.getElementById('contCuenta').hidden = true;
        document.getElementById('mainCont').style = 'padding:0;gap:0; background-color:red;display:flex; justify-content: center';
        document.getElementById('contCuentMesas').style = 'width: 100%;heigth: 100vh;flex-direction: row;justify-content: center;'
        console.log();
    }
    else {
        document.getElementById('contPedidosCocina').hidden = false;
        document.getElementById('contCuenta').hidden = false;
        document.getElementById('contCuentMesas').style = 'width: 75%;heigth: 100%;flex-direction: row;justify-content: center;'
    }
}