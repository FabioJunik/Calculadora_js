
const container = document.querySelector('.container');
const calculator = container.querySelector('table');
const btnMode = calculator.querySelector('.mode');
const display = calculator.querySelector('.display');

btnMode.addEventListener('click',changeMode);
document.querySelectorAll('button').forEach(btn=>{
    
    btn.addEventListener('click',()=>{
    
        const {value} = display;

        if(btn.classList.contains('btn-clear'))
            display.value = " ";

        else if(btn.classList.contains('btn-equal'))
            display.value = eval(value)

        else if(btn.classList.contains('btn-del'))
            display.value = value.substring(0,value.length -1)
        
        else
            display.value += btn.textContent;
    })
    
})


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