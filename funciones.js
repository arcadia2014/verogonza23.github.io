//sin parametros y sin retorno
function sayhello(){
    console.log("hello");
}
sayhello();

//con parametros y con retorno
function soyhelloto(name){
    console.log("hello" + name);
}
soyhelloto("juan");

//con parametros y returno
function sum(num1, num2){
    return num1 + num2;

}
const result = sum (5, 7);
console.log(result);

//con parametros opcionales
function multi(num1, num2 = 1){
    return num1 * num2;
}
console.log(multi(5));
console.log(multi(5, 3));

//funciones anonimas(funciones quenno tienen nombre)
setTimeout(function(){
    console.log("hola mundo");
}, 1000);

const duplicate = function (num) {
    return num + 2;
}
console.log(duplicate(2));

//arrow functions
const sayhello2 = () => console.log("hello");
sayhello2();

const sayhelloto = name => console.log("hello" + name);
sayhelloto("peter");

const sum2 = (num1, num2) => num1 + num2;
const result2 = sum2 (5,7);
setTimeout(() => console.log("hola mundo"), 1000);