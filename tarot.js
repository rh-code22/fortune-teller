/* The cards are temporarily here as JSON objects in the top of the JS code file -
they will be pulled out later and replaced w/ a database that
can be modified though an admin panel.
*/
 

const riderJson = [
  {"id": "0", "name": "The Fool"},
  {"id": "1", "name": "The Magician"},
  {"id": "2", "name": "The High Priestess"},
  {"id": "3", "name": "The Empress"},
  {"id": "4", "name": "The Emperor"},
  {"id": "5", "name": "The Hierophant"},
  {"id": "6", "name": "The Lovers"},
  {"id": "7", "name": "The Chariot"},
  {"id": "8", "name": "Strength"},
  {"id": "9", "name": "The Hermit"},
  {"id": "10", "name": "The Wheel of Fortune"},
  {"id": "11", "name": "Justice"},
  {"id": "12", "name": "The Hanged Man"},
  {"id": "13", "name": "Death"},
  {"id": "14", "name": "Temperance"},
  {"id": "15", "name": "The Devil"},
  {"id": "16", "name": "The Blasted Tower"},
  {"id": "17", "name": "The Star"},
  {"id": "18", "name": "The Moon"},
  {"id": "19", "name": "The Sun"},
  {"id": "20", "name": "Judgement"},
  {"id": "21", "name": "The World"},
  {"id": "22", "name": "King of Wands"},
  {"id": "23", "name": "Queen of Wands"},
  {"id": "24", "name": "Knight of Wands"},
  {"id": "25", "name": "Page of Wands"},
  {"id": "26", "name": "Ace of Wands"},
  {"id": "27", "name": "Two of Wands"},
  {"id": "28", "name": "Three of Wands"},
  {"id": "29", "name": "Four of Wands"},
  {"id": "30", "name": "Five of Wands"},
  {"id": "31", "name": "Six of Wands"},
  {"id": "32", "name": "Seven of Wands"},
  {"id": "33", "name": "Eight of Wands"},
  {"id": "34", "name": "Nine of Wands"},
  {"id": "35", "name": "Ten of Wands"},
  {"id": "36", "name": "King of Cups"},
  {"id": "37", "name": "Queen of Cups"},
  {"id": "38", "name": "Knight of Cups"},
  {"id": "39", "name": "Page of Cups"},
  {"id": "40", "name": "Ace of Cups"},
  {"id": "41", "name": "Two of Cups"},
  {"id": "42", "name": "Three of Cups"},
  {"id": "43", "name": "Four of Cups"},
  {"id": "44", "name": "Five of Cups"},
  {"id": "45", "name": "Six of Cups"},
  {"id": "46", "name": "Seven of Cups"},
  {"id": "47", "name": "Eight of Cups"},
  {"id": "48", "name": "Nine of Cups"},
  {"id": "49", "name": "Ten of Cups"},
  {"id": "50", "name": "King of Swords"},
  {"id": "51", "name": "Queen of Swords"},
  {"id": "52", "name": "Knight of Swords"},
  {"id": "53", "name": "Page of Swords"},
  {"id": "54", "name": "Ace of Swords"},
  {"id": "55", "name": "Two of Swords"},
  {"id": "56", "name": "Three of Swords"},
  {"id": "57", "name": "Four of Swords"},
  {"id": "58", "name": "Five of Swords"},
  {"id": "59", "name": "Six of Swords"},
  {"id": "60", "name": "Seven of Swords"},
  {"id": "61", "name": "Eight of Swords"},
  {"id": "62", "name": "Nine of Swords"},
  {"id": "63", "name": "Ten of Swords"},
  {"id": "64", "name": "King of Pentacles"},
  {"id": "65", "name": "Queen of Pentacles"},
  {"id": "66", "name": "Knight of Pentacles"},
  {"id": "67", "name": "Page of Pentacles"},
  {"id": "68", "name": "Ace of Pentacles"},
  {"id": "69", "name": "Two of Pentacles"},
  {"id": "70", "name": "Three of Pentacles"},
  {"id": "71", "name": "Four of Pentacles"},
  {"id": "72", "name": "Five of Pentacles"},
  {"id": "73", "name": "Six of Pentacles"},
  {"id": "74", "name": "Seven of Pentacles"},
  {"id": "75", "name": "Eight of Pentacles"},
  {"id": "76", "name": "Nine of Pentacles"},
  {"id": "77", "name": "Ten of Pentacles"}
];

const kingWenJson = [
  {"id": "0", "name": "Hexagram for the Creative Heaven"},
  {"id": "1", "name": "Hexagram for the Receptive Earth"},
  {"id": "2", "name": "Hexagram for Difficult at the Beginning"},
  {"id": "3", "name": "Hexagram for Youthful Folly"},
  {"id": "4", "name": "Hexagram for Waiting"},
  {"id": "5", "name": "Hexagram for Conflict"},
  {"id": "6", "name": "Hexagram for the Army"},
  {"id": "7", "name": "Hexagram for Holding Together"},
  {"id": "8", "name": "Hexagram for Small Taming"},
  {"id": "9", "name": "Hexagram for Treading"},
  {"id": "10", "name": "Hexagram for Peace"},
  {"id": "11", "name": "Hexagram for Standstill"},
  {"id": "12", "name": "Hexagram for Fellowship"},
  {"id": "13", "name": "Hexagram for Great Possession"},
  {"id": "14", "name": "Hexagram for Modesty"},
  {"id": "15", "name": "Hexagram for Enthusiasm"},
  {"id": "16", "name": "Hexagram for Following"},
  {"id": "17", "name": "Hexagram for Work on the Decayed"},
  {"id": "18", "name": "Hexagram for Approach"},
  {"id": "19", "name": "Hexagram for Contemplation"},
  {"id": "20", "name": "Hexagram for Biting Through"},
  {"id": "21", "name": "Hexagram for Grace"},
  {"id": "22", "name": "Hexagram for Splitting Apart"},
  {"id": "23", "name": "Hexagram for Return"},
  {"id": "24", "name": "Hexagram for Innocence"},
  {"id": "25", "name": "Hexagram for Great Taming"},
  {"id": "26", "name": "Hexagram for Mouth Corners"},
  {"id": "27", "name": "Hexagram for Great Preponderance"},
  {"id": "28", "name": "Hexagram for the Abysmal Water"},
  {"id": "29", "name": "Hexagram for the Clinging Fire"},
  {"id": "30", "name": "Hexagram for Influence"},
  {"id": "31", "name": "Hexagram for Duration"},
  {"id": "32", "name": "Hexagram for Retreat"},
  {"id": "33", "name": "Hexagram for Great Power"},
  {"id": "34", "name": "Hexagram for Progress"},
  {"id": "35", "name": "Hexagram for Darkening of the Light"},
  {"id": "36", "name": "Hexagram for the Family"},
  {"id": "37", "name": "Hexagram for Opposition"},
  {"id": "38", "name": "Hexagram for Obstruction"},
  {"id": "39", "name": "Hexagram for Deliverance"},
  {"id": "40", "name": "Hexagram for Decrease"},
  {"id": "41", "name": "Hexagram for Increase"},
  {"id": "42", "name": "Hexagram for Breakthrough"},
  {"id": "43", "name": "Hexagram for Coming to Meet"},
  {"id": "44", "name": "Hexagram for Gathering Together"},
  {"id": "45", "name": "Hexagram for Pushing Upward"},
  {"id": "46", "name": "Hexagram for Oppression"},
  {"id": "47", "name": "Hexagram for the Well"},
  {"id": "48", "name": "Hexagram for Revolution"},
  {"id": "49", "name": "Hexagram for the Cauldron"},
  {"id": "50", "name": "Hexagram for the Arousing Thunder"},
  {"id": "51", "name": "Hexagram for the Keeping Still Mountain"},
  {"id": "52", "name": "Hexagram for Development"},
  {"id": "53", "name": "Hexagram for the Marrying Maiden"},
  {"id": "54", "name": "Hexagram for Abundance"},
  {"id": "55", "name": "Hexagram for the Wanderer"},
  {"id": "56", "name": "Hexagram for the Gentle Wind"},
  {"id": "57", "name": "Hexagram for the Joyous Lake"},
  {"id": "58", "name": "Hexagram for Dispersion"},
  {"id": "59", "name": "Hexagram for Limitation"},
  {"id": "60", "name": "Hexagram for Inner Truth"},
  {"id": "61", "name": "Hexagram for Small Preponderance"},
  {"id": "62", "name": "Hexagram for After Completion"},
  {"id": "63", "name": "Hexagram for Before Completion"}
];

// Card/sticks Layout Data

const oneCardJson = [
  { "id": "0", "name": "Fortune"}
];

const threeCardJson = [
  {"id": "0", "name": "Past"},
  {"id": "1", "name": "Present"},
  {"id": "2", "name": "Future"}
];

const iChingJson = [
  { "id": "0", "name": "Base"},
  { "id": "1", "name": "Transform"}
];

const layoutTypes = [
  {id: 0, name: "oneCard", items: 1, type: "tarot", json: oneCardJson, propername: "One Card Tarot"},
  {id: 1, name: "threeCard", items: 3, type: "tarot", json: threeCardJson, propername: "Three Card Tarot"},
  {id: 2, name: "iChing", items: 2, type: "iChing", json: iChingJson, propername: "iChing"}
];

const stackTypes = [
  {id: 0, name: "rider", items: 78, indexing: 0, type: "tarot", propername: "The Rider Tarot Deck", json: riderJson},
  {id: 1, name: "kingWen", items: 3, indexing: 1, type: "iChing", propername: "King Wen Order", json: kingWenJson}
];



class Stack {
  constructor(divinationObject) {
    this.stack = [];
    this.stackDB = divinationObject;
  }
  lookup(jsonDB,target) {
    return jsonDB.find(item => item.id == target);
  }
}

class Table extends Stack {
  constructor(divinationObject,layoutPattern) {
    super(divinationObject);
    this.layout = this.stack;
    this.layoutDB = layoutPattern;
  }

  cartomancy(deck) {
    this.spread = [];
    for(let i = 0; i < this.layoutDB.length; i++) {
      this.spread[i] = {card: deck[i].name, position: this.lookup(this.layoutDB,i).name, facing: Math.round(Math.random())};
    }
    return this.spread;
  }
}

class Deck extends Stack {
  constructor(divinationObject) {
    super(divinationObject);
    this.deck = [];
    this.createDeck(this.stackDB.length);
  }
  shuffle() {
    let i = this.deck.length, j;
    while (i) {
      j = Math.floor(Math.random() * i--);
      [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
    }
  }
  createDeck(cards) {
    this.deck = this.stack;
    while (cards--) {
      this.deck.push(this.lookup(this.stackDB,cards));
    }
    this.shuffle();
  }
  returnDeck() {
    return this.deck;
  }
  deal(hand) {
    return this.deck.splice(0,hand);
  }
}

class Controller {
  
  choicesDeck() {
    let deckString = "";
    for (let i=0; i < stackTypes.length; i++) {
      deckString += "<option>" + stackTypes[i].propername + "</option>";
    }
    document.getElementById('stack-type').innerHTML = deckString;
  }
  
  choicesLayout(thisType) {
    let layoutString = "";
    for (let i=0; i < layoutTypes.length; i++) {
      if(layoutTypes[i].type === thisType) {
        layoutString += "<option>" + layoutTypes[i].propername + "</option>";
      }
    }
    document.getElementById('layout-type').innerHTML = layoutString;
  }
  
  selectedDeck(chosenDeck) {
    return this.initialize(stackTypes,chosenDeck).json;
  }
  
  selectedLayout(chosenLayout) {
    return this.initialize(layoutTypes,chosenLayout).json;
  }
  initialize(typeList,typeSelection) {
    return typeList.find(item => item.propername === typeSelection);
  }
}


function showFortune(reading) {
  let fortune = "";
  fortune += "<h1>Fortune Teller</h1>" + " <br>" + "<h3>Your fortune has been told ...</h3>";
  for(let i = 0; i < reading.length; i++) {
     fortune += "<p>" + "<b>" + reading[i].position + ":</b> " + reading[i].card + ", Facing: " + reading[i].facing + " </p>";
  }
  document.getElementById('fortuneDiv').innerHTML = fortune;
}

function tellFortune(chosenDeck,chosenLayout) {
  const method = new Deck(selection.selectedDeck(chosenDeck));
  const table = new Table(selection.selectedDeck(chosenDeck),selection.selectedLayout(chosenLayout));
  table.layout = method.deal(3);
  let ourDeck = method.returnDeck();
  let reading = table.cartomancy(ourDeck);
  showFortune(reading);
}

// Set up the first select menu with options populated from the stack types data 'stackTypes'

const selection = new Controller();
selection.choicesDeck();
if (document.getElementById('stack-type').options[0].selected === true) {
  selection.choicesLayout("tarot");
}


window.onload = function () {
  document.getElementById('dealBtn').onclick=function() {
    let chosenDeck = document.getElementById('stack-type').value;
    let chosenLayout = document.getElementById('layout-type').value;
    tellFortune(chosenDeck,chosenLayout);
  };
};

// populate the "Divination Type" select menu w/ ID of 'layout-type'
function populateLayout() {
   return selection.choicesLayout(selection.initialize(stackTypes, document.getElementById('stack-type').value).type);
}


/* event listener for selected divination type - after user selects a divination type,
the menu will populate with correct options for that kind of fortune telling (either
tarot or)
*/
document.getElementById('stack-type').addEventListener('change', populateLayout);