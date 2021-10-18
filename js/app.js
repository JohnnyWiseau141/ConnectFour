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

function handleClick(sqr) {
	resetGame.removeAttribute('hidden')

  let sqIdx = sqr.target.id.replace('sq', '')

    
    
    let rowIdx = parseInt(sqIdx[0])
    let colIdx = parseInt(sqIdx[1])
  
  
  if (boardState[rowIdx][colIdx] || isWinner) 
      {
    return
    }

  if (boardState[rowIdx+1][colIdx] === null) {
    rowIdx = rowIdx + 1
  } 

  


  // attempted for loop
  // for ( i=0; i>5; i++ ) {
  //   rowIdx = rowIdx+1
  // }

  



  boardState[rowIdx][colIdx] = playerTurn

  playerTurn *= -1

  // isWinner = winnerIsYou()



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

}

init()