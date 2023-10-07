export function templateBoton(x) {
    const templateBtn = //html
                            `
                            <button class="btn col-6 col-sm-2 shadow position-relative d-flex  align-items-center justify-content-center">
                                <h2 class="position-absolute fs-1 ">${x}</h2>
                                <img src="./img/mesa.png" alt="mesa" class="img-fluid rounded-3">
                            </button>
                            `
    
    return templateBtn;
}

export function modal(data) {
    const templateModal = //html
                        `
                        <div class="row container-fluid position-absolute  h-100 align-items-center justify-content-center contModal" id="tomarPedido">
                            <form action="" method="post" class="col-12 col-sm-10 col-md-10 col-lg-6 bg-body h-75 shadow-lg p-2 d-flex flex-column align-content-center gap-3" id="formNuevoPedido">
                                <h2 class="text-center fs-1 p-1">Tomar pedido</h2>
                                <div class="row col-12 d-flex align-items-center justify-content-evenly m-0">
                                    <div class="row col-3 border d-flex align-items-center border-1 border-secondary-subtle rounded-3 p-1 ">
                                        <h4 class="col-4 text-center m-0">Mesa:</h4>
                                        <input type="text" class="col-8 text-center m-0" name="numMesa" value="${data.mesa}" disabled>
                                    </div>
                                    <div class="row col-6 border border-1 border-secondary-subtle rounded-3 p-1 ">
                                        <input type="text" class="col-12 text-center m-0" name="mesero" value="${data.mesero}" disabled>
                                    </div>
                                </div>
                                <div class="row col-12 d-flex align-items-center justify-content-evenly m-0">
                                    <select class="form-select form-select-lg m-1 w-50" aria-label="Large select example" id="selectPlatillos">
                                        <option selected>Platillo</option>
                                        /* Opciones cargadas desde localStorage */
                                    </select>
                                    <div class="input-group w-25 ">
                                        <button type="button" class="input-group-text btn btn-danger" id="btnDisminuirItem">-</button>
                                        <input type="text" class="form-control text-center " placeholder="Cant" aria-describedby="basic-addon1" id="cantItem" value="">
                                        <button type="button" class="input-group-text btn btn-success" id="btnAumentaItem">+</button>
                                    </div>
                                    <button class="btn btn-primary col-2 h-100 " id="agregarProducto">Agregar</button>
                                </div>
                                <div class="container-fluid w-100 h-50 border border-black overflow-y-scroll">
                                    <table class="table table-striped-columns text-center h-50">
                                        <thead>
                                            <tr>
                                                <th scope="col">Cant</th>
                                                <th scope="col">Platillo</th>
                                                <th scope="col">Precio Unid</th>
                                            </tr>
                                        </thead>
                                        <tbody id="tbodyNP">
                                            
                                        </tbody>
                                    </table>
                                </div>
                                <div class="container-fluid d-flex align-items-center justify-content-end text-center">
                                    <table class="table table-striped w-50">
                                        <thead>
                                            <tr>
                                                <th scope="col">Total</th>
                                                <th scope="col">$<span id="total"></span></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div class="row btnSubmit align-items-center justify-content-evenly">
                                    <input type="submit" class="btn btn-success col-5 h-75 fs-3" id="btnSubmitPedido">
                                    <button type="button" class="btn btn-danger col-5 h-75 fs-3" id="btnCancelarPedido">Cancelar</button>
                                </div>
                            </form>
                        </div>
                        <!-- *************** -->
                        `
        
    return templateModal
}

export function templateOptionproductos(producto) {
    const template = //html
                `
                <option value="${producto}">${producto}</option>
                `
    return template
}

export function itemPedido(cantidad,platillo,precio) {
    const template = //html
                `
                <tr>
                    <td scope="row">${cantidad}</td>
                    <td>${platillo}</td>
                    <td>${precio}</td>
                </tr>
                `
    return template
}

export function templatePedidoRealizado(data) {
    data.estado('Pedido realizado');
    console.log(data.estado);
    console.log(data);

    const template = //html
                    `
                    <div class="card col-10 text-center cardPedidoCocina">
                        <div class="card-head fs-3">
                            ${data.text}
                        </div>
                        <div class="card-body bg-success" id="card">
                            <div class="card-title fs-2 text-white fw-bold">Mesa ${data.mesa}</div>
                            
                            
                            </div>
                        <div class="card-footer fs-5">Tiempo transcurrido 05:15:25 / 00:25:00</div>
                    </div>
                    `
    
    return template
}

export function platosPedidoRealizado(data) {
    const tempItem = data.comanda;
    const template = //html
                    `
                    <div class="input-group mb-3">
                        <label aria-label="text input with checkbox" class="form-control">${data.nombre}</label>
                        <div class="input-group-text bg-info">
                            <input type="checkbox" class="form-check-input mt-0" name="" id="" value="" aria-label="checkboxfor following text input" >
                        </div>
                    </div>
                    `

    return 
}