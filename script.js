

let mainOption = Number(prompt("Seleccione una opcion para iniciar: \n1. Realizar pedido \n2. Salir"))
while (mainOption != 1 && mainOption != 2) {
    
    alert("Ingrese una opcion valida")
    mainOption = Number(prompt("Seleccione una opcion para iniciar: \n1. Realizar pedido \n2. Salir"))

}
if (mainOption === 1) {

    let amount = prompt("Ingrese la cantidad de articulos que desea comprar")
    let storage = 0
    for (let i = 0; i < amount; i++) {

        if (i == amount - 1) {
            let product = Number(prompt("Ingrese el valor del articulo " +(i+1)))
            let total = storage + product
            storage = total
            alert("El total de su compra es " + total)
        }
        else {
            let product = Number(prompt("Ingrese el valor del articulo " + (i+1)))
            let total = storage + product
            storage = total
        }
    }
    alert("El total de su compra es " + total)
}

