const numeros = [1, 2, 3, 4, 5, 6]

//contador que empieza desde 0 hasta el mayor

let contador = 0
let suma = 0

while (contador < numeros.length) {
    suma = suma + numeros[contador];
    contador++
}

console.log(suma)

//contador que empieza desde el mayor hasta 0

contador = numeros.length-1
suma = 0
while (contador >= 0) {
    console.log(numeros[contador])
    suma = suma + numeros[contador]
    contador--
}
console.log(suma)