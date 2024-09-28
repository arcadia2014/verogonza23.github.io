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
            message.innerText = "hablale"
            break;
        case 1:
            message.innerText = "more?"
            break;
        case 2:
            message.innerText = "dile ño"
            break;
        case 3:
            message.innerText = "nel"
            break;
        case 4:
            message.innerText = "gpi"
            break;
        case 5:
            message.innerText = "tu puedes"
            break;
        case 6:
            message.innerText = "te amo"
            break;
        default:
            console.log("Nosta");
    }
}

ball.addEventListener('click', eightBall);