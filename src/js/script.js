
const container = document.querySelector('.container');
const calculator = container.querySelector('table');
const btnMode = calculator.querySelector('.mode');

btnMode.addEventListener('click',changeMode);

function changeMode(){
    if(container.classList.contains('dark')){
        container.classList.replace('dark','light');
        calculator.classList.replace('calculator-dark','calculator-light');
    }
    else{
        container.classList.replace('light','dark');
        calculator.classList.replace('calculator-light','calculator-dark');
    }
}