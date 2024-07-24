// Quotes array with sample data
let quotes = [
  { text: "The only limit to our realization of tomorrow is our doubts of today.", category: "Inspiration" },
  { text: "Do not wait to strike till the iron is hot; but make it hot by striking.", category: "Motivation" },
  { text: "The best way to predict the future is to create it.", category: "Future" }
];

// Function to show a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById('quoteDisplay');
  quoteDisplay.textContent = `"${quote.text}" - ${quote.category}`;
}

// Function to create the form for adding new quotes
function createAddQuoteForm() {
  const formContainer = document.getElementById('quoteFormContainer');
  
  const formHtml = `
    <div>
      <input id="newQuoteText" type="text" placeholder="Enter a new quote" />
      <input id="newQuoteCategory" type="text" placeholder="Enter quote category" />
      <button onclick="addQuote()">Add Quote</button>
    </div>
  `;

  formContainer.innerHTML = formHtml;
}

// Function to add a new quote
function addQuote() {
  const newQuoteText = document.getElementById('newQuoteText').value;
  const newQuoteCategory = document.getElementById('newQuoteCategory').value;

  if (newQuoteText && newQuoteCategory) {
    // Add the new quote to the quotes array
    quotes.push({ text: newQuoteText, category: newQuoteCategory });

    // Create new DOM elements for the new quote
    const newQuoteDiv = document.createElement('div');
    newQuoteDiv.textContent = `"${newQuoteText}" - ${newQuoteCategory}`;

    // Append the new quote to the quoteDisplay div
    const quoteDisplay = document.getElementById('quoteDisplay');
    quoteDisplay.appendChild(newQuoteDiv);

    // Clear the input fields
    document.getElementById('newQuoteText').value = '';
    document.getElementById('newQuoteCategory').value = '';

    alert('New quote added!');
  } else {
    alert('Please enter both a quote and a category.');
  }
}

// Event listener for the "Show New Quote" button
document.getElementById('newQuote').addEventListener('click', showRandomQuote);

// Initialize with a random quote and create the add quote form
document.addEventListener('DOMContentLoaded', () => {
  showRandomQuote();
  createAddQuoteForm();
});
