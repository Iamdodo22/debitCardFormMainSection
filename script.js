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

nameInput.addEventListener('input', (e)=>{
    cardName.textContent = nameInput.value;
})
numInput.addEventListener('input', (e)=>{
    cardNum.textContent = numInput.value;
})
mm.addEventListener('input', (e)=>{
    cardMm.textContent = mm.value;
})
yy.addEventListener('input', (e)=>{
    cardYy.textContent = yy.value;
})
cvvInput.addEventListener('input', (e)=>{
    cardCvv.textContent = cvvInput.value;
})

form.addEventListener('submit', (e)=>{
    e.preventDefault()
 
} 
)








// output

const subStatus = document.querySelector('.s-status')
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const inputs =[nameInput, numInput, mm, yy,cvvInput];
    const errorLabel = document.querySelectorAll('small');
    inputs.forEach(event=>{
        if(event.value === ''){
     event.style.color = 'hsl(0, 100%, 66%)';
    event.style.borderColor='hsl(0, 100%, 66%)';

    
    errorLabel.forEach( e=>{ e.textContent =  'this field is required';
            e.style.color='hsl(0, 100%, 66%)'
})
    }
        
    else{form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
    event.style.color = ''
    event.style.borderColor=''
   

}
})
})

const continueBtn = document.querySelector('.status-btn')
continueBtn.addEventListener('click', e=>{
    form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
})