

//variables

//set's the variables for the state of the 2d array (boardState), the player's turn (playerTurn), and who is the winner (isWinner)
let boardState, playerTurn, isWinner

//constants and cached element references

const previewer = document.querySelectorAll('.preview')
const cells = document.querySelectorAll('.cells')
const msgToPlayer = document.querySelector('#message')
const resetGame = document.querySelector('#resetButton')

let cZero = document.querySelector('#c0')
let cOne = document.querySelector('#c1')
let cTwo = document.querySelector('#c2')
let cThree = document.querySelector('#c3')
let cFour = document.querySelector('#c4')
let cFive = document.querySelector('#c5')
let cSix = document.querySelector('#c6')

let zeroZero = document.querySelector('#sq00')
let zeroOne = document.querySelector('#sq01')
let zeroTwo = document.querySelector('#sq02')
let zeroThree = document.querySelector('#sq03')
let zeroFour = document.querySelector('#sq04')
let zeroFive = document.querySelector('#sq05')
let zeroSix = document.querySelector('#sq06')
let oneZero = document.querySelector('#sq10')
let oneOne = document.querySelector('#sq11')
let oneTwo = document.querySelector('#sq12')
let oneThree = document.querySelector('#sq13')
let oneFour = document.querySelector('#sq14')
let oneFive = document.querySelector('#sq15')
let oneSix = document.querySelector('#sq16')
let twoZero = document.querySelector('#sq20')
let twoOne = document.querySelector('#sq21')
let twoTwo = document.querySelector('#sq22')
let twoThree = document.querySelector('#sq23')
let twoFour = document.querySelector('#sq24')
let twoFive = document.querySelector('#sq25')
let twoSix = document.querySelector('#sq26')
let threeZero = document.querySelector('#sq30')
let threeOne = document.querySelector('#sq31')
let threeTwo = document.querySelector('#sq32')
let threeThree = document.querySelector('#sq33')
let threeFour = document.querySelector('#sq34')
let threeFive = document.querySelector('#sq35')
let threeSix = document.querySelector('#sq36')
let fourZero = document.querySelector('#sq40')
let fourOne = document.querySelector('#sq41')
let fourTwo = document.querySelector('#sq42')
let fourThree = document.querySelector('#sq43')
let fourFour = document.querySelector('#sq44')
let fourFive = document.querySelector('#sq45')
let fourSix = document.querySelector('#sq46')
let fiveZero = document.querySelector('#sq50')
let fiveOne = document.querySelector('#sq51')
let fiveTwo = document.querySelector('#sq52')
let fiveThree = document.querySelector('#sq53')
let fiveFour = document.querySelector('#sq54')
let fiveFive = document.querySelector('#sq55')
let fiveSix = document.querySelector('#sq56')


//event listeners

cells.forEach((sec) => {
  sec.addEventListener('click', handleClick)
  sec.addEventListener('mouseover', handleHover)
})

resetGame.addEventListener('click', init)


//functions

function init() {
	resetGame.setAttribute('hidden', '')

  previewer.forEach((c) => {
    c.style.backgroundColor = ''
  })

  boardState = [
    //0,0  0,1   0,2    0,3   0,4   0,5   0,6
    [null, null, null, null, null, null, null], // [0]
    [null, null, null, null, null, null, null], // [1]
    [null, null, null, null, null, null, null], // [2]
    [null, null, null, null, null, null, null], // [3]
    [null, null, null, null, null, null, null], // [4]
    [null, null, null, null, null, null, null]  // [5]
//  [0],   [1],   [2],  [3],  [4],  [5],  [6]
  ]
  
  msgToPlayer.style.borderColor = 'black'
  msgToPlayer.style.color = 'black'
  isWinner = false
  playerTurn = 1
	cells.forEach((sec) => {
		sec.style.backgroundColor = 'white'
    sec.style.borderColor = ''
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

  if (isWinner != null) {
    previewer.forEach((c) => {
      c.style.backgroundColor = ''
    })
  }
  
  handleHover(cir)
  
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
      msgToPlayer.style.color = 'blue'
      msgToPlayer.innerText = 'Blue player wins!'
      msgToPlayer.style.borderColor = 'blue'
    } else {
      msgToPlayer.style.color = 'red'
      msgToPlayer.innerText = 'Red player wins!'
      msgToPlayer.style.borderColor = 'red'
    }
		
  }
}

function winnerIsYou() {

  // -------- winning combos by row

  //winning combos in row 0

	if(Math.abs(boardState[0][0] + boardState[0][1] + boardState[0][2] + boardState[0][3])=== 4){
    //change in border color to indicate winning combo position
    zeroZero.style.borderColor = 'yellow'
    zeroOne.style.borderColor = 'yellow'
    zeroTwo.style.borderColor = 'yellow'
    zeroThree.style.borderColor = 'yellow'
    return boardState[0][0]
  }
	if(Math.abs(boardState[0][1] + boardState[0][2] + boardState[0][3] + boardState[0][4])=== 4){
    zeroOne.style.borderColor = 'yellow'
    zeroTwo.style.borderColor = 'yellow'
    zeroThree.style.borderColor = 'yellow'
    zeroFour.style.borderColor = 'yellow'
    return boardState[0][1]
  }
  if(Math.abs(boardState[0][2] + boardState[0][3] + boardState[0][4] + boardState[0][5])=== 4){
    zeroTwo.style.borderColor = 'yellow'
    zeroThree.style.borderColor = 'yellow'
    zeroFour.style.borderColor = 'yellow'
    zeroFive.style.borderColor = 'yellow'
    return boardState[0][2]
  }

	if(Math.abs(boardState[0][3] + boardState[0][4] + boardState[0][5] + boardState[0][6])=== 4){
    zeroThree.style.borderColor = 'yellow'
    zeroFour.style.borderColor = 'yellow'
    zeroFive.style.borderColor = 'yellow'
    zeroSix.style.borderColor = 'yellow'
    return boardState[0][3]
  }

  //winning combos in row 1

  if(Math.abs(boardState[1][0] + boardState[1][1] + boardState[1][2] + boardState[1][3])=== 4){
    oneZero.style.borderColor = 'yellow'
    oneOne.style.borderColor = 'yellow'
    oneTwo.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    return boardState[1][0]
  }

  if(Math.abs(boardState[1][1] + boardState[1][2] + boardState[1][3] + boardState[1][4])=== 4){
    oneOne.style.borderColor = 'yellow'
    oneTwo.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    return boardState[1][1]
  }

  if(Math.abs(boardState[1][2] + boardState[1][3] + boardState[1][4] + boardState[1][5])=== 4){
    oneTwo.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    oneFive.style.borderColor = 'yellow'
    return boardState[1][2]
  }

  if(Math.abs(boardState[1][3] + boardState[1][4] + boardState[1][5] + boardState[1][6])=== 4){
    oneThree.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    oneFive.style.borderColor = 'yellow'
    oneSix.style.borderColor = 'yellow'
    return boardState[1][3]
  }

  //winning combos in row 2
  if(Math.abs(boardState[2][0] + boardState[2][1] + boardState[2][2] + boardState[2][3])=== 4){
    twoZero.style.borderColor = 'yellow'
    twoOne.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    return boardState[2][0]
  }

  if(Math.abs(boardState[2][1] + boardState[2][2] + boardState[2][3] + boardState[2][4])=== 4){
    twoOne.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    return boardState[2][1]
  }

  if(Math.abs(boardState[2][2] + boardState[2][3] + boardState[2][4] + boardState[2][5])=== 4){
    twoTwo.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow'
    return boardState[2][2]
  }

	if(Math.abs(boardState[2][3] + boardState[2][4] + boardState[2][5] + boardState[2][6])=== 4){
    twoThree.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow' 
    twoSix.style.borderColor = 'yellow' 
    return boardState[2][3]
  }

//winning combos in row 3
  if(Math.abs(boardState[3][0] + boardState[3][1] + boardState[3][2] + boardState[3][3])=== 4){
    threeZero.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow' 
    threeThree.style.borderColor = 'yellow'  
    return boardState[3][0]
  }
  
  if(Math.abs(boardState[3][1] + boardState[3][2] + boardState[3][3] + boardState[3][4])=== 4){
    threeOne.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow' 
    threeThree.style.borderColor = 'yellow' 
    threeFour.style.borderColor = 'yellow' 
    return boardState[3][1]
  }

  if(Math.abs(boardState[3][2] + boardState[3][3] + boardState[3][4] + boardState[3][5])=== 4){
    threeTwo.style.borderColor = 'yellow' 
    threeThree.style.borderColor = 'yellow' 
    threeFour.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    return boardState[3][2]
  }

	if(Math.abs(boardState[3][3] + boardState[3][4] + boardState[3][5] + boardState[3][6])=== 4){
    threeThree.style.borderColor = 'yellow' 
    threeFour.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    threeSix.style.borderColor = 'yellow'
    return boardState[3][3]
  }

  //winning combos in row 4
  if(Math.abs(boardState[4][0] + boardState[4][1] + boardState[4][2] + boardState[4][3])=== 4){
    fourZero.style.borderColor = 'yellow' 
    fourOne.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    return boardState[4][0]
  }
  if(Math.abs(boardState[4][1] + boardState[4][2] + boardState[4][3] + boardState[4][4])=== 4){
    fourOne.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    return boardState[4][1]
  }
  if(Math.abs(boardState[4][2] + boardState[4][3] + boardState[4][4] + boardState[4][5])=== 4){
    fourTwo.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    return boardState[4][2]
  }

	if(Math.abs(boardState[4][3] + boardState[4][4] + boardState[4][5] + boardState[4][6])=== 4){
    fourThree.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    fourSix.style.borderColor = 'yellow'
    return boardState[4][3]
  }

  //winning combos in row 5
  if(Math.abs(boardState[5][0] + boardState[5][1] + boardState[5][2] + boardState[5][3])=== 4){
    fiveZero.style.borderColor = 'yellow'
    fiveOne.style.borderColor = 'yellow'
    fiveTwo.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    return boardState[5][0]
  }

  if(Math.abs(boardState[5][1] + boardState[5][2] + boardState[5][3] + boardState[5][4])=== 4){
    fiveOne.style.borderColor = 'yellow'
    fiveTwo.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    fiveFour.style.borderColor = 'yellow'
    return boardState[5][1]
  }

  if(Math.abs(boardState[5][2] + boardState[5][3] + boardState[5][4] + boardState[5][5])=== 4){
    fiveTwo.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    fiveFour.style.borderColor = 'yellow'
    fiveFive.style.borderColor = 'yellow'
    return boardState[5][2]
  }

	if(Math.abs(boardState[5][3] + boardState[5][4] + boardState[5][5] + boardState[5][6])=== 4){
    fiveThree.style.borderColor = 'yellow'
    fiveFour.style.borderColor = 'yellow'
    fiveFive.style.borderColor = 'yellow'
    fiveSix.style.borderColor = 'yellow'
    return boardState[5][3]
  }


  // -------- winning combos by column

  //winning combos in column 0
  if(Math.abs(boardState[0][0] + boardState[1][0] + boardState[2][0] + boardState[3][0])=== 4){
    zeroZero.style.borderColor = 'yellow'
    oneZero.style.borderColor = 'yellow'
    twoZero.style.borderColor = 'yellow'
    threeZero.style.borderColor = 'yellow'
    return boardState[0][0]
  }

  if(Math.abs(boardState[1][0] + boardState[2][0] + boardState[3][0] + boardState[4][0])=== 4){
    oneZero.style.borderColor = 'yellow'
    twoZero.style.borderColor = 'yellow'
    threeZero.style.borderColor = 'yellow'
    fourZero.style.borderColor = 'yellow'
    return boardState[1][0]
  }

  if(Math.abs(boardState[2][0] + boardState[3][0] + boardState[4][0] + boardState[5][0])=== 4){
    twoZero.style.borderColor = 'yellow'
    threeZero.style.borderColor = 'yellow'
    fourZero.style.borderColor = 'yellow'
    fiveZero.style.borderColor = 'yellow'
    return boardState[2][0]
  }


//wnning combos in column 1

  if(Math.abs(boardState[0][1] + boardState[1][1] + boardState[2][1] + boardState[3][1])=== 4){
    zeroOne.style.borderColor = 'yellow'
    oneOne.style.borderColor = 'yellow'
    twoOne.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    return boardState[0][1]
  }

  if(Math.abs(boardState[1][1] + boardState[2][1] + boardState[3][1] + boardState[4][1])=== 4){
    oneOne.style.borderColor = 'yellow'
    twoOne.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    fourOne.style.borderColor = 'yellow'
    return boardState[1][1]
  }

  if(Math.abs(boardState[2][1] + boardState[3][1] + boardState[4][1] + boardState[5][1])=== 4){
    twoOne.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    fourOne.style.borderColor = 'yellow'
    fiveOne.style.borderColor = 'yellow'
    return boardState[2][1]
  }


//winning combos in column 2
  if(Math.abs(boardState[0][2] + boardState[1][2] + boardState[2][2] + boardState[3][2])=== 4){
    zeroTwo.style.borderColor = 'yellow'
    oneTwo.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    return boardState[0][2]
  }

  if(Math.abs(boardState[1][2] + boardState[2][2] + boardState[3][2] + boardState[4][2])=== 4){
    oneTwo.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    return boardState[1][2]
  }

  if(Math.abs(boardState[2][2] + boardState[3][2] + boardState[4][2] + boardState[5][2])=== 4){
    twoTwo.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    fiveTwo.style.borderColor = 'yellow'
    return boardState[2][2]
  }


//winning combos in column 3
  if(Math.abs(boardState[0][3] + boardState[1][3] + boardState[2][3] + boardState[3][3])=== 4){
    zeroThree.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    return boardState[0][3]
  }

  if(Math.abs(boardState[1][3] + boardState[2][3] + boardState[3][3] + boardState[4][3])=== 4){
    oneThree.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    return boardState[1][3]
  }

  if(Math.abs(boardState[2][3] + boardState[3][3] + boardState[4][3] + boardState[5][3])=== 4){
    twoThree.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    return boardState[2][3]
  }

  
// winning combos in column 4
  if(Math.abs(boardState[0][4] + boardState[1][4] + boardState[2][4] + boardState[3][4])=== 4){
    zeroFour.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    return boardState[0][4]
  }

  if(Math.abs(boardState[1][4] + boardState[2][4] + boardState[3][4] + boardState[4][4])=== 4){
    oneFour.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    return boardState[1][4]
  }

  if(Math.abs(boardState[2][4] + boardState[3][4] + boardState[4][4] + boardState[5][4])=== 4){
    twoFour.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    fiveFour.style.borderColor = 'yellow'
    return boardState[2][4]
  }

//winning combos in column 5

  if(Math.abs(boardState[0][5] + boardState[1][5] + boardState[2][5] + boardState[3][5])=== 4){
    zeroFive.style.borderColor = 'yellow'
    oneFive.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    return boardState[0][5]
  }

  if(Math.abs(boardState[1][5] + boardState[2][5] + boardState[3][5] + boardState[4][5])=== 4){
    oneFive.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    return boardState[1][5]
  }

  if(Math.abs(boardState[2][5] + boardState[3][5] + boardState[4][5] + boardState[5][5])=== 4){
    twoFive.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    fiveFive.style.borderColor = 'yellow'
    return boardState[2][5]
  }


// winning combos on column 6
  if(Math.abs(boardState[0][6] + boardState[1][6] + boardState[2][6] + boardState[3][6])=== 4){
    zeroSix.style.borderColor = 'yellow'
    oneSix.style.borderColor = 'yellow'
    twoSix.style.borderColor = 'yellow'
    threeSix.style.borderColor = 'yellow'
    return boardState[0][6]
  }

  if(Math.abs(boardState[1][6] + boardState[2][6] + boardState[3][6] + boardState[4][6])=== 4){
    oneSix.style.borderColor = 'yellow'
    twoSix.style.borderColor = 'yellow'
    threeSix.style.borderColor = 'yellow'
    fourSix.style.borderColor = 'yellow'
    return boardState[1][6]
  }
  if(Math.abs(boardState[2][6] + boardState[3][6] + boardState[4][6] + boardState[5][6])=== 4){
    twoSix.style.borderColor = 'yellow'
    threeSix.style.borderColor = 'yellow'
    fourSix.style.borderColor = 'yellow'
    fiveSix.style.borderColor = 'yellow'
    return boardState[2][6]
  }



  // -------! winning combos diagnonally 

  //--- winning combos across row 0 - row 3 in the backward slash direction:  \ \ \ \
  if(Math.abs(boardState[0][0] + boardState[1][1] + boardState[2][2] + boardState[3][3])=== 4){
    zeroZero.style.borderColor = 'yellow'
    oneOne.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    return boardState[0][0]
  }

	if(Math.abs(boardState[0][1] + boardState[1][2] + boardState[2][3] + boardState[3][4])=== 4){
    zeroOne.style.borderColor = 'yellow'
    oneTwo.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    return boardState[0][1]
  }

  if(Math.abs(boardState[0][2] + boardState[1][3] + boardState[2][4] + boardState[3][5])=== 4){
    zeroTwo.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    return boardState[0][2]
  }

	if(Math.abs(boardState[0][3] + boardState[1][4] + boardState[2][5] + boardState[3][6])=== 4){
    zeroThree.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow'
    threeSix.style.borderColor = 'yellow'
    return boardState[0][3]
  }

// -- winning combos across row 0 - row 3 in the forward slash direction: / / / /
  if(Math.abs(boardState[0][6] + boardState[1][5] + boardState[2][4] + boardState[3][3])=== 4){
    zeroSix.style.borderColor = 'yellow'
    oneFive.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    return boardState[0][6]
  }

	if(Math.abs(boardState[0][5] + boardState[1][4] + boardState[2][3] + boardState[3][2])=== 4){
    zeroFive.style.borderColor = 'yellow'
    oneFour.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    return boardState[0][5]
  }
  
  if(Math.abs(boardState[0][4] + boardState[1][3] + boardState[2][2] + boardState[3][1])=== 4){
    zeroFour.style.borderColor = 'yellow'
    oneThree.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    return boardState[0][4]
  }

	if(Math.abs(boardState[0][3] + boardState[1][2] + boardState[2][1] + boardState[3][0])=== 4){
    zeroThree.style.borderColor = 'yellow'
    oneTwo.style.borderColor = 'yellow'
    twoOne.style.borderColor = 'yellow'
    threeZero.style.borderColor = 'yellow'
    return boardState[0][3]
  }

  // --- winning combos across row 1 - row 4 in the backward slash diretion: \ \ \ \
  if(Math.abs(boardState[1][0] + boardState[2][1] + boardState[3][2] + boardState[4][3])=== 4){
    oneZero.style.borderColor = 'yellow'
    twoOne.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    return boardState[1][0]
  }

	if(Math.abs(boardState[1][1] + boardState[2][2] + boardState[3][3] + boardState[4][4])=== 4){
    oneOne.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    return boardState[1][1]
  }

  if(Math.abs(boardState[1][2] + boardState[2][3] + boardState[3][4] + boardState[4][5])=== 4){
    oneTwo.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    return boardState[1][2]
  }

	if(Math.abs(boardState[1][3] + boardState[2][4] + boardState[3][5] + boardState[4][6])=== 4){
    oneThree.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    fourSix.style.borderColor = 'yellow'
    return boardState[1][3]
  }

  // winning combos across row 1 - row 4 in the forward slash direction / / / /

  if(Math.abs(boardState[1][6] + boardState[2][5] + boardState[3][4] + boardState[4][3])=== 4){
    oneSix.style.borderColor = 'yellow'
    twoFive.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    return boardState[1][6]
  }

	if(Math.abs(boardState[1][5] + boardState[2][4] + boardState[3][3] + boardState[4][2])=== 4){
    oneFive.style.borderColor = 'yellow'
    twoFour.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    return boardState[1][5]
  }

  if(Math.abs(boardState[1][4] + boardState[2][3] + boardState[3][2] + boardState[4][1])=== 4){
    oneFour.style.borderColor = 'yellow'
    twoThree.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourOne.style.borderColor = 'yellow'
    return boardState[1][4]
  }

	if(Math.abs(boardState[1][3] + boardState[2][2] + boardState[3][1] + boardState[4][0])=== 4){
    oneThree.style.borderColor = 'yellow'
    twoTwo.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    fourZero.style.borderColor = 'yellow'
    return boardState[1][3]
  }


// winning combos across row 2 - row 5 in the forward slash direction -- / / / /
  if(Math.abs(boardState[2][3] + boardState[3][2] + boardState[4][1] + boardState[5][0])=== 4){
    twoThree.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourOne.style.borderColor = 'yellow'
    fiveZero.style.borderColor = 'yellow'
    return boardState[2][3]
  }

	if(Math.abs(boardState[2][6] + boardState[3][5] + boardState[4][4] + boardState[5][3])=== 4){
    twoSix.style.borderColor = 'yellow'
    threeFive.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    return boardState[2][6]
  }

  if(Math.abs(boardState[2][4] + boardState[3][3] + boardState[4][2] + boardState[5][1])=== 4){
    twoFour.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    fiveOne.style.borderColor = 'yellow'
    return boardState[2][4]
  }

	if(Math.abs(boardState[2][5] + boardState[3][4] + boardState[4][3] + boardState[5][2])=== 4){
    twoFive.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    fiveTwo.style.borderColor = 'yellow'
    return boardState[2][5]
  }

// winning combos across row 2 - row 5 in the backward slash direction \ \ \ \
  if(Math.abs(boardState[2][0] + boardState[3][1] + boardState[4][2] + boardState[5][3])=== 4){
    twoZero.style.borderColor = 'yellow'
    threeOne.style.borderColor = 'yellow'
    fourTwo.style.borderColor = 'yellow'
    fiveThree.style.borderColor = 'yellow'
    return boardState[2][0]
  }

	if(Math.abs(boardState[2][1] + boardState[3][2] + boardState[4][3] + boardState[5][4])=== 4){
    twoOne.style.borderColor = 'yellow'
    threeTwo.style.borderColor = 'yellow'
    fourThree.style.borderColor = 'yellow'
    fiveFour.style.borderColor = 'yellow'
    return boardState[2][1]
  }

  if(Math.abs(boardState[2][2] + boardState[3][3] + boardState[4][4] + boardState[5][5])=== 4){
    twoTwo.style.borderColor = 'yellow'
    threeThree.style.borderColor = 'yellow'
    fourFour.style.borderColor = 'yellow'
    fiveFive.style.borderColor = 'yellow'
    return boardState[2][2]
  }

	if(Math.abs(boardState[2][3] + boardState[3][4] + boardState[4][5] + boardState[5][6])=== 4){
    twoThree.style.borderColor = 'yellow'
    threeFour.style.borderColor = 'yellow'
    fourFive.style.borderColor = 'yellow'
    fiveSix.style.borderColor = 'yellow'
    return boardState[2][3]
  }


  if (boardState.some(row => row.includes(null))) 
    {
return null
  } else {
    return 'T'
    }
}

function handleHover(cir) {
  if (isWinner){
    return
  }
  
  let sqIdx = cir.target.id.replace('sq', '')
    let rowIdx = parseInt(sqIdx[0])
    let colIdx = parseInt(sqIdx[1])

    if (boardState[rowIdx][colIdx]) 
      {
    return
    }

    previewer.forEach(preview => {
      const pColIdx = parseInt(preview.id.replace('c', ''))
      if (pColIdx === colIdx && playerTurn === 1) {
        preview.style.backgroundColor = 'blue'
      } else if (pColIdx === colIdx && playerTurn === -1) {
        preview.style.backgroundColor = 'red'
      } 
      else {
        preview.style.backgroundColor = ''
      }
    })
}

//initiated function upon starting the webpage
init()

