const grid = document.querySelector(".grid");
const width = 10;
const scoreDisplay = document.querySelector("#score");
const startBtn = document.querySelector("#start-button");
let squares = Array.from(document.querySelectorAll(".grid div"));

// Tetrominoes
const l1Tetromino = [
  [1, width + 1, width * 2 + 1, 2],
  [width, width + 1, width + 2, width * 2 + 2],
  [1, width + 1, width * 2, width * 2 + 1],
  [width, width * 2, width * 2 + 1, width * 2 + 2],
];

const l2Tetromino = [
  [0, 1, width + 1, width * 2 + 1],
  [width + 2, width * 2, width * 2 + 1, width * 2 + 2],
  [1, width + 1, width * 2 + 1, width * 2 + 2],
  [width, width + 1, width + 2, width * 2],
];

const sTetromino = [
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
  [width + 1, width + 2, width * 2, width * 2 + 1],
  [0, width, width + 1, width * 2 + 1],
];

const zTetromino = [
  [width, width + 1, width * 2 + 1, width * 2 + 2],
  [1, width, width + 1, width * 2],
  [width, width + 1, width * 2 + 1, width * 2 + 2],
  [1, width, width + 1, width * 2],
];

const tTetromino = [
  [1, width, width + 1, width + 2],
  [1, width + 1, width + 2, width * 2 + 1],
  [width, width + 1, width + 2, width * 2 + 1],
  [1, width, width + 1, width * 2 + 1],
];

const oTetromino = [
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
  [0, 1, width, width + 1],
];

const iTetromino = [
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
  [1, width + 1, width * 2 + 1, width * 3 + 1],
  [width, width + 1, width + 2, width + 3],
];

const theTetrominoes = [
  l1Tetromino,
  l2Tetromino,
  sTetromino,
  zTetromino,
  tTetromino,
  oTetromino,
  iTetromino,
];

let currentPositon = 4;
let currentRotation = 0;

let random = Math.floor(Math.random() * theTetrominoes.length);
let current = theTetrominoes[random][currentRotation];

function draw() {
  current.forEach((index) => {
    squares[currentPositon + index].classList.add("tetromino");
  });
}

function undraw() {
  current.forEach((index) => {
    squares[currentPosition + index].classList.remove("tetromino");
  });
}
