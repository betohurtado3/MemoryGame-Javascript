document.addEventListener('DOMContentLoaded', () => {

    //Card Options
    const cardArray = [{
            name: 'demo',
            img: 'images/demo.png'
        },
        {
            name: 'demo',
            img: 'images/demo.png'
        },
        {
            name: 'homero',
            img: 'images/homero.png'
        },
        {
            name: 'homero',
            img: 'images/homero.png'
        },
        {
            name: 'monito',
            img: 'images/monito.png'
        },
        {
            name: 'monito',
            img: 'images/monito.png'
        },
        {
            name: 'nemo',
            img: 'images/nemo.png'
        },
        {
            name: 'nemo',
            img: 'images/nemo.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'panda',
            img: 'images/panda.png'
        },
        {
            name: 'robot',
            img: 'images/robot.png'
        },
        {
            name: 'robot',
            img: 'images/robot.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        {
            name: 'white',
            img: 'images/white.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        },
        {
            name: 'blank',
            img: 'images/blank.png'
        }
    ]



    cardArray.sort(() => 0.5 - Math.random())

    //Create the board

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    ///check form matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png')
            cards[optionTwoId].setAttribute('src', 'images/blank.png')
            alert("Sorry dude, try again")
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congrats !'
        }
    }

    ///Flip cards function
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }
    
    createBoard()

})