var displayed = document.getElementById("displayed");
var quotesList = [
    `“Be yourself; everyone else is already taken.”`,
    `“So many books, so little time.”`,
    `“You only live once, but if you do it right, once is enough.”`,
    `“Be the change that you wish to see in the world.”`
];
var authorList = [
    `― Oscar Wilde`,
    `― Frank Zappa`,
    `― Mae West`,
    `― Mahatma Gandhi`
];


var displayedQuotes = [];

function displayQuote() {
    if (displayedQuotes.length === quotesList.length) {
        displayedQuotes = [];
    }

    var randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotesList.length);
    } while (displayedQuotes.includes(randomIndex));

    displayedQuotes.push(randomIndex);


    displayed.innerHTML = `<p class="pt-3">${quotesList[randomIndex]}</p> <p class="pt-3">${authorList[randomIndex]}</p>`;
    console.log(randomIndex);
}
