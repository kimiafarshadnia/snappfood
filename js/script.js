var array = ["img/b3.jpg", "img/b4.jpg", "img/b5.jpg"];

function shuffle(array) {
  var currentIndex = array.length;
  var temporaryValue;
  var randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
var shuffled_images = shuffle(array);
var yourbackground = document.getElementById("change");
yourbackground.style.backgroundImage = "url(" + shuffled_images[0] + ")";
