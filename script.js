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

    const input = e.target.value.replace('/\s/g', '')
    const numPattern = input.replace(/(\d{4})/g, '$1 ').trim()
     e.value = numPattern
    cardNum.textContent = e.value;
    console.log(e.value)

})
mm.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){    
        cardMm.textContent = e.target.value;
    console.log(e.target.value)
} 
})
yy.addEventListener('input', (e)=>{
    if(e.target.value.length <= 2){    
        cardYy.textContent = e.target.value;
    console.log(e.target.value)
}
})
cvvInput.addEventListener('input', (e)=>{
    if(e.target.value.length <= 3){    
        cardCvv.textContent = e.target.value;
    console.log(e.target.value)
}
})

// form.addEventListener('submit', (e)=>{
//     e.preventDefault()
 
// } 
// )








// output
const subStatus = document.querySelector('.s-status')

const isValid = 

// submit btn
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    const inputs =[nameInput, numInput, mm, yy,cvvInput];
    const errorLabel = document.querySelectorAll('small');

    inputs.forEach(event=>{
        if(event.value === ''){
     event.style.color = 'hsl(0, 100%, 66%)';
    event.style.borderColor='hsl(0, 100%, 66%)';

    
    errorLabel.forEach( e=>{
         e.textContent =  'this field is required';
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


// continue btn
const continueBtn = document.querySelector('.status-btn')
continueBtn.addEventListener('click', e=>{
    form.classList.toggle('opacity-0')
    subStatus.classList.toggle('scale-0')
})