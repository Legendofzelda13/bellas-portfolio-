
/*----- app's state (variables) -----*/
const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let board;
let turn = 'X';
let win;

/*----- cached element references -----*/

const squares = Array.from(document.querySelectorAll('#board div'));
const messages = document.querySelector('h2')
const resetButton = document.getElementById('reset-button');

/*----- event listeners -----*/
document.getElementById('board').addEventListener('click', handleTurn);
resetButton.addEventListener('click', init);


/*----- functions -----*/

function getWinner() {
    let winner = null;
    winningCombos.forEach(function (combo) {
        if (board[combo[0]] && board[combo[0]] === board[combo[1]] && board[combo[0]]=== board[combo[2]]) {
         winner = board[combo[0]]
        } 
    });
 if (winner) {
     return winner
 } else if (board.includes('')) {
     return null
 } else {
     return 'T'
 }

    

}

function handleTurn(event) {
    let idx = squares.findIndex(function (square) {
        return square === event.target;
    });
    console.log(turn)
    board[idx] = turn;
    // turn = turn === event.target;
    win = getWinner();
    console.log(win)

    render();
    
    turn = turn === "X" ? "O" : "X";
    console.log(turn)
};

function init() {
    board = [
        '', '', '',
        '', '', '',
        '', '', ''
    ];
    render();
};

const getText = () => {
   let text = '';
   if (win === 'T') {
       text = "That's a tie!";
   } else if (win === 'X' || win === 'O') {
       text = `${win} wins the game!`
   } else {
       text = `It's ${turn}'s turn!`
   }
   return text;
}

function render() {
    board.forEach(function (mark, index) {
        //this moves the value of the board item into the squares[idx]
        squares[index].textContent = mark;
        });

        messages.textContent = getText()
   
}

init();
