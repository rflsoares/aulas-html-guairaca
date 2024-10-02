// Declarações de variaveis
var time = "Palmeiras";
let idade = 25;
idade = "25 anos";
const cidade = "São Paulo";

// Primitivos
let saudacao = "Olá mundo";
let preco = 19.99;
let estaChovendo = false;

// Complexos
let teclado = {
    marca: 'Hp',
    peso: '1kg',
    cor: 'Branco',
    tipo: 'Mecanico'
}

teclado.marca = 'Dell';
console.log(teclado);

let cores = ["Vermelho", "Azul", "Laranja"];

// Concatenação entre strings
let nome = "Matheus";
let message = "Olá" + nome + " seja bem vindo";
console.log(message);

// Conversão de tipos
let numero = 100;
let numeroConvertido = String(numero);

let str = "123";
let strConvertido = Number(str);