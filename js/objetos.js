export class Pedido {
    constructor (mesa,mesero,comanda=[],total=0) {
        this.mesa = mesa,
        this.mesero = mesero,
        this.comanda = comanda,
        this.total = total
    }
    
    numComanda(ref) {
        this.ref = ref + 1;
    }

    estado(text) {
        this.text = text
    }
}