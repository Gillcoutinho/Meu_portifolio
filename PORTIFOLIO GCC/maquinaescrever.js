const textElement = document.getElementById("title");
const textToType = "Gilláine Coutinho";
let index = 0;

function typeText() {
  textElement.textContent = textToType.slice(0, index);
  index++;

  if (index > textToType.length) {
    clearInterval(typingInterval);
  }
}

const typingInterval = setInterval(typeText, 100); // Velocidade de digitação (em milissegundos)
