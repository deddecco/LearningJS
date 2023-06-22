document.addEventListener('DOMContentLoaded', () => {
    //card options
    const cardArray = [{
        name: 'fries', img: 'images/fries.png'
    }, {
        name: 'cheeseburger', img: 'images/cheeseburger.png'
    }, {
        name: 'ice-cream', img: 'images/ice-cream.png'
    }, {
        name: 'pizza', img: 'images/pizza.png'
    }, {
        name: 'milkshake', img: 'images/milkshake.png'
    }, {
        name: 'hotdog', img: 'images/hotdog.png'
    }, {
        name: 'fries', img: 'images/fries.png'
    }, {
        name: 'cheeseburger', img: 'images/cheeseburger.png'
    }, {
        name: 'ice-cream', img: 'images/ice-cream.png'
    }, {
        name: 'pizza', img: 'images/pizza.png'
    }, {
        name: 'milkshake', img: 'images/milkshake.png'
    }, {
        name: 'hotdog', img: 'images/hotdog.png'
    }]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    // pair of cards
    let cardsChosen = []
    // id that doesn't give away the content even if user inspects
    let cardsChosenId = []
    // matches for which we don't want any more clicking after the fact
    let cardsWon = []

    //create game board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]


        // clicked on the same image
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('You have clicked the same image!')
        }
        // clicked on different cards that are a match
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            // disallow clicking on cards that match after a match has been confirmed
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        }
        // clicked on different cards that don't match
        else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert('Sorry, try again')
        }
        // empty the array after looking at a pair and going through the check for a match for that pair
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        // if every card has been matched with its partner, the game is over
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all the matches!'
        }
    }

    //flip your card
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})