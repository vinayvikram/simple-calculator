const screen = document.querySelector('.screen');
let a = '';
let b = 0;
let op =null;

function output(button){

    a += button.innerHTML;
    screen.innerHTML = a;
}

function clearAll(){
    screen.innerHTML = "0";
    a = '';
    b = 0;
}

function back(){
    if (b == 0){
        a = screen.innerHTML;
        a = a.slice(0,-1);
        if (a === ''){
            screen.innerHTML = 0;
        }
        else{
            screen.innerHTML = a;
        }
    }
}

function add(){
    
    if (b === 0){
        b = parseInt(a);
    }
    else if (a !=='') {
        calculate();
    }
    console.log(b);
    a = '';
    op = 'add'
    screen.innerHTML = 0;
}

function subtract(){
    
    if (b === 0){
        b = parseInt(a);
    }
    else if (a !==''){
        calculate();
    }
    console.log(b);
    a = '';
    op = 'sub'
    screen.innerHTML = 0;
}

function multiply(){
    
    if (b === 0){
        b = parseInt(a);
    }
    else if (a !==''){
        calculate();
    }
    console.log(b);
    a = '';
    op = 'mul'
    screen.innerHTML = 0;
}

function divide(){

    if (b === 0){
        b = parseInt(a);
    }
    else if (a !==''){
        calculate();
    }
    console.log(b);
    a = '';
    op = 'div'
    screen.innerHTML = 0;
}

function calculate(){
    a = parseInt(a)

    if (op == 'add'){
        b = a + b;
    }
    else if ( op =='sub'){
        b = b - a;
    }
    else if ( op =='mul'){
        b = b * a;
    }
    else if ( op =='div'){
        b = b/a ;
    }

    op = null;
    console.log(b)
    a = '';
}

function equals(){
    calculate();
    screen.innerHTML = b;
}