function promessa () {
    return new Promise(
        (resolve, rejeita) => {
            let a = 2
            let b = 3
            resolve(a*b)
            console.log ("Valor da promessa: ", a*b)
        }
    )
}
const soma =  async function () {
    const valor = await promessa()

    return valor + 2
}
const soma2 = async function(){
    const valor2 = await soma()
    console.log("Resultado da promessa + 3:", (valor2 + 3))
    return valor2 + 3
}
const soma3 = async function(){
    const valor3 = await soma2()
    console.log("Resultado da promessa + 4:", (valor3 + 4))
    return valor3 + 4
}

soma3().then(
    res => {
        console.log("RES ASYNC/AWAIT: ", res)}
).catch(
    erro => {
        console.log("ERRO ASYNC/AWAIT: ",erro)
    }
)