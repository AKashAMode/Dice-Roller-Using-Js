

const diceimg = document.getElementById('dice-image');

//this function reset the image
function resetimg(){
    diceimg.src = "./images/dice.png";
}


function rolldice(){
  
    const min = 1;
    const max = 7;

    let randomnum = Math.floor(Math.random() * (max - min)) + min;
       
    if(randomnum == 1){
        diceimg.src = './images/dice-1.png';
    }else if(randomnum == 2){
        diceimg.src = './images/dice-2.png';
    }else if(randomnum == 3){
        diceimg.src = './images/dice-3.png';
    }else if(randomnum == 4){
        diceimg.src = './images/dice-4.png';
    }else if(randomnum == 5){
        diceimg.src = './images/dice-5.png';
    }else if(randomnum == 6){
        diceimg.src = './images/dice-6.png'; 
    }

    setTimeout(resetimg, 3000);
}