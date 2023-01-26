

let listItem = document.querySelectorAll('.list-item');
let image = document.querySelectorAll('.fruit');
let counter = document.querySelector('#count');
let mainContent = document.querySelector('.main-content');
let gameOverBlock = document.querySelector('.game-over-block');

let tryAgainStartButton = document.querySelector('#try-again');
let gameStartButton = document.querySelector('#start-btn');
let gameStartBlock = document.querySelector('.start-block');

let victoryBlock = document.querySelector('.victory-block');
let victoryBtn = document.querySelector('#victory-btn');


let arr = [ 'saturn.png', 'zemlya.png', 'mars.png'];

function getRndElem(arr) {
    let elem;
    for (let i = 0; i <= arr.length; i++) {
        elem = arr[Math.floor(Math.random() * arr.length)];
    }
    return elem;
}
function getRndImg (item) {
    let fruitsWrap = getRndElem(item);
    for (const el of image) {
        el.src = '';
        el.id = ''
    };
    let img = fruitsWrap.querySelector('.fruit');
    img.src =''
    img.src = `./img/${getRndElem(arr)}`;
    if ( img.src = `./img/${getRndElem(arr)}`) {
        img.id = 'test';
    }
    return img;
}

let count = 0;
let i = 0;
let intervalCount = 3000;


for (let item of listItem) {
    item.addEventListener('click', function () {
        let img = item.querySelector('.fruit');
        counter.innerHTML = count;
        if (item.firstElementChild.getAttribute('id') === `test`) {
            if (item.firstElementChild.getAttribute('src') !== `./img/zemlya.png`) {
                i += 1;
                if (i >= 3) {
                    clearInterval(interval);
                     gameOverBlock.style.display = 'flex';
                     mainContent.style.display = 'none';
                     i = 0;
                     if (i === 0) {
                        count = 0;
                        intervalCount = 3000;
                     }
                }
                count--;
                console.log('minus ' + count)
                img.src = '';
                if (count <= 0) {
                    count = 0
                }
                
            }else{
                count ++;
                img.src = '';
                if ( count >= 5) {
                    count = 0;
                    intervalCount = 3000;
                    mainContent.style.display = 'none';
                    victoryBlock.style.display = 'flex';
                }
                console.log('plus ' + count)
            }
        }
        
        counter.innerHTML = count;
    })
}
let timerId;
function interval() {
    
    timerId = setInterval(() => {
         getRndImg(listItem);
         if (count >= 3) {
             intervalCount /= 2;
             if (intervalCount <= 50) {
                 intervalCount = 50;
             }
             console.log(intervalCount)
         }
     }, intervalCount);
     return timerId;
}
tryAgainStartButton.addEventListener('click', function () {
    gameOverBlock.style.display = 'none';
    mainContent.style.display = 'block';
    clearInterval(interval);
});
gameStartButton.addEventListener('click', gameStart);
function gameStart () {
    gameStartBlock.style.display = 'none';
    mainContent.style.display = 'block';
    interval();
}

victoryBtn.addEventListener('click', function () {
    victoryBlock.style.display = 'none';
    mainContent.style.display = 'block';
    clearInterval(interval);
});

setInterval(() => clearInterval(interval), 60000);