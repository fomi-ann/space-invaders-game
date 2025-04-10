// board
let tileSize = 32;
let rows = 16;
let columns = 16;

// 512px x 512px
let board;

// Defining bord size, both 32 * 16
let boardWidth = tileSize * columns;
let boardHeight = tileSize * rows;

// Used to draw on a canvas
let context;

// Define ship size
let shipWidth = tileSize * 2;
let shipHeight = tileSize;

// Ship will first appear at:
let shipX = tileSize * columns/2 - tileSize; // Left --> Right, middle minus 1
let shipY = tileSize * rows - tileSize * 2; // Top --> Bottom, minus 2 last rows

// Ship object
let ship = {
    x: shipX,
    y: shipY,
    width: shipWidth,
    height: shipHeight
}

let shipImg;

// Ship moves one tile at a time
let shipVelocityX = tileSize;

// When the page loads, the variable board will be acessing the #board tag:
window.onload = function() {
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");

    // Draw initial ship / chack position for the ship object
    // context.fillStyle = "green";
    // context.fillRect(ship.x, ship.y, ship.width, ship.height)

    // Load images
    shipImg = new Image();
    shipImg.src = "./images/ship.png"
    // On load draw ship
    shipImg.onload = function(){
        context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
    }

    requestAnimationFrame(update);

    // Waiting for key to be pressed, checks if the key pressed is arrow key
    document.addEventListener("keydown", moveShip);
}

function update() {
    requestAnimationFrame(update);

    // Clearing the canvas so the frames won't stack
    context.clearRect(0,0, board.width, board.height);

    // Drawing ship continuesly, game loop
    context.drawImage(shipImg, ship.x, ship.y, ship.width, ship.height);
}

// e --> event 
function moveShip(e) {
    // Adding check so the ship will stay within the board
    if (e.code == "ArrowLeft" && ship.x - shipVelocityX >= 0) {
        ship.x -= shipVelocityX; // Move ship one tile to the left
    } else if (e.code == "ArrowRight" && ship.x + shipVelocityX + ship.width <= board.width) {
        ship.x += shipVelocityX; // Move ship one tile to the right
    }
}