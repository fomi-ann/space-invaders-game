// board
let tileSize = 32;
let rows = 16;
let columns = 16;

let board;

// Defining bord size, both 32 * 16
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows

// Used to draw on a canvas
let context;

// When the page loads, the variable board will be acessing the #board tag:
window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
}