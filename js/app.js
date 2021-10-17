//constants

// const winConditions = [
//   'a lot of stuff'
// ]


//variables

let boardState, playerTurn, isWinner

//cached element references

const cells = document.querySelectorAll('.cells')
const msgToPlayer = document.querySelector('.message')
const resetGame = document.querySelector('#resetButton')

//event listeners
// cells.forEach((sec) => {
//   sec.addEventListener('click' handleClick)
// })

resetGame.addEventListener('click', init)

// boardState.addEventListener('click', handleClick)


//functions

function init() {
	resetGame.setAttribute('hidden', '')
  boardState = [
    [null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null]
    [null, null, null, null, null, null, null]
  ]

  cells.innerHTML = ''
  isWinner = false
  playerTurn = 1
	cells.forEach((sec) => {
		sec.innerHTML = ''
	})
  // render()
}

function handleClick() {
  
}

function winnerIsYou() {

}