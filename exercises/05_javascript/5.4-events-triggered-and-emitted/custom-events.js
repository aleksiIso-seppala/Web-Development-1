
const button = document.getElementById('roll-button');

button.addEventListener('click', rollDice);

const rollEvent = new CustomEvent('diceRolled',{
});

document.addEventListener('rollDice', (e) => {


    document.getElementById('totals').querySelector('span').innerHTML = Number(document.getElementById('totals').querySelector('span').innerHTML)+1;
    var current = e.detail.value;

    var text = "template"+current;
    console.log(text);
    button.innerHTML = "";
    button.innerHTML = document.getElementById(text).innerHTML;

    
    if(current == 1){
        if(document.getElementById('ones').querySelector('p').innerHTML == '-'){
            document.getElementById('ones').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('ones').querySelector('p').innerHTML = Number(document.getElementById('ones').querySelector('p').innerHTML)+1;
        }
    }
    else if(current == 2){
        if(document.getElementById('twos').querySelector('p').innerHTML == '-'){
            document.getElementById('twos').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('twos').querySelector('p').innerHTML = Number(document.getElementById('twos').querySelector('p').innerHTML)+1;
        }
    }
    else if(current == 3){
        if(document.getElementById('threes').querySelector('p').innerHTML == '-'){
            document.getElementById('threes').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('threes').querySelector('p').innerHTML = Number(document.getElementById('threes').querySelector('p').innerHTML)+1;
        }
    }
    else if(current == 4){
        if(document.getElementById('fours').querySelector('p').innerHTML == '-'){
            document.getElementById('fours').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('fours').querySelector('p').innerHTML = Number(document.getElementById('fours').querySelector('p').innerHTML)+1;
        }
    }
    else if(current == 5){
        if(document.getElementById('fives').querySelector('p').innerHTML == '-'){
            document.getElementById('fives').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('fives').querySelector('p').innerHTML = Number(document.getElementById('fives').querySelector('p').innerHTML)+1;
        }
    }
    else if(current == 6){
        if(document.getElementById('sixes').querySelector('p').innerHTML == '-'){
            document.getElementById('sixes').querySelector('p').innerHTML = 1;
        }
        else{
            document.getElementById('sixes').querySelector('p').innerHTML = Number(document.getElementById('sixes').querySelector('p').innerHTML)+1;
        }
    }

});

