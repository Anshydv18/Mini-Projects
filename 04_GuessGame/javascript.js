let realnum = Math.round(Math.random()*100 +1);
console.log(realnum);


const submit = document.querySelector('#submit');
const UserInputs = document.querySelector('#number');
const result = document.querySelector('.result');
const remain = document.querySelector('#remaining');
const startOver = document.querySelector('.desription');
const Previous = document.querySelector('#Previous');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;
if(playGame){

    submit.addEventListener('click',function(e){
        e.preventDefault();
        let guessed = parseInt( document.querySelector('#number').value);
        validateGuess(guessed);
        console.log(guessed);
    })
}

function validateGuess(guess){
    if(guess<1 || guess>100 || isNaN(guess)){
        alert("Enter a valid number between 1 to 100");
    }
    else{
        prevGuess.push(guess);
        if(numGuess==10){
            displayGuess(guess);
            displayMessage(`Game Over , Random number is ${realnum}`)
            endGame()
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess==realnum){
        displayMessage(`You guessed it right`)
        endGame();
    }
    else if(guess<realnum){
        displayMessage(`The number is too low`);
    }
    else{
        displayMessage(`The number is too high`);
    }
}

function displayGuess(guess){
    UserInputs.value=''
    Previous.innerHTML +=` ${guess}`
    numGuess++;
    remain.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message){
    result.innerHTML = `<h4> ${message} </h4>`;
}

function endGame(){
    UserInputs.value='';
    UserInputs.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame" class="start">Start again</h2>`
    startOver.appendChild(p);
    p.style.border =" 1px solid palevioletred";
    p.style.cursor ="pointer"
    playGame=false;
    newGame();
}

function newGame(){
    const start = document.querySelector('#newGame');
    start.addEventListener('click',function(e){
        prevGuess=[];
        numGuess=1;
        Previous.innerHTML =``
        remain.innerHTML = `${11 - numGuess}`;
        UserInputs.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame=true;
    })

}