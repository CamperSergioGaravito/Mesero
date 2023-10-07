export function btnsAddReduceItems() {
    const btnAumentaItem = document.getElementById('btnAumentaItem');
    const btnDisminuirItem = document.getElementById('btnDisminuirItem');
    let cantItem = document.getElementById('cantItem');

    btnAumentaItem.addEventListener('click', () => {
        cantItem.value = aumentar(cantItem.value)
    });
    btnDisminuirItem.addEventListener('click',() => {
        cantItem.value = disminuir(cantItem.value)
    });
    
}

function aumentar(cant) {
    if(cant == '') {
        cant = '0';
    }
    
    const res = parseInt(cant) + 1;
    return res
}

function disminuir(cant) {
    if(parseInt(cant) > 1) {
        const res = parseInt(cant) - 1;
        return res
    }
    else {
        return ''
    }
    
    
}