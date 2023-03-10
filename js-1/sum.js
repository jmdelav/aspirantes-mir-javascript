// escribe la función suma acá
function sum(number) {
    let rst=0
    for (let i = 0; i <= number; i++) {
        rst += i
    }
    return rst
}


// código de prueba
console.log(sum(4))
console.log(sum(10))
console.log(sum(15))