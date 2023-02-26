let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    timeOut = document.querySelector('.time'),
    box = document.querySelector('.game__block'),
    score = 0,
    time = 0,
    interval = 0;

btn.addEventListener('click', (event) => {
    event.preventDefault()
    if(input.value > 4) {
        time = input.value
        input.value = ''
        score = 0
        clearInterval(interval)
        start()
        let result = document.querySelector('.result')
        if(result) {
            result.style.display = 'none'
        }
    }
})
box.addEventListener('click', (event) => {
    if(event.target.classList.contains('ball')) {
        score++
        event.target.remove()
        createball()
    }
})



function start() {
    interval =  setInterval(() => decrease(),1000)
    createball()
}

function decrease() {
   if(time == 0) {
        endGame()
   }else {
        let currentTime = --time
        if(currentTime < 10) {
            currentTime = '0' + currentTime
        }
        timeOut.innerHTML = '00:' + currentTime
   }
}

function endGame() {
    box.innerHTML = `<h2 class="result">Вы набрали: ${score} очков</h2>`
}

function createball() {
    let ball = document.createElement('div')
    let size = 40
    let coor = box.getBoundingClientRect()
    let x = random(0, coor.width - size)
    let y = random(0, coor.height - size)
    
    ball.classList.add('ball')
    ball.style.width = size + 'px'
    ball.style.height = size + 'px'
    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.background = 'random'
    ball.style.borderRadius = random(0, 50, 100) + '%'
    
    box.append(ball)
}

function random(min,max) {
    return Math.floor(Math.random() * (max + 1 - min ) + min)
}

