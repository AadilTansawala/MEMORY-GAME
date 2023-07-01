const cardArray = [
    {
        name : "fries",
        img : 'images/fries.png'
    },
    {
        name : "cheeseburger",
        img : 'images/cheeseburger.png'
    },
    {
        name : "hotdog",
        img : 'images/hotdog.png'
    },
    {
        name : "ice-cream",
        img : 'images/ice-cream.png'
    },
    {
        name : "milkshake",
        img : 'images/milkshake.png'
    },
    {
        name : "pizza",
        img : 'images/pizza.png'
    },
    {
        name : "fish",
        img : 'images/fish.png'
    },
    {
        name : "tacos",
        img : 'images/tacos.png'
    },

    {
        name : "fries",
        img : 'images/fries.png'
    },
    {
        name : "cheeseburger",
        img : 'images/cheeseburger.png'
    },
    {
        name : "hotdog",
        img : 'images/hotdog.png'
    },
    {
        name : "ice-cream",
        img : 'images/ice-cream.png'
    },
    {
        name : "milkshake",
        img : 'images/milkshake.png'
    },
    {
        name : "pizza",
        img : 'images/pizza.png'
    },
    {
        name : "fish",
        img : 'images/fish.png'
    },
    {
        name : "tacos",
        img : 'images/tacos.png'
    }
]

cardArray.sort(() => 0.5-Math.random())

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardChoosen = [];
let cardChoosenIds = [];
const cardsWon = [];

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
        const card = document.createElement('img');
        card.style.margin = '6px';
        card.setAttribute('src',"images/blank.png");
        card.setAttribute("data-id",i);
        card.addEventListener('click',flipCard)
        gridDisplay.appendChild(card);

    }
}
createBoard();

function checkMatch(){
    const cards = document.querySelectorAll("img");
    const optiononeId = cardChoosenIds[0];
    const optiontwoId = cardChoosenIds[1];
    if( optiononeId === optiontwoId ){
        cards[optiononeId].setAttribute('src','images/blank.png');
        cards[optiontwoId].setAttribute('src','images/blank.png');
        alert("You've clicked the Same Image !");
    }
    if(cardChoosen[0] === cardChoosen[1]){
        alert("You found a match!");
        cards[optiononeId].setAttribute('src','images/white.png');
        cards[optiontwoId].setAttribute('src','images/white.png');
        cards[optiononeId].removeEventListener('click',flipCard);
        cards[optiontwoId].removeEventListener('click',flipCard);
        cardsWon.push(cardChoosen);
    }
    else{
        cards[optiononeId].setAttribute('src','images/blank.png');
        cards[optiontwoId].setAttribute('src','images/blank.png');
    }

    resultDisplay.innerHTML = cardsWon.length;

    cardChoosen = [];
    cardChoosenIds = [];

    if(cardsWon.length === cardArray.length/2){
        resultDisplay.innerHTML = "Congratulations you Won !"
    }

}

function flipCard(){
    const cardId = this.getAttribute('data-Id');
    cardChoosen.push(cardArray[cardId].name);
    cardChoosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img);

    if(cardChoosen.length === 2){
        setTimeout(checkMatch, 500)
    }
}