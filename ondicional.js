const { pairs } = require("./arrays");

const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightball = () => {
    // TODO
    // crear numero aleatorio (0-8)
    // switch/case para mensajes distintos
    const phrase = Math.floor(Math.random() * 8);
    switch(phrase){
        case 0:
    message.innerText = "Trakas😝"
    break;
    case 1:
    message.innerText = "Me compras una maruchan?🥺"
    break;
    case 2:
    message.innerText = " me prestas $4 peso"
    break;
    case 3:
    message.innerText = "Acompañame por un elote"
    break;
    case 4:
    message.innerText = "Me das un pan"
    break;
    case 5:
    message.innerText = "TKM"
    break;
    case 6:
    message.innerText = "Me pasas el codigo?"
    break;
    case 7:
    message.innerText = "vamos una miche"
    break;
    }
}

ball.addEventListener('click', eightball);
for (items in pairs) {
    console.log(item);
}
