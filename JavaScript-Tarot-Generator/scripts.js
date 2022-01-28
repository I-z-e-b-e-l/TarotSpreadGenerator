arcana = ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant",
"The Lovers",
"The Chariot",
"Strength",
"The Hermit",
"Wheel of Fortune",
"Justice",
"The Hanged Man",
"Death",
"Temperance",
"The Devil",
"The Tower",
"The Star",
"The Moon",
"The Sun",
"Judgement",
"The World",
"Ace of Cups",
"Two of Cups",
"Three of Cups",
"Four of Cups",
"Five of Cups",
"Six of Cups",
"Seven of Cups",
"Eight of Cups",
"Nine of Cups",
"Ten of Cups",
"Page of Cups",
"Knight of Cups",
"Queen of Cups",
"King of Cups",
"Ace of Swords",
"Two of Swords",
"Three of Swords",
"Four of Swords",
"Five of Swords",
"Six of Swords",
"Seven of Swords",
"Eight of Swords",
"Nine of Swords",
"Ten of Swords",
"Page of Swords",
"Knight of Swords",
"Queen of Swords",
"King of Swords",
"Ace of Rods",
"Two of Rods",
"Three of Rods",
"Four of Rods",
"Five of Rods",
"Six of Rods",
"Seven of Rods",
"Eight of Rods",
"Nine of Rods",
"Ten of Rods",
"Page of Rods",
"Knight of Rods",
"Queen of Rods",
"King of Rods",
"Ace of Pentacles",
"Two of Pentacles",
"Three of Pentacles",
"Four of Pentacles",
"Five of Pentacles",
"Six of Pentacles",
"Seven of Pentacles",
"Eight of Pentacles",
"Nine of Pentacles",
"Ten of Pentacles",
"Page of Pentacles",
"Knight of Pentacles",
"Queen of Pentacles",
"King of Pentacles",
]

spread = []

//take in length of spread from user
//could change to a button selection on HTML and produde specific thread formats: past present future, etc.

let numberOfCards = parseInt(prompt("How many cards would you like in the spread?"), 10)
console.log(`This is the number of cards in the spread: ${numberOfCards}`)

//create a random nmber that is less or equal to the total number of card in the arcana array



//add cards to the spread by first indexing an item in the array and saving it as card


function createSpread() {
    while (spread.length < numberOfCards){
        //define a new random value each iteration
        let min = Math.ceil(0);
        let max = Math.floor(arcana.length);
        let randomValue = Math.floor(Math.random() * (max - min + 1) + min)
        
        card = arcana[randomValue];

        // generate a random binary value
        let reversed = Math.floor(Math.random() * 2);

        //write an if statement to attach "reversed" to the value of card
        if (reversed == 1){
            let reversedcard = (card + " Reversed");
            spread.splice(0,0,reversedcard);
            console.log(reversedcard)

        } else if (reversed == 0) {

            spread.splice(0,0,card);
            console.log(card)
        }


        
    }


}

createSpread()




// spread.splice(0,0,arcana[0])


console.log(spread)
  

// parseInt(text, 10);

// card = random.choice(arcana)
// arcana.pop(arcana.index(card))

//array.pop

//splice() method adds new items to an array
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.