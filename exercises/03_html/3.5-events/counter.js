const decrement = document.getElementById('decrement');
const increment = document.getElementById('increment');
const reset = document.getElementById('reset');

decrement.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter'));
    var nValue = 0;
    if(cValue == -5 || cValue == 5){
        nValue = cValue * (-1);
    }
    else{
        nValue = cValue - 1;
    }
});

increment.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter'));
    var nValue = 0;
    if(cValue == -5 || cValue == 5){
        nValue = cValue * (-1);
    }
    else{
        nValue = cValue + 1;
    }
});

reset.addEventListener('click', (event) =>{
    const cValue = Number.parseInt(document.getElementById('counter'));
    cValue = 0;
}
);
