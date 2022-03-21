const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
   {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
   {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
   {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
   {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
   {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
   {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
   {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
   {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
   {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
   {
    name: 'pizza',
    img: 'images/pizza.png',
  }

]

cardArray.sort(() => 0.5 - Math.random())

const grid = document.querySelector('.grid')
const resultDisplay = document.querySelector('#result')
let cardChosen = []
let cardChosenIds = []
const cardsWon = []


function createBoard() {

  for (let i = 0; i < cardArray.length; i++) {

    const card = document.createElement('img')
    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    grid.append(card)

  }

}
createBoard()

function checkMatch() {
  const cards = document.querySelectorAll('.grid img')
  const optionOneId=cardChosenIds[0]
  const optionTwoId=cardChosenIds[1]
  console.log(cards)
  console.log('check for a match')

  if(optionOneId==optionTwoId) {
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Match!')
  }
  if (cardChosen[0] == cardChosen[1]){

  alert('You have a match!')
    cards[optionOneId].setAttribute('src', 'images/white.png')
    cards[optionTwoId].setAttribute('src', 'images/white.png')
    cards[optionOneId].removeEventListener('click', flipCard)
    cards[optionTwoId].removeEventListener('click', flipCard)
    cardsWon.push(cardChosen)
  } else {
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert('No match')
  }
  resultDisplay.innerHTML = cardsWon.length
  cardChosen = []
  cardChosenIds = []

  if (cardsWon.length == cardArray.length/2){
    resultDisplay.innerHTML = 'Congrats!'

  }

}

function flipCard() {
  const cardId=this.getAttribute('data-id')
  
  cardChosen.push(cardArray[cardId].name)
  cardChosenIds.push(cardId)
  console.log(cardChosen)
  console.log(cardChosenIds)

this.setAttribute('src', cardArray[cardId].img)
if(cardChosen.length === 2) {
  setTimeout(checkMatch, 500)
}



}