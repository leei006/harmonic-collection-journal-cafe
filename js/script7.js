
const spanishWords = [
    'la cabra = goat', 'café = coffee', 'el grano de café = bean', 'cafeto = coffee tree',
  ];
  function generateWord() {
   
    const randomIndex = Math.floor(Math.random() * spanishWords.length);
 
    const wordDisplay = document.getElementById('word-display');
    wordDisplay.textContent = spanishWords[randomIndex];
  }
  