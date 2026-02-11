import '../scss/index.scss';

type State = {
  topicIndex: number | null,
  wordIndex: number | null,
  errorScore: number | null,
  successScore: number | null
}

let state: State = JSON.parse(window.localStorage.getItem('state'));

if(!state) {
  state = {
    topicIndex: null,
    wordIndex: null,
    errorScore: 0,
    successScore: 0
  }
}

let currentWord: string | null = null;
let wordLetters: Array<any> = [];
let errorScore: number = 0;
let successScore = 0;


const alphabet: string = 'abcdefghijklmnopqrstuvwxyz';
const topics: Array<string> = ["Cities", "Animals", "Music"];
const words: any = {
  "Cities": ["minsk", "paris", "garodnia", "london"],
  "Animals": ["dog", "cat", "elephant", "bear"],
  "Music": ["mdc", "doa", "discharge", "totalitar", "germs"]
}

type GameElement = {
  topic: HTMLSpanElement,
  word: HTMLDivElement,
  letters: HTMLDivElement,
  hangman: Array<any>,
}

const gameElements: GameElement = {
  topic: document.querySelector('#game-topic'),
  word: document.querySelector('.word'),
  letters: document.querySelector('.letters'),
  hangman: [
    document.getElementById('kran'),
    document.getElementById('head'),
    document.getElementById('body'),
    document.getElementById('left-hand'),
    document.getElementById('right-hand'),
    document.getElementById('left-leg'),
    document.getElementById('right-leg')
  ]
}

// function localStor(key, value) [

// ]

function init(): void {
  let topicIndex: number = state.topicIndex !== null ? state.topicIndex : rand(0, topics.length - 1);
  let wordsSet: Array<string> = words[topics[topicIndex]];
  let wordIndex: number = state.wordIndex !== null ? state.wordIndex : rand(0, wordsSet.length - 1);

  currentWord = wordsSet[wordIndex];

  gameElements.topic.innerText = topics[topicIndex];

  for(let i: number = 0; i < currentWord.length; i++) {
    let span: HTMLSpanElement = document.createElement('span');
    span.classList.add('word-letter');
    gameElements.word.append(span);

    let wordLetter: any = {
      letter: currentWord[i],
      element: span
    }

    wordLetters.push(wordLetter);
  }

  for(let i: number = 0; i < alphabet.length; i++) {
    let button: HTMLButtonElement = document.createElement('button');
    button.classList.add('letter');
    button.innerText = alphabet[i];
    button.addEventListener('click', () => {
      checkLetter(alphabet[i]);
      button.classList.add('red');
      button.disabled = true;
    });
    gameElements.letters.append(button);
  }
}

function* showHangmanPartGenerator(): any {
  for (let i = 0; i < gameElements.hangman.length; i++) {
    gameElements.hangman[i].style.display = 'block';
    yield;
  }
}

let showHangmanPart = showHangmanPartGenerator();

function checkLetter(letter: string) {
  let pos = 0;
  let indexes = [];
  while(true) {
    let foundPos = currentWord.indexOf(letter, pos);
    if (foundPos == -1) break;
    
    indexes.push(foundPos);
    pos = foundPos + 1;
  }

  if (indexes.length > 0) {
    for (let index of indexes) {
      wordLetters[index].element.innerText = wordLetters[index].letter;
      successScore++;
    }


    if(successScore == currentWord.length) {
      gameOver2('You Win!');
    }
  } else {
    showHangmanPart.next();
    errorScore++;

    if(errorScore >= gameElements.hangman.length) {
      gameOver('Game Over');
    }
  }


}

function gameOver(message: string | null): void {
  let gameOver: HTMLDivElement = document.querySelector('.over-message');
  gameOver.innerText = message;
  gameOver.classList.add('active');

  setTimeout(() => {
    location.reload();
  }, 5000);
}

function gameOver2(message: string | null): void {
  let gameOver: HTMLDivElement = document.querySelector('.over-message');
  gameOver.innerText = message;
  gameOver.classList.add('active2');

  setTimeout(() => {
    location.reload();
  }, 5000);
}

function rand(min: number, max: number): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

init();