"use strict";

// input
const form = document.querySelector('.form');
const nameInput = document.querySelector('.hName');
const numInput = document.querySelector('.hNum');
const mm = document.querySelector('.mm');
const yy = document.querySelector('.yy');
const cvvInput = document.querySelector('.cvv');

const cardNum = document.querySelector('.card-num');
const cardName = document.querySelector('.card-name');
const cardMm = document.querySelector('.card-mm');
const cardYy = document.querySelector('.card-yy');
const cardCvv = document.querySelector('.cardCvv');

let submitBtn =document.querySelector('.s-btn');
const subStatus = document.querySelector('.s-status')
const inputs =[nameInput, numInput, mm, yy,cvvInput];

nameInput.addEventListener('input', (e)=>{
    if(e.target.value.length <= 16){    
        cardName.textContent = e.target.value;
}
})
numInput.addEventListener('input', (e)=>{

    const input = e.target.value.replace('/\s/g', '')
    const numPattern = input.replace(/(\d{4})/g, '$1 ').trim()
     e.value = numPattern
    cardNum.textContent = e.value;

})
mm.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){  
        cardMm.textContent = Number(e.target.value);
        
} 
})
yy.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){    
        cardYy.textContent = Number(e.target.value);
}
})
cvvInput.addEventListener('input', (e)=>{
    if(e.target.value.length <= 3){    
        cardCvv.textContent = Number(e.target.value);
}
})


// submit btn
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    // const errorLabel = document.querySelectorAll('small');

    const isValid = (inputs[0].value.length >=4 || inputs[0].value.length === 16) && inputs[1].value.length === 16 && inputs[2].value.length === 2 && inputs[3].value.length === 2 && inputs[4].value.length === 3 ? 'true': 'false';

    if(isValid === 'true'){
       form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
        return;
    };

    if(isValid === 'false'){
        inputs.filter(e => e.value === '')
        .forEach(e =>{
            e.style.color = 'hsl(0, 100%, 66%)';
            e.style.borderColor='hsl(0, 100%, 66%)'
       return;     
    }) 

   const errorLabel = document.querySelectorAll('small')
    errorLabel.forEach( e=>{
        e.textContent =  'this field is required';
           e.style.color='hsl(0, 100%, 66%)'
})
        return;
    };

    console.log(isValid);

})
 
         

// continue btn
const continueBtn = document.querySelector('.status-btn')
continueBtn.addEventListener('click', e=>{
    form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
    form.reset()
    location.reload()

})