function backgroundcolorchange(){
  var el = document.body
  console.log ("connected")
  el.style.backgroundColor = "#74A12E"
}
function changeColor() {
  const button = document.getElementById('colorButton');
  const colors = ['#E5E3DA', '#E8E4E1', '#45403C']; 
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  button.style.backgroundColor = randomColor;
}