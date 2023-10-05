export class Pedido {
    constructor (mesa,mesero,comanda=[],total=0) {
        this.mesa = mesa,
        this.mesero = mesero,
        this.comanda = comanda,
        this.total = total
    }
}