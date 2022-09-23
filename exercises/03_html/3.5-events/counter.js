const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');

decrement.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter').innerHTML);
    var nValue = 0;
    if(cValue == -5){
        nValue = cValue * (-1);
    }
    else{
        nValue = cValue - 1;
    }
    document.getElementById('counter').innerHTML = nValue;
});

increment.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter').innerHTML);
    var nValue = 0;
    if(cValue == 5){
        nValue = cValue * (-1);
    }
    else{
        nValue = cValue + 1;
    }
    document.getElementById('counter').innerHTML = nValue;
});

reset.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter').innerHTML);
    document.getElementById('counter').innerHTML = 0;
}
);
