const promessa = new Promise(
    (resolve, rejeita) => {
        let a = 2
        let b = 3
        resolve(a * b)
    }
)

promessa.then(
    resultado => {
        console.log("O resultado da promessa é: "+ resultado)
        return resultado
    }
).then(
    resultado => {
        console.log("O resultado da promessa *2 é: "+ resultado*2)
        return resultado
    }
).then(
    resultado => {
        console.log("O resultado da promessa *3 é: "+ resultado*3)
    }
)
.catch(
    erro => {
        console.log("Erro ao executar a promessa. Descrição do erro:"+ erro)
    }
)