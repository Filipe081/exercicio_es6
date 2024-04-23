// rest
function somar() {

    let soma = 0;
// argument não é um array
    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
    // arguments
    // return a + b;
}
console.log(somar(10, 30))

function somarComrest (...numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComrest(10, 30))

// spread
const numeros = [1,2,3,4]
console.log(...numeros)

const timesDeFutebolDeSp = ['santos', 'corinthias', 'são paulo', 'bragantino'];
const timesDeFutebolDoRio = ['flu', 'botafogo', 'flamidia', 'pódearroz'];

// const timesDeFutebol = timesDeFutebolDeSp.concat(timesDeFutebolDoRio);
const timesDeFutebol = [...timesDeFutebolDeSp, ...timesDeFutebolDoRio];

// timeDeFutebolDeSp.concat(timeDeFutebolDeRio);
console.log(timesDeFutebol)

// desestruturação aplicando apelidos

const [item1, item2, item3, ...outrosTimes] = timesDeFutebol;
console.log(item1)
console.log(item2)
console.log(item3)
console.log(outrosTimes)