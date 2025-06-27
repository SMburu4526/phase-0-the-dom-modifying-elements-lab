// Remove the existing <main> element
const main = document.getElementById('main');
main.remove();

// Create a new <h1> element
const newHeader = document.createElement('h1');

// Set its id to "victory"
newHeader.id = 'victory';

// Set the inner text
newHeader.textContent = "Stephen Mburu is the champion";

// Append the new header to the body
document.body.append(newHeader);
