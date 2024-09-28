//coleccion de objetos
// [1, 2, 3, 4]
const numbers = [1, 2, 3, 4];

console.log(numbers);
console.log(numbers [2]);
console.log(numbers [3]);
numbers[4] = "four";
numbers[0] = 10;
console.log(numbers);

//colas arrays
const queue = [];
console.log(queue);
//insertar al final push
queue.push(1);
console.log(queue);
queue.push(2)
console.log(queue);
queue.push(3)
// extraer al inicio
console.log(queue.shift());
console.log(queue);
console.log(queue.shift());
console.log(queue);
//pila arrays en JS
const atack =  [];
//insertamos al final
atack.push(1);
console.log(atack);
atack.push(2);
console.log(atack);
atack.push(3);
console.log(atack);
atack.push(4);
console.log(atack);
//extraer del final
console.log(atack.pop());
console.log(atack.pop());
console.log(atack.pop());
//iterar elementos de un array
export const pairs = [1, 4, 6, 8, 10];
for (let i = 0; i < pairs.length; i++){
    console.log(pairs[i]);
}
function wrapping(gifts) {
    const envueltos = [];
    for (gift of gifts){
      //envolver regalos
    envueltos.push()
    }
    return envueltos;
    }