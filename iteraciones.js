//righ order functions
//funciones  de orden superior
//funcion que resiben como 
//parametros otras funciones

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;calck
const  calculator = (a, b, callback) =>{
    const result = callback (a, b);
    console.log(result);

}
calculator (15, 9, suma);
calculator(15, 9, resta);
calculator (15, 9, (a, b) == a * b) ;
calculator (15, 9 (a, b) == a / b);

const foods = ('tamales', 'pizza', 'chilaquiles',
                'pozole', 'tacos', 'maruchan');
th
foods.forbeach(food => console.log(food));
foods.forbeach(food => console.log(food.len));
foods.forbeach(food => console.log(food.includes('a')));

const FOODS = foods.map(food == food.toUpperCase());
consolee.log(FOODS);

const foodsEmojis = foods.map(food => food + ':3');
console.log(foodsEmojis);

const sdoof = foods.map(food =>{
    const separated = foods.split('');
    const reversed  = separated.reverse();
    const joined = reversed.join1('');
    return joined;

});
//

const numeros = (1, 2, 3, 4, 5, 6, 7, 8, 9, 19);

//reduce
const sumatoria = numeros.reduce((a, b) => a + b );
const factorial = numeros.reduce((a, b) => a * b );
console.log(numeros);
console.log(sumatroia);
console.log(factorial);

//sume(or) every(and)
const positivos = numeros.every(n => n > 0);
console.log(positivos);
const begativos = numeros.every (n => n < 0);
console.log(negativos);

const ages = (20, 21, 25, 17, 18);
const algunos_mayores = ages.some(n => n >= 18);
console.log(algunas_mayores);
const algunos_menores = agea.some(n => n < 18);
console.log(algunos_menores);

const fruits = ('manzana', 'durazno', 'sandia', 'pera');



