// Array of motivational quotes
const quotes = [
    "Believe you can and you're halfway there.",
    "You are never too old to set another goal or to dream a new dream.",
    "Act as if what you do makes a difference. It does.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Your limitation—it's only your imagination.",
    "Dream it. Wish it. Do it.",
    "Sometimes later becomes never. Do it now.",
    "Great things never come from comfort zones.",
    "Dream bigger. Do bigger.",
    "Push yourself, because no one else is going to do it for you."
];

let currentQuote = ""; // Store the currently displayed quote
const favoriteQuotes = [];  
 
function getQuote() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            resolve(quotes[randomIndex]);
        }, 1000); 
    });
}

 
function displayQuote(quote) {
    const quoteDisplay = document.getElementById("quoteDisplay");
    quoteDisplay.textContent = quote;
    currentQuote = quote;

  
    const favoriteBtn = document.getElementById("favoriteBtn");
    favoriteBtn.style.display = favoriteQuotes.includes(quote) ? "none" : "inline-block";
}

 
function addToFavorites() {
    if (currentQuote && !favoriteQuotes.includes(currentQuote)) {
        favoriteQuotes.push(currentQuote);
        updateFavorites();
    }
    document.getElementById("favoriteBtn").style.display = "none";  
}

 
function updateFavorites() {
    const favoriteQuotesDiv = document.getElementById("favoriteQuotes");
    favoriteQuotesDiv.innerHTML = "";  

    favoriteQuotes.forEach((quote) => {
        const quoteDiv = document.createElement("div");
        quoteDiv.className = "quote";
        quoteDiv.textContent = quote;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove";
        removeBtn.style.marginLeft = "10px";
        removeBtn.onclick = () => {
            favoriteQuotes.splice(favoriteQuotes.indexOf(quote), 1);
            updateFavorites();
        };

        quoteDiv.appendChild(removeBtn);
        favoriteQuotesDiv.appendChild(quoteDiv);
    });
}

 
document.getElementById("getQuoteBtn").addEventListener("click", async () => {
    const quote = await getQuote();  
    displayQuote(quote);
});

document.getElementById("favoriteBtn").addEventListener("click", addToFavorites);

