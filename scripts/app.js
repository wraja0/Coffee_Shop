// Elements 
let score = 0;
let coffees = ['Decaf','Regular Coffee','Dark Roast'];
let milks = ["Skim Milk", 'Whole Milk', 'Cream'];
let sugars = ['Regular Sugars','Splendas','Equals',"Sweet'n Lows"];
//Objects
let playerChoice = {
    sugarLevel: 0,
    sugarChoice: 0 
};
let order = {
    dairyChoice : null,
    coffeeChoice: null,
    sugarChoice: null,
    sugarLevel: null,
    number: 0
};
// DOM elements
let ecup = $('.emptycup');
let fcup = $('.fullcup');
let nameButton = $('.namebutton');
let startButton = $('.startbutton');
let gameitems = $('.gameitem');
let wMilkButton = $('.wholemilkbutton');
let sMilkButton = $('.skimmilkbutton');
let creamButton = $(".creambutton");
let decafButton = $('.decafcoffeebutton');
let drButton = $('.drcoffeebutton');
let regCoffeeButton = $('.regcoffeebutton');
let sugarButton = $('.gamesugar');
let splendaButton = $('.gamesplenda');
let equalButton = $('.gameequal');
let sweetnlowButton = $('.gamesweetnlow');
let newCoffeButton = $('.coffeebutton');
let serveCoffeeButton = $('.servecoffeebutton');
let endButton = $('.endgamebutton');
let gameDiv = $('.gamediv');
let gameConsole = $('.gameconsole')
// Functions
function showEcup() {
    ecup.show();
    fcup.hide();
}
function showFcup() {
    fcup.show();
    ecup.hide();
}
function scroll() {
    gameConsole.scrollTop(gameConsole.prop("scrollHeight"));
}
function submitName(event) {
    let name = $('.inputname').val();
    $('.gamehead').prepend(`<h3>${name}</h3>`);
    $('.nameheader').remove();
    $('.inputname').remove();
    nameButton.remove();
    startButton.show();
    gameConsole.append(`<p>Hello ! Welcome to Coffe Shop.</p>
    <p>Please Click on the Start Game button to start the game and load your first order !</p>`);
    scroll();
}
function gameClear() {
    for (i=0;i<gameitems.length ;i++) {
        $(gameitems[i]).hide();
    }
    startButton.hide();
}
function gameSet() {
    for (i=0;i<gameitems.length;i++) {
        $(gameitems[i]).show();
    }
    showEcup();
    startButton.hide();
    generateOrder();
}
function random(n) {
    return Math.floor(Math.random() * n);
}
function generateOrder() {
    order.dairyChoice = random(3);
    order.coffeeChoice = random(3);
    order.sugarChoice = random(4);
    order.sugarLevel = random(6);
    if (order.sugarLevel === 0) {
        order.sugarChoice = 0;
        order.sugarLevel = 0;
    }
    order.number += 1;
    gameConsole.append(`<p>Order #${order.number}</p>`);
    if (order.sugarLevel === 0) {
        gameConsole.append(`<p>An unsweetened ${coffees[order.coffeeChoice]} with ${milks[order.dairyChoice]} </p>`);
    }
    else {gameConsole.append(`<p>A ${coffees[order.coffeeChoice]} with ${milks[order.dairyChoice]} and ${order.sugarLevel} ${sugars[order.sugarChoice]} </p>`);}
    scroll();
}
function setNewCoffee() {
    for (i=0;i<gameitems.length;i++) {
        $(gameitems[i]).show();
    }
    showEcup();
    playerChoice.dairyChoice = null;
    playerChoice.coffeeChoice = null;
    playerChoice.sugarLevel= 0;
    playerChoice.sugarChoice = 0;
    gameConsole.append('<p>You threw out the old cup of coffee and grabbed a new one.</p>');
    scroll();
}
function checkOrder() {
    if (order.dairyChoice === playerChoice.dairyChoice) {
        if (order.coffeeChoice === playerChoice.coffeeChoice) {
            if (order.sugarChoice === playerChoice.sugarChoice) {
                if (order.sugarLevel === playerChoice.sugarLevel) {
                    score += 10;
                    gameConsole.append(`<p>Great Work !</p><p> Your Score is now ${score}</p>`);
                    for (i=0;i<gameitems.length;i++) {
                        $(gameitems[i]).show();
                    }
                    playerChoice.dairyChoice = null;
                    playerChoice.coffeeChoice = null;
                    playerChoice.sugarLevel= 0;
                    playerChoice.sugarChoice = 0;
                    generateOrder();
                    showEcup();
                }
                else {
                    gameConsole.append(`<p>Wrong Sugar Level !</p>`);
            
                } 
            }
            else {
                gameConsole.append(`<p>Wrong Sugar Type !</p>`);
            }
        }
        else {
            gameConsole.append(`<p>Wrong Coffee Type !</p>`);
        }
    }
    else {
        gameConsole.append(`<p>Wrong Dairy Type !</p>`);
    }
    scroll();
}
function endGame() {
    gameClear();
    startButton.show();
    gameConsole.append(`<p>GAME OVER !</p>
    <p> You scored ${score} !</p>
    <p>To start a new Game Click on Start Game.</p>`);
    order.number = 0;
    scroll();
}
// Event Listener Callback Functions
function setWMilk() {
    playerChoice.dairyChoice = 1;
    $('.creambutton').hide();
    $('.skimmilkbutton').hide();
    gameConsole.append('<p> You just poured Whole Milk.</p>');
    scroll();
}
function setSMilk() {
    playerChoice.dairyChoice = 0;
    $('.creambutton').hide();
    $('.wholemilkbutton').hide();
    gameConsole.append('<p> You just poured Skim Milk.</p>');
    scroll();
}
function setCream() {
    playerChoice.dairyChoice = 2;
    $('.wholemilkbutton').hide();
    $('.skimmilkbutton').hide();
    gameConsole.append('<p> You just poured Creamer.</p>');
    scroll();
}
function setDecaf() {
    playerChoice.coffeeChoice = 0;
    $('.regcoffeebutton').hide();
    $('.drcoffeebutton').hide();
    gameConsole.append('<p> You just poured Decaf Coffee.</p>');
    showFcup();
    scroll();
}
function setRegCoffee() {
    playerChoice.coffeeChoice = 1;
    $('.decafcoffeebutton').hide();
    $('.drcoffeebutton').hide();
    gameConsole.append('<p> You just poured Regular Coffee.</p>');
    showFcup();
    scroll();
}
function setDrCoffee() {
    playerChoice.coffeeChoice = 2;
    $('.regcoffeebutton').hide();
    $('.decafcoffeebutton').hide();
    gameConsole.append('<p> You just poured Dark Roast Coffee.</p>');
    showFcup();
    scroll();
}
function setRegSugar() {
    playerChoice.sugarChoice = 0;
    playerChoice.sugarLevel +=1;
    $('.gameequal').hide();
    $('.gamesplenda').hide();
    $('.gamesweetnlow').hide();
    gameConsole.append('<p> You just added one Regular Sugar.</p>');
    scroll();
}
function setSplenda() {
    playerChoice.sugarChoice = 1; 
    playerChoice.sugarLevel +=1;
    $('.gameequal').hide();
    $('.gamesugar').hide();
    $('.gamesweetnlow').hide();
    gameConsole.append('<p> You just added one Splenda.</p>');
    scroll();
}
function setEqual() {
    playerChoice.sugarChoice = 2;
    playerChoice.sugarLevel +=1;
    $('.gamesugar').hide();
    $('.gamesplenda').hide();
    $('.gamesweetnlow').hide();
    gameConsole.append('<p> You just added one Equal.</p>');
    scroll();
}
function setSweetnLow() {
    playerChoice.sugarChoice = 3;
    playerChoice.sugarLevel +=1;
    $('.gameequal').hide();
    $('.gamesplenda').hide();
    $('.gamesugar').hide();
    gameConsole.append("<p> You just added one Sweet'n Lows.</p>");
    scroll();
}
// Event Lisenters
nameButton.on('click', submitName);
startButton.on('click', gameSet);
wMilkButton.on('click', setWMilk);
sMilkButton.on('click', setSMilk);
creamButton.on('click', setCream);
decafButton.on('click', setDecaf);
regCoffeeButton.on('click', setRegCoffee);
drButton.on('click', setDrCoffee);
sugarButton.on('click', setRegSugar);
splendaButton.on('click', setSplenda);
equalButton.on('click', setEqual);
sweetnlowButton.on('click', setSweetnLow);
newCoffeButton.on('click', setNewCoffee);
serveCoffeeButton.on('click', checkOrder);
endButton.on('click', endGame);
// Function to set the game
gameClear();
// when there is excess demand for it the body will begin to heal itself in a way unknown to some. For example did you k
// know eating cool candys does the oppisite for most places and in fact it is known to incresse the rate at which most things 
// even in the event of a cooling period there is still a signifgant draft as for the kincycles that includes place that dont work out 
// for any advantageous reason its the real reason when you type on a computer usally you will hear people move their arms at a rate not 
// currently acceptable to the main case. Half the time when you encounter a wide range of basal habits the ones that stand out are usually 
// benign in nature. I don't think it would be realistic if she went ahead and approved it now. She should have done it on friday when there was
// space for all of us to practice