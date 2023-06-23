class TicTacToe {
  constructor(){
    this.board = new Array(9).fill(null);
    this.currentPlayer = "x";
  }

  // to set reset the board[a] 
  reset(){
    this.board.fill(null);
    this.currentPlayer = "x";
  }

  // check for draw 
  #checkDraw(){
    for(let i of this.board){
      if(i === null){
        return false;
      }
    }
    return true;
  }

  // check for wins
  #checkWin(){
    const winCombinations = [
      [0,1,2], [3,4,5], [6,7,8], // for row
      [0,3,6], [1,4,7], [2,5,8], // for column
      [0,4,8], [2,4,6] // for diagonal win
    ]

    for(const combination of winCombinations){
      const [a,b,c] = combination;
      if(
        this.board[a] && 
        this.board[a] === this.board[b]  &&
        this.board[a] === this.board[c]
        ){
          return true;
        }
    }
    return false;
  }

  // let make move 
  makeMove(idx){
    if(this.board[idx] === null) //only when you have idx is null
    { 
      this.board[idx] = this.currentPlayer;
      // check for win
      if(this.#checkWin()){
        console.log(`The winner is ${this.currentPlayer}.`)
        this.reset();
      }
      // check for draw 
      else if(this.#checkDraw()){
        console.log(`The game is draw.`);
        this.reset();
      }else {
        // now we change the the current player
        this.currentPlayer = this.currentPlayer === 'x' ? 'o' : 'x';
      }
    } else {
      console.log(`This index is already occupied.`)
    }
  }
}

const game = new TicTacToe();
game.makeMove(0);
game.makeMove(3);
game.makeMove(1);
game.makeMove(4);
game.makeMove(2);
game.makeMove(0);