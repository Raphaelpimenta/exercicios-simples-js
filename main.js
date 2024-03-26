//1- Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.

console.log("Hello World!")


//2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let num1 = 5;
let num2 = 5

console.log(num1 + num2)


//3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".

//Para saber o tipo de dado você pode usar o operador `typeof`
const ehNumber = (num) => {
    return typeof num === "number" ? "É um número" : "Não é um número"
}

console.log(ehNumber(4))
console.log(ehNumber("45"))

//4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".

const ehString = (str) => {
    return typeof str === "string" ? "É uma string" : "Não é uma string"
}

console.log(ehString("oi"))
console.log(ehString({}))

//5 - Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".

const ehBoleano = (boleano) => {
    return typeof boleano === "boolean" ? "É uma booleano" : "Não é uma booleano"
}

console.log(ehBoleano(true))
console.log(ehBoleano({}))

//6 - Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.

const Subtrai = (sub1, sub2) => {
    return (sub1 - sub2)
}

console.log(Subtrai(5, 2))

//7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.

const Multiplica = (multi1, multi2) => {
    return (multi1 * multi2)
}

console.log(Multiplica(5, 2));

//8 - Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas

const Divide = (divide1, divide2) => {
    return (divide1 / divide2)
}

console.log(Divide(8, 2));

//9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".

const ehPar = (num) => {
    return (num % 2 === 0) ? "É um número par" : "Não é um número par"
}

console.log(ehPar(6))
console.log(ehPar(3))

//10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".

const ehImpar = (num) => {
    return (num % 2 === 1) ? "É um número ímpar" : "Não é um número ímpar"
}

console.log(ehImpar(6))
console.log(ehImpar(3))