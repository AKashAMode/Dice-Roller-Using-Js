

const diceimg = document.getElementById('dice-image');


function rolldice(){
  
    let min = 1;
    let max = 6;

    let roll = Math.floor(Math.random() * (max - min)) + min;

    console.log(roll);

}