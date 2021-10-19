//constants

// const winConditions = [
//   'a lot of stuff'
// ]


//variables

//set's the variables for the state of the 2d array (boardState), the player's turn (playerTurn), and who is the winner (isWinner)
let boardState, playerTurn, isWinner

//cached element references


const cells = document.querySelectorAll('.cells')
const msgToPlayer = document.querySelector('#message')
const resetGame = document.querySelector('#resetButton')

//event listeners
cells.forEach((sec) => {
  sec.addEventListener('click', handleClick)
})

resetGame.addEventListener('click', init)

// boardState.addEventListener('click', handleClick)


//functions

function init() {
	resetGame.setAttribute('hidden', '')
  boardState = [
    [null, null, null, null, null, null, null], // [0]
    [null, null, null, null, null, null, null], // [1]
    [null, null, null, null, null, null, null], // [2]
    [null, null, null, null, null, null, null], // [3]
    [null, null, null, null, null, null, null], // [4]
    [null, null, null, null, null, null, null]  // [5]
//  [0],   [1],   [2],  [3],  [4],  [5],  [6]
  ]

  
  isWinner = false
  playerTurn = 1
	cells.forEach((sec) => {
		sec.innerHTML = ''
    sec.style.backgroundColor = 'white'
	})
  render()
}

//what to do once handleClick is initiated

function handleClick(cir) {
	resetGame.removeAttribute('hidden')

  let sqIdx = cir.target.id.replace('sq', '')

    
    
    let rowIdx = parseInt(sqIdx[0])
    let colIdx = parseInt(sqIdx[1])
  
  
  if (boardState[rowIdx][colIdx] || isWinner) 
      {
    return
    }


    



  if (boardState[0][colIdx] != null) {
    return
  } else if (boardState[1][colIdx] !=null) {
    boardState[0][colIdx] = playerTurn
  } else if (boardState[2][colIdx] !=null) {
    boardState[1][colIdx] = playerTurn
  } else if (boardState[3][colIdx] != null) {
    boardState[2][colIdx] = playerTurn
  } else if (boardState[4][colIdx] != null) {
    boardState[3][colIdx] = playerTurn
  } else if (boardState[5][colIdx] != null) {
    boardState[4][colIdx] = playerTurn
  } else {
    boardState[5][colIdx] = playerTurn
  }

  



  


  playerTurn *= -1

  isWinner = winnerIsYou()


  render()

} 

function render() {
  boardState.forEach(function (array, row) {
    array.forEach(function (element, column) {
      if (element === 1 ) {
        cells[row * 7 + column].style.backgroundColor = "blue"
      } else if (element === -1 ) {
        cells[row * 7 + column].style.backgroundColor = "red"
      }
    })
  })
  if (!isWinner ) {
    if (playerTurn === 1) {
    msgToPlayer.innerText = 'Blue Player go!'
    }else{
    msgToPlayer.innerText = 'Red player go!'
    }
  } else if (isWinner === "T") {
    msgToPlayer.innerText = 'Tie game!'
  } else {
    if (isWinner === 1){
      msgToPlayer.innerText = 'Blue player wins!'
    } else {
      msgToPlayer.innerText = 'Red player wins!'
    }
		
  }
}

function winnerIsYou() {

  //winning combos by row

	if(Math.abs(boardState[0][0] + boardState[0][1] + boardState[0][2] + boardState[0][3])=== 4)return boardState[0][0]
	if(Math.abs(boardState[0][1] + boardState[0][2] + boardState[0][3] + boardState[0][4])=== 4)return boardState[0][1]
  if(Math.abs(boardState[0][2] + boardState[0][3] + boardState[0][4] + boardState[0][5])=== 4)return boardState[0][2]
	if(Math.abs(boardState[0][3] + boardState[0][4] + boardState[0][5] + boardState[0][6])=== 4)return boardState[0][3]

  if(Math.abs(boardState[1][0] + boardState[1][1] + boardState[1][2] + boardState[1][3])=== 4)return boardState[1][0]
  if(Math.abs(boardState[1][1] + boardState[1][2] + boardState[1][3] + boardState[1][4])=== 4)return boardState[1][1]
  if(Math.abs(boardState[1][2] + boardState[1][3] + boardState[1][4] + boardState[1][5])=== 4)return boardState[1][2]
  if(Math.abs(boardState[1][3] + boardState[1][4] + boardState[1][5] + boardState[1][6])=== 4)return boardState[1][3]

  if(Math.abs(boardState[2][0] + boardState[2][1] + boardState[2][2] + boardState[2][3])=== 4)return boardState[2][0]
  if(Math.abs(boardState[2][1] + boardState[2][2] + boardState[2][3] + boardState[2][4])=== 4)return boardState[2][1]
  if(Math.abs(boardState[2][2] + boardState[2][3] + boardState[2][4] + boardState[2][5])=== 4)return boardState[2][2]
	if(Math.abs(boardState[2][3] + boardState[2][4] + boardState[2][5] + boardState[2][6])=== 4)return boardState[2][3]

  if(Math.abs(boardState[3][0] + boardState[3][1] + boardState[3][2] + boardState[3][3])=== 4)return boardState[3][0]
  if(Math.abs(boardState[3][1] + boardState[3][2] + boardState[3][3] + boardState[3][4])=== 4)return boardState[3][1]
  if(Math.abs(boardState[3][2] + boardState[3][3] + boardState[3][4] + boardState[3][5])=== 4)return boardState[3][2]
	if(Math.abs(boardState[3][3] + boardState[3][4] + boardState[3][5] + boardState[3][6])=== 4)return boardState[3][3]

  if(Math.abs(boardState[4][0] + boardState[4][1] + boardState[4][2] + boardState[4][3])=== 4)return boardState[4][0]
  if(Math.abs(boardState[4][1] + boardState[4][2] + boardState[4][3] + boardState[4][4])=== 4)return boardState[4][1]
  if(Math.abs(boardState[4][2] + boardState[4][3] + boardState[4][4] + boardState[4][5])=== 4)return boardState[4][2]
	if(Math.abs(boardState[4][3] + boardState[4][4] + boardState[4][5] + boardState[4][6])=== 4)return boardState[4][3]

  if(Math.abs(boardState[5][0] + boardState[5][1] + boardState[5][2] + boardState[5][3])=== 4)return boardState[5][0]
  if(Math.abs(boardState[5][1] + boardState[5][2] + boardState[5][3] + boardState[5][4])=== 4)return boardState[5][1]
  if(Math.abs(boardState[5][2] + boardState[5][3] + boardState[5][4] + boardState[5][5])=== 4)return boardState[5][2]
	if(Math.abs(boardState[5][3] + boardState[5][4] + boardState[5][5] + boardState[5][6])=== 4)return boardState[5][3]

  //winning combos by column

  if(Math.abs(boardState[0][0] + boardState[1][0] + boardState[2][0] + boardState[3][0])=== 4)return boardState[0][0]
  if(Math.abs(boardState[1][0] + boardState[2][0] + boardState[3][0] + boardState[4][0])=== 4)return boardState[1][0]
  if(Math.abs(boardState[2][0] + boardState[3][0] + boardState[4][0] + boardState[5][0])=== 4)return boardState[2][0]

  if(Math.abs(boardState[0][1] + boardState[1][1] + boardState[2][1] + boardState[3][1])=== 4)return boardState[0][1]
  if(Math.abs(boardState[1][1] + boardState[2][1] + boardState[3][1] + boardState[4][1])=== 4)return boardState[1][1]
  if(Math.abs(boardState[2][1] + boardState[3][1] + boardState[4][1] + boardState[5][1])=== 4)return boardState[2][1]

  if(Math.abs(boardState[0][2] + boardState[1][2] + boardState[2][2] + boardState[3][2])=== 4)return boardState[0][2]
  if(Math.abs(boardState[1][2] + boardState[2][2] + boardState[3][2] + boardState[4][2])=== 4)return boardState[1][2]
  if(Math.abs(boardState[2][2] + boardState[3][2] + boardState[4][2] + boardState[5][2])=== 4)return boardState[2][2]

  if(Math.abs(boardState[0][3] + boardState[1][3] + boardState[2][3] + boardState[3][3])=== 4)return boardState[0][3]
  if(Math.abs(boardState[1][3] + boardState[2][3] + boardState[3][3] + boardState[4][3])=== 4)return boardState[1][3]
  if(Math.abs(boardState[2][3] + boardState[3][3] + boardState[4][3] + boardState[5][3])=== 4)return boardState[2][3]

  if(Math.abs(boardState[0][4] + boardState[1][4] + boardState[2][4] + boardState[3][4])=== 4)return boardState[0][4]
  if(Math.abs(boardState[1][4] + boardState[2][4] + boardState[3][4] + boardState[4][4])=== 4)return boardState[1][4]
  if(Math.abs(boardState[2][4] + boardState[3][4] + boardState[4][4] + boardState[5][4])=== 4)return boardState[2][4]

  if(Math.abs(boardState[0][5] + boardState[1][5] + boardState[2][5] + boardState[3][5])=== 4)return boardState[0][5]
  if(Math.abs(boardState[1][5] + boardState[2][5] + boardState[3][5] + boardState[4][5])=== 4)return boardState[1][5]
  if(Math.abs(boardState[2][5] + boardState[3][5] + boardState[4][5] + boardState[5][5])=== 4)return boardState[2][5]

  if(Math.abs(boardState[0][6] + boardState[1][6] + boardState[2][6] + boardState[3][6])=== 4)return boardState[0][6]
  if(Math.abs(boardState[1][6] + boardState[2][6] + boardState[3][6] + boardState[4][6])=== 4)return boardState[1][6]
  if(Math.abs(boardState[2][6] + boardState[3][6] + boardState[4][6] + boardState[5][6])=== 4)return boardState[2][6]

  if (boardState.some(row => row.includes(null))) {
   return null
} 
  else {
  	return 'T'
}
}

init()