import random
# from random import choice

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

numberofcards = int(input("How many cards would you like in the spread? Please enter a number: "))

# if type(numberofcards) == int:
#   print("yes")
# else:
#   print ("no")

# make an if/else statement to validate number? 
# tried validating w/ isnumeric(), isdigit(), and type() - haven't figured it out yet


def create_spread():
  while (len(spread)) < numberofcards:
    card = random.choice(arcana)
    arcana.pop(arcana.index(card))

    isthiscardreversed = random.choice(['yes', 'no'])
    if isthiscardreversed == 'yes':
      card = card + " Reversed"
      spread.append(card)
    else: 
      spread.append(card)

  # print(spread)

  def print_spread_by_line():
    i = 0
    while i < (len(spread)):
      print(spread[i])
      i += 1
  print_spread_by_line()


if numberofcards <= 78:
  print("...")
  create_spread()
else:
  print ("There are only 78 cards in the deck, smartass")
  