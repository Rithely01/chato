// for (let i =0; i <= 5; i++) {
//     console.log('número $(i)');
// }

// console.log ('fim do loop');
//     const marcasDecarros = ['Honda','BYD', 'Toyta','Jeep'];
//     const itensDoArray = marcasDecarros.length;
//     cont frase = "Rodrigo Madeira";
//     console.log(itensDoArray);
//     console.log(frase.length);
//     for (let i = 0; i < marcasDecarros.)

//    ;console.log ('fim do loop');
//     const marcasDecarros = ['Honda,'BYD', 'Toyta','Jeep'];
//     const itensDoArray = marcasDecarros.length;
//     cont frase = "Rodrigo Madeira";
//     console.log(itensDoArray);
//     console.log(frase.length);
//     for (let i = 0; i < marcasDecarros. )
// const tenis = [
//     {
//     marca: "Nike",
//     modelo: "Air Max",
//     cor:"preto",
//     tamanho:[42, 43, 44],
//     preço: 499.99,
//     estoque: 10,
// },
// {  marca: "Adids",
//     modelo: "Utrapassado",
//     cor:"vermelho",
//     tamanho:[37, 38, 39],
//     preço: 599.99,
//     estoque: 5,
    
// },
// {  marca: "Puma",
//     modelo: "RS-X",
//     cor:"azul",
//     tamanho:[38, 39, 40],
//     preço: 399.99,
//     estoque: 8,
    
// },
// {  marca: "Reebok",
//     modelo: "Classic",
//     cor:"cinza",
//     tamanho:[39, 40, 41],
//     preço: 299.99,
//     estoque: 12,
    
// },
// ]

// for(let i = 0; i < tenis.length ; i++){
//     tenis {i}.estoque = tenis
// }


const letras = ['1','2','3','4','5','6','7']; 
const letras = ['A','B','C','D','E','F']; 
letras.splice(2,2, 'J','S');
console.log(letras);

const novasLetras = letras.slice(2, 5);
console.log(novasLetras);
console.log(letras);

const novosNumeros = listaNumeros.map((item) => {
    if (item % 2 === 0) {
        return item * 2;
    }
    return item;
});

console.log(novosNumeros);
console.log(listaNumeros);

const maioresQueCinco = novosNumeros.filter((item) => {
    return item > 5;
})
console.log(maioresQueCinco);

novosNumeros.forEach((item) => {
    console.log(item);
});

const listaDeNumeros = [10, 20, 30, 40, 50, 60, 70];
const encontrado = listaDeNumeros.find ((item) => {
    return item > 35;
});
console.log(encontrado);

const temNegativo = listaDeNumeros.some((item) => {
    return item >= 70;
});
console,log(temNegativo);

const nomes = ['Myrela', 'Muceguinha', 'Samuel', 'Baritual'];
nome.pop ()