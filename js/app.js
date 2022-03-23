// Make class 'Birds' as BUTTONS and have them appear 
//and disappear from screen

//Play button to start the game. Reset the score and restart timer.

//global variables
const score = document.querySelector('#point');
const winningScore = 10;
const birds = document.querySelector('#clickable');
const clickBirds = Array.from(document.querySelectorAll('.bird'))
const playBtn = document.querySelector('#play');
const bottomEls = document.querySelector('#timer');
const bottomEltwo = document.querySelector('#score');
const gameOver = document.querySelector('#tryAgain');
const loseMessage = document.querySelector('#loseMessage');
let intervalId;








// Function that runs the timer////////
function startTimer(duration, display) {
    display.innerText = duration;
     intervalId = setInterval(function () {
        duration--
        display.innerText = duration;

        if (duration === 0){
            clearInterval(intervalId);
            gameOver.style.visibility = 'visible';
            loseMessage.style.visibility = 'visible';
            
        }
       
        
    }, 1000);
}


// clickBirds.onclick = function (e) {
//     console.log(e.target);
//     document.querySelector(`#${e.target.id}`).style.visibility = 'hidden';
    
// }


        
            
        




playBtn.onclick = function () {
    let fiveMinutes = 3,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};
///End of timer function/////////


//set up eventlisteners  
document.querySelector('#clickable').addEventListener('click', handleClick);

function handleClick(e) {
    console.log(e.target.className);
    if (e.target.className === 'bird'){
        document.querySelector(`#${e.target.id}`).style.visibility = 'hidden';
    }
}


playBtn.addEventListener('click', init);

document.querySelector('#play').addEventListener('click', handleStart);

function handleStart(e) {
    console.log(e.target.tagName);
}

function init(e){
    console.log('working');
    playBtn.onclick = function () {
        bottomEls.style.visibility = 'visible';
        bottomEltwo.style.visibility = 'visible';
        playBtn.style.visibility = 'hidden';
        birds.style.visibility = 'visible';
        
      
    }
};




// function renderMessage(winner){
//     if(bottomEltwo === 10){
//         return 'Wow you r so guud'
//     } else {
//         return 'hOw Do yOu LooOoOoOosE!'
//     }
// }

// function checkWinner (){
//     if(score === 10){
//         return true
//     } else if (bottomEls === 0){
//         return false
//     }


//PLAY button needs to start the game.

//player presses play, timer starts and birds start appearing.


// I need the birds(buttons) that appear and disappear off the scree
//incrementally. 

// need an if / else. IF the player clicks bird get point.
//ELSE if they miss lose point. 

//IF a player gets 10 points before timer runs out..WIN
//ELSE no 10 points before timer runs out...LOSE


    





