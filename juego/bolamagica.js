// apuntar al div
const ball = document.querySelector('div');
const message = document.querySelector('h1');

const eightBall = () => {
    // TODO
    // crear número aleatorio (0 - 7)
    // switch / case para mensajes distintos
    const num = Math.floor(Math.random() * 8);
    switch(num){
        case 0:
            message.innerText = "no se tu"
            break;
        case 1:
            message.innerText = "apoco sy"
            break;
        case 2:
            message.innerText = "nel"
            break;
        case 3:
            message.innerText = "soltar amige"
            break;
        case 4:
            message.innerText = "more?"
            break;
        case 5:
            message.innerText = "dile que si"
            break;
        case 6:
            message.innerText = "dile que no"
            break;
        default:
            console.log("No válido");
    }
}

ball.addEventListener('click', eightBall);