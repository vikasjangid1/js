# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

## project 1

```javascript

console.log("vikas")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")


buttons.forEach(function (button){
  console.log(button)
  button.addEventListener('click',function(e){
     console.log(e)
     console.log(e.target) // it will find target for event
     if(e.target.id === 'grey'){
       body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'yellow'){
       body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'white'){
       body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'blue'){
       body.style.backgroundColor = e.target.id
     }
     if(e.target.id === 'purple'){
       body.style.backgroundColor = e.target.id
     }
  })
} )


```


## project 2 solution





```javscript

const form = document.querySelector('form');
// const height = parseInt(document.querySelector('#height').value)
// this usecase will give you empty
form.addEventListener('submit', function (e) {
  e.preventDefault(); // to stop bydefault action
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result
    results.innerHTML = `<span>${bmi}</span>` 
  }
});


```


## project 3 solution

```javascript

const clock = document.getElementById('clock')
// const clock = document.querySelector('#clock')

let date = new Date()
console.log(date.toLocaleTimeString());

setInterval(function(){
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
// console.log(date.toLocaleTimeString());
},1000)



```

## project 4 solution

```javascript


let randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));

const submit = document.querySelector("#subt");

const userInput = document.querySelector("#guessField");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

const p = document.createElement("p");

let preGuess = [];
let numGuess = 1;
let playGame = true;

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  // check our guess that is it a no. or not
  if (isNaN(guess)) {
    //alert('Please enter a valid number')
  } else if (guess < 1) {
    //alert('Please enter a number more than 1')
  } else if (guess > 100) {
    //alert('Please enter a number less than 100')
  } else {
    preGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random Number was ${randomNumber}`);
      endGame(guess);
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  // match our guess and computer guess
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too high`);
  }
}

function displayGuess(guess) {
  // update previous guess and remaining guess
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");
  document.getElementById("newGame").addEventListener("mouseover", mouseOver);
  document.getElementById("newGame").addEventListener("mouseout", mouseOut);

  function mouseOver() {
    document.getElementById("newGame").style.color = "yellow";
  }

  function mouseOut() {
    document.getElementById("newGame").style.color = "black";
  }
  newGameButton.addEventListener("click", function (e) {
    randomNumber = parseInt(Math.floor(Math.random() * 100 + 1));
    preGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute("disabled");
    startOver.removeChild(p);
    playGame = true;
  });
}


```