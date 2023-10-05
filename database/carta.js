export function cargarProductos() {
    const dataBase = {
        productos: [
            {
                id: 1,
                nombre: "Perro sencillo",
                precio: 10000
            },
            {
                id: 2,
                nombre: "Hamburguesa doble",
                precio: 22000
            },
            {
                id: 3,
                nombre: "Picada 3 personas",
                precio: 45000
            },
            {
                id: 4,
                nombre: "Gaseosa 3Lts",
                precio: 8000
            },
            {
                id: 5,
                nombre: "Picada personal",
                precio: 15000
            }
        ]
    }

    localStorage.setItem("database",JSON.stringify(dataBase))
}