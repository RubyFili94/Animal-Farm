var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

  });

}

document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound (key) {
   switch(key) {
    case "w":
        var tom1 = new Audio("sounds/dog-barking.mp3");
        tom1.play();         
      break;
    
      case "a":
        var tom1 = new Audio("sounds/cat-meow.mp3");
        tom1.play();         
      break;

      case "s":
        var tom1 = new Audio("sounds/cow-moo.mp3");
        tom1.play();         
      break;

      case "d":
        var tom1 = new Audio("sounds/horse.mp3");
        tom1.play();         
      break;

      case "j":
        var tom1 = new Audio("sounds/sheep.mp3");
        tom1.play();         
      break;

      case "k":
        var tom1 = new Audio("sounds/pig.mp3");
        tom1.play();         
      break;

      case "l":
        var tom1 = new Audio("sounds/hen.mp3");
        tom1.play();         
      break;

      default: console.log(key);

   }

}